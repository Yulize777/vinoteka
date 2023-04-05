import React from "react";
import {BsArrowRightCircleFill} from "react-icons/bs";
import {Link} from "react-router-dom";

export const Cozy = () => {

    return(
        <section className="cozy" id="#about">
            <div className="container">
                <div className="cozy__content">
                    <div className="cozy__left">
                        <h2 className="cozy__left-title">
                            Store
                        </h2>

                        <p className="cozy__left-desc">
                            “Vinoteka” offers you a variety of wines from different countries and regions like France, Italy, Portugal, South Africa, Spain and Germany. We are constantly expanding the geography of our wines and provide you with a wide range for every taste and budget.
                        </p>

                        <Link to="/store" className="cozy__left-link" style={{justifyContent: 'right'}}>
                            About store
                            <BsArrowRightCircleFill size={20} fill="#784b4b" className="cozy__left-link-icon"/>
                        </Link>
                    </div>
                    <div className="cozy__left" style={{textAlign: 'left'}}>
                        <h2 className="cozy__left-title">
                            Restaurant
                        </h2>

                        <p className="cozy__left-desc">
                            We are loving wine and the art of wine making - this led to the creation of “Vinoteka”. “Vinoteka” is a place where you can enjoy exquisite wines and the wonderful cozy atmosphere of our premises that will turn any visit into an unforgettable experience.
                        </p>
                        <Link to="/about" className="cozy__left-link">
                            About restaurant
                            <BsArrowRightCircleFill size={20} fill="#784b4b" className="cozy__left-link-icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}