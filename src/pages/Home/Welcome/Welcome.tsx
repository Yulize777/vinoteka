import React from 'react';

import {GrInstagram} from 'react-icons/gr'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Welcome = () => {

    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome__centre">
                    <p className="welcome__centre-subtitle">
                        Welcome to
                    </p>
                    <p className="welcome__centre-title">
                        <img style={{borderBottom: "5px solid white", paddingBottom: "15px"}} src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/logo-vinoteka-white.png?w=1414&ssl=1"/>
                    </p>

                    <p className="welcome__centre-bottom">
                        Wines that you will like
                    </p>
                </div>

                <div className="welcome__social">
                    <a className="welcome__social-link" href="https://www.instagram.com/vinotekakg/">
                        <GrInstagram/>
                    </a>
                    <a className="welcome__social-link" href="https://www.facebook.com/Vinoteka.kg/">
                        <FaFacebookSquare/>
                    </a>
                    <a className="welcome__social-link" href="https://api.whatsapp.com/send?phone=996707330105">
                        <AiOutlineWhatsApp/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Welcome;