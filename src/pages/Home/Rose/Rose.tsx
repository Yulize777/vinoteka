import React from "react";
import {Link} from "react-router-dom";
import {BsArrowRightCircleFill} from "react-icons/bs";

export const Rose = () => {
    return(
        <section className="red rose" style={{padding: '80px 0'}}>
            <div className="container">
                <div className="red__content">
                    <div className="red__right">
                        <h2 className="rose__title">
                            Rose wines
                        </h2>

                        <p className="red__right-subtitle">
                            One of the best possible ways, pairs simply with almost everything…
                        </p>

                        <p className="red__right-desc">
                            Discover the attractive taste of our Rose from Provence, the silky Bandol Rose or the fruity summer aromas of the Languedoc Rose
                        </p>

                        <Link className="red__right-link" to="/">
                            See all rose wines
                            <BsArrowRightCircleFill fill="#784b4b" className="cozy__left-link-icon"/>
                        </Link>

                    </div>
                    <div className="red__left">
                        <img src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/rose-wine-1.png?w=783&ssl=1" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}