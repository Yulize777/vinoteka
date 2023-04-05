import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import createSubject from "react-hook-form/dist/utils/createSubject";


export const Preloader = () => {

    const [anime,setAnime] = useState(false)

    const navigate = useNavigate()

    setTimeout(() => {
        setAnime(true)
    },4000)

    setTimeout(() => {
        navigate('/')
    },5000)

    return (
        <section className='preloader'>
            <img className={anime? 'preloader__img active' : 'preloader__img'} src="https://i.gifer.com/embedded/download/K1G9.gif" alt=""/>
        </section>
    );
};
