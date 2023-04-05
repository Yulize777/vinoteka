import React from "react";
import {RedBg} from "../../components/RedBg/RedBg";


export const Tasting = () => {
    return(
        <section className="tasting">
            <RedBg title="Tasting"/>
            <div className="container">
                <div className="tasting__content">
                    <div className="tasting__desc">
                        <p className="tasting__text">
                            You do not know what wine to choose?
                        </p>

                        <p className="tasting__text">
                            Part of our idea to promote wine culture in Kyrgyzstan has been arranging tastings. If you find it difficult to choose a specific wine, you are always welcome to taste first and order the wine you like the most. Simply come to “Vinoteka” and contact our service staff.
                        </p>

                        <p className="tasting__text">
                            Do you want to organize a special tasting event? Contact us to discuss the list of wines for tasting. We will then provide you and your guests more information about grapes viticulture, food pairings and many other things, if you find this interesting.
                        </p>

                        <p className="tasting__text">
                            Our tastings are held every day, regardless of the time, whenever you decide to visit us. <br/>
                            Looking forward to meeting you – we wish a pleasant wine drinking!
                        </p>


                    </div>

                    <p className="tasting__desc-box">
                        <img className="tasting__desc-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/img5.png?w=351&ssl=1" alt=""/>
                    </p>
                </div>

                <div className="tasting__gallery">
                    <p className="tasting__gallery-box">
                        <img className="tasting__gallery-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/DSC_0225-1.jpg?w=1400&ssl=1" alt=""/>
                    </p>
                    <p className="tasting__gallery-box">
                        <img className="tasting__gallery-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/22-1.jpg?w=1400&ssl=1" alt=""/>
                    </p>
                    <p className="tasting__gallery-box">
                        <img className="tasting__gallery-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/DSC_0219-1.jpg?w=1400&ssl=1" alt=""/>
                    </p>
                </div>
            </div>
        </section>
    )
}