import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/user'
import {winesApi} from "./reducers/wines";
import {reviewApi} from "./reducers/review";


const rootReducer = combineReducers({
    userReducer,
    [winesApi.reducerPath]: winesApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(winesApi.middleware)
                .concat(reviewApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

