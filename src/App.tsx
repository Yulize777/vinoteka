import {Suspense, useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

import './styles/styles.scss'
import {Preloader} from "./pages/Preloader/Preloader";
import {Layout} from "./Layout/Layout";
import {Home} from './pages/Home/Home'
import {Register} from "./pages/Register/Regiser";
import {Login} from "./pages/Login/Login";
import {About} from "./pages/About/About";
import {Store} from "./pages/Store/Store";
import {NotFound} from "./pages/NotFound/NotFound";
import {Delivery} from "./pages/Delivery/Delivery";
import {Articles} from "./pages/Articles/Articles";
import {Tasting} from "./pages/Tasting/Tasting";
import {Catalog} from "./pages/Catalog/Catalog";
import {AboutWine} from "./components/AboutWine/AboutWine";
import {useAppDispatch, useAppSelector} from "./hooks/hooksRedux";
import {userSlice} from './redux/reducers/user'
import {Review} from "./pages/Review/Review";
import {Basket} from "./pages/Basket/Basket";


function App () {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {increment} = userSlice.actions

    const {user} = useAppSelector(store => store.userReducer)

    useEffect(() => {
        navigate('/preloader')
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
    },[navigate])

    useEffect(() => {
        dispatch(increment(JSON.parse(localStorage.getItem('user') || '{}')))
    },[])

    return (
    <Suspense>
        {
            user === '' ?
                <Routes>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes> :

                <Routes>
                    {/*<Route path='/preloader' element={<Preloader/>}/>*/}
                    <Route path='/' element={<Layout/>}>
                        <Route path='' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/store' element={<Store/>}/>
                        <Route path='/delivery' element={<Delivery/>}/>
                        <Route path='/articles' element={<Articles/>}/>
                        <Route path='/tasting' element={<Tasting/>}/>
                        <Route path='/catalog' element={<Catalog/>}/>
                        <Route path='/review' element={<Review/>}/>
                        <Route path='/aboutWine/:id' element={<AboutWine/>}/>
                        <Route path='/basket' element={<Basket/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
        }
    </Suspense>
  );
}

export default App;
