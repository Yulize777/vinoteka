import React from "react";
import {Link} from "react-router-dom";
import {BsArrowRightCircleFill} from "react-icons/bs";

export const White = () => {
    return(
        <section className="red white">
            <div className="container">
                <div className="red__content">

                    <div className="red__left">
                        <img src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/white-wine-eng.png?w=561&ssl=1" alt=""/>
                    </div>


                    <div className="red__right">
                        <h2 className="rose__title">
                            White wines
                        </h2>

                        <p className="red__right-subtitle">
                            A perfect start...
                        </p>

                        <p className="red__right-desc">
                            Enjoy a fruitful Grillo from Sicily, get inspired by a refreshing Spumante, an exquisite Riesling or the beautiful complex Custoza…
                        </p>

                        <Link className="red__right-link" to="/">
                            See all white wines
                            <BsArrowRightCircleFill fill="#784b4b" className="cozy__left-link-icon"/>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}