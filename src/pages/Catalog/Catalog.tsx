import React, {useRef, useState} from "react";
import {Card} from "../../components/Card/Card";
import {useDebounce} from "../../hooks/debounce";
import {winesApi} from "../../redux/reducers/wines";
import {useParams} from "react-router-dom";

const categoryWine = ['Red',"White","Rose","Champagne","Sweet"]
const countyWine = ['France',"Italy","South-Africa","Germany","Portugal","Spain"]


export const Catalog = () => {

    const [search,setSearch] = useState('')
    const [category,setCategory] = useState('All')
    const [sort,setSort] = useState('All')
    const [country,setCountry] = useState('All')
    const debounced = useDebounce(search)

    const filter = `${debounced !== ''? `name_like=${debounced}&` : '&'}${category !== 'All'? `category=${category}&` : '&'}${sort !== 'All'? `${sort}&` : '&'}${country !== 'All' ? `country=${country}&`: '&'}`

    const {data: wines, error, isLoading} = winesApi.useFetchAllWinesQuery(filter)

    return(
        <section className="catalog">
            <div className="container">
                <h2 className="catalog__title">
                    Shop
                </h2>

                <div className="catalog__nav">
                    <ul className="catalog__nav-ul">
                        <li className="catalog__nav-left">Main</li>
                        <li className="catalog__nav-left">{'>'}</li>
                        <li className="catalog__nav-left">Shop</li>
                        <li className="catalog__nav-left">{'>'}</li>
                    </ul>
                </div>

                <div className="catalog__content">
                    <aside className="catalog__content-aside">
                        <label className="catalog__content-aside-label">
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className="catalog__content-aside-input" type="text" placeholder="Search by name"/>
                        </label>

                        <div className="catalog__content-aside-label">
                            <select className="catalog__content-aside-select" onChange={(e) => setCategory(e.target.value)}>
                                <option className="catalog__content-aside-option" value='All' defaultChecked={true}>Sort by category: All</option>

                                {
                                    categoryWine.map(item => (
                                        <option className="catalog__content-aside-option" key={item} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="catalog__content-aside-label">
                            <select className="catalog__content-aside-select" onChange={(e) => setSort(e.target.value)}>
                                <option className="catalog__content-aside-option" value='all' defaultChecked>Default sort</option>
                                <option className="catalog__content-aside-option" value='_sort=bought&_order=desc'>Sort by popularity</option>
                                <option className="catalog__content-aside-option" value='_sort=rating&_order=desc'>Sort by rating</option>
                                <option className="catalog__content-aside-option" value='_sort=price&_order=desc'>Prices: on an increase</option>
                                <option className="catalog__content-aside-option" value='_sort=price&_order=asc'>Prices: descending</option>
                            </select>
                        </div>


                        <div className="catalog__content-aside-label">
                            <select className="catalog__content-aside-select" onChange={(e) => setCountry(e.target.value)}>
                                <option className="catalog__content-aside-option" value='All'>Sort by country : All</option>
                                {
                                    countyWine.map(item => (
                                        <option className="catalog__content-aside-option" key={item} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>


                    </aside>

                    <div className="catalog__content-right">

                        {

                            isLoading ?
                                <img style={{transform: 'translate(100px, 50px)'}}
                                     src="https://cdn.dribbble.com/users/2762516/screenshots/14914852/media/40372a750de9d71d52b8e08b95215f7b.gif" alt=""/>
                                : error ? <img style={{transform: 'translate(100px, 50px)'}}
                                                  src="https://media.tenor.com/i27B-Xj0CSQAAAAC/welcome-to-the-club-buddy-butt-slap.gif" alt=""/> :
                                    wines && wines
                                        .map((wines) => (
                                            <Card key={wines.id} wines={wines}/>
                                        )).reverse()
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}