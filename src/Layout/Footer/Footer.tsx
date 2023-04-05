import React from 'react';
import {GrInstagram} from "react-icons/gr";
import {FaFacebookSquare} from "react-icons/fa";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {BsTelephoneInbound} from "react-icons/bs";
import {ImLocation} from "react-icons/im";
import {BiRestaurant} from "react-icons/bi";
import {BiWine} from "react-icons/bi";
import {BiArrowToTop} from "react-icons/bi"

export const Footer = () => {

    return (
        <section className="footer">

            <div className="footer__scroll" onClick={() => window.scrollTo(0, 0)}>
                <BiArrowToTop size={40} fill="white"/>
            </div>


            <div className="container">
                <nav className="footer__nav">

                    <div className="footer__block">
                        <h1 className="footer__block-title">
                            <img src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/02/Слой_38.png?fit=178%2C39&ssl=1" alt=""/>
                        </h1>

                        <div className="footer__block-social">
                            <a className="footer__block-link" href="https://www.instagram.com/vinotekakg/">
                                <GrInstagram size={25} fill="#663333"/>
                            </a>
                            <a className="footer__block-link" href="https://www.facebook.com/Vinoteka.kg/">
                                <FaFacebookSquare size={25} fill="#663333"/>
                            </a>
                            <a className="footer__block-link" href="https://api.whatsapp.com/send?phone=996707330105">
                                <AiOutlineWhatsApp size={25} fill="#663333"/>
                            </a>
                        </div>
                    </div>

                    <div className="footer__block">
                        <h2 className="footer__block-list-title">
                            Contacts
                        </h2>

                        <div className="footer__block-list">
                            <a className="footer__block-list-item">
                                <span><BsTelephoneInbound  size={20} fill="white"/></span>
                                +996 (707) 330 105
                            </a>
                            <a className="footer__block-list-item">
                                <span><BsTelephoneInbound  size={20} fill="white"/></span>
                                +996 (770) 33 01 07
                            </a>

                            <a className="footer__block-list-item">
                                <span><ImLocation  size={20} color="white"/></span>
                                г.Бишкек, Чуй 140 а
                            </a>
                        </div>
                    </div>

                    <div className="footer__block">
                        <h2 className="footer__block-list-title">
                            Working hours
                        </h2>

                        <div className="footer__block-list">
                            <a className="footer__block-list-item">
                                <span><BiRestaurant  size={20} fill="white"/></span>
                                Restaurant: from 12:00 p.m. to 12:00 a.m.
                            </a>

                            <a className="footer__block-list-item">
                                <span><BiWine  size={20} color="white"/></span>
                                Wine delivery: from 9:00 a.m. to 12:00 a.m.
                            </a>
                        </div>
                    </div>

                </nav>
            </div>
        </section>
    );
};

