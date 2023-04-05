import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooksRedux";

export const NotFound = () => {

    const {user} = useAppSelector(store => store.userReducer)

    if(user === ''){
        return <Navigate to='/login'/>
    }

    return (
        <Navigate to='/'/>
    )
}