import React from "react";
import {Link} from "react-router-dom";
import {BsArrowRightCircleFill} from "react-icons/bs";

export const Red = () => {
    return(
        <section className="red">
            <div className="container">
                <div className="red__content">
                    <div className="red__left">
                        <img src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/red-wine-eng.png?w=648&ssl=1" alt="" style={{transform: "translateX(-70px)"}}/>
                    </div>
                    <div className="red__right">
                        <h2 className="red__right-title">
                            Red wines
                        </h2>

                        <p className="red__right-subtitle">
                            The best choice to enjoy a relaxed evening
                        </p>

                        <p className="red__right-desc">
                            Try a beautiful Grenache, classic Bordeaux, the temperament of a Spanish wine or an elegant Pinot Noir …
                        </p>

                        <Link className="red__right-link" to="/">
                            See all red wines
                            <BsArrowRightCircleFill fill="#784b4b" className="cozy__left-link-icon"/>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}