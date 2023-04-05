import React from "react";
import {BsArrowRightCircleFill} from "react-icons/bs";
import {Link} from "react-router-dom";

export const Card = () => {
    return (
        <section className="card">
            <div className="container">
                <div className="card__content">

                    <Link to="/delivery" className="card__left">
                        <h2 className="card__left-title">
                            Wines
                        </h2>

                        <p className="card__left-subtitle">
                            <img src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/delivery.png?fit=184%2C30&ssl=1" alt=""/>
                        </p>

                        <p className="card__left-desc">
                            Enjoy your favorite <br/>
                            wine anytime <br/>
                            and anywhere
                        </p>

                        <span className="card__left-link">
                            Delivery terms
                            <BsArrowRightCircleFill  fill="#784b4b" className="card__left-icon"/>
                        </span>
                    </Link>

                    <Link to="/tasting" className="card__left card__right">
                        <h2 className="card__left-title card__right-title">
                            Wines
                        </h2>

                        <p className="card__left-subtitle">
                            <img src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/tasting.png?fit=172%2C30&ssl=1" alt=""/>
                        </p>

                        <p className="card__left-desc">
                            You are always welcome<br/>
                            to organization your <br/>
                            personalized tasting event
                        </p>

                        <span className="card__left-link card__right-link">
                            Read more
                            <BsArrowRightCircleFill  fill="#784b4b" className="card__left-icon card__right-icon"/>
                        </span>
                    </Link>

                </div>
            </div>
        </section>
    )
}