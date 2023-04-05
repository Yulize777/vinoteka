import React, {useState} from "react";
import InputMask from 'react-input-mask';
import {useForm} from "react-hook-form";

import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import axios from "../../utils/axios";
import {useLocation, useNavigate,Link} from "react-router-dom";

import {AxiosResponse} from "axios";
import { useToast } from '@chakra-ui/react'


import {formType} from "../../models/models";
import {useAppDispatch} from "../../hooks/hooksRedux";
import {userSlice} from "../../redux/reducers/user";


export const Form = () => {

    const toast = useToast()

    const dispatch = useAppDispatch()

    const {pathname} = useLocation()

    const {increment} = userSlice.actions

    const navigate = useNavigate()

    const [see,setSee] = useState(false)

    const [saw,setSaw] = useState(false)

    const {
        register,
        getValues,
        handleSubmit,
        reset,
        formState:{errors}} = useForm<formType>({
        defaultValues: {
            name: '',
            surname: '',
            gender: '',
            phone: '',
            password: '',
            confirm: '',
            agree: false,
            email: ''
        }
    })


    const registerUser = (data: formType) => {

        const {confirm, ...other } = data

        axios.post(`/register`, {...other})
            .then((res: AxiosResponse<any>) => {
                localStorage.setItem('user',JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))
                dispatch(increment(res.data))
                reset()
                toast({
                    title: 'Account created',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
                navigate('/')
            })
            .catch(err => {
                toast({
                    title: "You cant registration",
                    description: err.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
            })
    }
    

    const loginUser = (data: formType) => {

        const {confirm, ...other } = data

        axios.post(`/login`, {...other})
            .then((res: AxiosResponse<any>) => {
                localStorage.setItem('user',JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))
                dispatch(increment(res.data.user))
                reset()
                toast({
                    title: "Log in account",
                    description: "We've log in your account",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
                navigate('/')
            })
            .catch(err => {
                toast({
                    title: "You cant log in",
                    description: err.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
            })
    }

    const submit = (data : formType) => {

        pathname === '/register' ? registerUser(data) : loginUser(data)
    }

    return (
        <form className="form" noValidate onSubmit={handleSubmit(submit)}>
            <h1 className="form__title">
                {
                    pathname === '/register' ? 'Registration' : "Auth"
                }
            </h1>

            <div className="form__box">
                {
                    pathname === '/register' ?
                        <label className="form__box-label"
                                                       style={{borderBottom:errors.name? "2px solid red" : "2px solid #663333"}}>
                        <input
                            {...register('name', {
                                required: {
                                    message: "required field" , value: true
                                }
                            })}
                            className="form__box-field"
                            type="text" placeholder='Name'/>

                        <p className="form__box-error">{errors.name?.message}</p>

                    </label> : ''
                }

                {
                    pathname === '/register' ?
                        <label className="form__box-label"
                               style={{borderBottom:errors.surname? "2px solid red" : "2px solid #663333"}}>
                            <input
                                {...register('surname', {
                                    required: {
                                        message: "required field" , value: true
                                    }
                                })}
                                className="form__box-field" type="text" placeholder="Surname"/>
                            <p className="form__box-error">{errors.surname?.message}</p>
                        </label>: ''
                }


                {
                    pathname === '/register' ?
                        <div className="form__box-gender"
                             style={{borderBottom:errors.gender? "2px solid red" : ''}}>

                            <h2 className="form__box-gender-title"
                                style={{color:errors.gender? 'red' : '#663333' }}
                            >Choose your gender</h2>

                            <label className="form__box-gender-radio">
                                <input {...register('gender',{
                                    required: {
                                        message: "tab your gender",
                                        value: true
                                    }
                                })} value={'man'} type="radio" name={'gender'}/>
                                Man
                            </label>

                            <label className="form__box-gender-radio">
                                <input {...register('gender',{
                                    required: {
                                        message: "tab your gender",
                                        value: true
                                    }
                                })} value={'woman'} type="radio" name={'gender'} />
                                Woman
                            </label>
                        </div> : ''
                }


                {
                    pathname === '/register' ?
                        <label className='form__box-label'
                               style={{borderBottom:errors.phone? "2px solid red" : "2px solid #663333"}}>
                            <InputMask
                                {...register('phone', {
                                    required: {
                                        value: true,
                                        message: "Write your number"
                                    },
                                    pattern: {
                                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                        message: "Write your number"
                                    }
                                })}
                                mask={`+\\9\\96(999)99-99-99`} type='tel' className="form__box-field"  placeholder="Phone number"/>
                            <p className="form__box-error">{errors.phone?.message}</p>
                        </label> : ''
                }


                <label className="form__box-label"
                       style={{borderBottom:errors.email? "2px solid red" : "2px solid #663333"}}>
                    <input
                        {...register('email', {
                            required: {
                                message: "email field is required",
                                value: true
                            },
                            minLength: {
                                message: "Your email is wrong",
                                value: 8
                            },
                            pattern: {
                                message: "Your email is wrong",
                                value: /^[^]+@[^ ]+\.[a-z]{2,5}$/
                            }
                        })}
                        className="form__box-field" type="email" placeholder="Email"/>
                    <p className="form__box-error">{errors.email && errors.email.message}</p>
                </label>

                <label className="form__box-label"
                       style={{borderBottom:errors.password? "2px solid red" : "2px solid #663333"}}>
                    <input
                        {...register('password',{
                            required: {
                                message: "Write your password", value: true
                            },
                            pattern:{
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                message: "Your password is easy"
                            }})}
                        className="form__box-field" type={saw ? "text" : "password"} placeholder="Password"/>

                    {
                        saw ? <AiFillEyeInvisible className="form__box-eye" fill="#663333" size={20} onClick={() => setSaw(false)}/> :  <AiFillEye className="form__box-eye" fill="#663333" size={20} onClick={() => setSaw(true)}/>
                    }
                    <p className="form__box-error">{errors.password && errors.password.message}</p>
                </label>


                {
                    pathname === '/register' ?
                        <label className="form__box-label"
                               style={{borderBottom:errors.confirm? "2px solid red" : "2px solid #663333"}}>
                            <input
                                {...register('confirm', {
                                    required: {
                                        message: "Confirm your password",
                                        value: true
                                    },
                                    validate: (v) => {
                                        if(getValues('password') !== v){
                                            return "is not same"
                                        }
                                    }
                                })}
                                className="form__box-field" type={see ? "text" : "password"} placeholder="Confirm password"/>

                            {
                                see ? <AiFillEyeInvisible className="form__box-eye" fill="#663333" size={20} onClick={() => setSee(false)}/> :  <AiFillEye className="form__box-eye" fill="#663333" size={20} onClick={() => setSee(true)}/>
                            }
                            <p className="form__box-error">{errors.confirm && errors.confirm.message}</p>
                        </label> : ''
                }
            </div>


            {
                pathname === '/register' ?
                    <div className="form__agree">
                        <label className="form__agree-age">
                            <input
                                {...register('agree', {
                                    required: {
                                        message: "You need to have 18 years ",
                                        value: true
                                    }
                                })}
                                className="form__agree-check" type="checkbox" />
                            <p className="form__agree-desc" style={{color: errors.agree ? "red" : "#663333"}}>
                                I yet have 18 old
                            </p>
                        </label>
                    </div> : ''
            }

            <button className="form__btn" type="submit">
                {
                    pathname === '/register' ? "Registration" : "Auth"
                }
            </button>

            <div className="form__bottom">
            {
                pathname === '/register' ?
                    <Link to="/login" className="form__bottom-link">You already have an account</Link>
                    :
                    <Link to="/register" className="form__bottom-link">I don't have an account yet</Link>
            }
            </div>
        </form>
    )
}