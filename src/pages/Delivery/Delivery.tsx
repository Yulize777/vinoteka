import React from "react";
import {BsClockHistory} from "react-icons/bs";
import {TfiWallet} from "react-icons/tfi";
import {MdDeliveryDining} from "react-icons/md";
import {RedBg} from "../../components/RedBg/RedBg";

export const Delivery = () => {

    return(
        <section className="delivery">

            <RedBg title="Delivery"/>

            <div className="container">
                <div className="delivery__info">
                    <p className="delivery__info-text">
                        We deliver wine and food mostly within three hours at a pre-agreed convenient time (within Bishkek). For other regions in Kyrgyzstan – please check delivery terms.
                    </p>

                    <p className="delivery__info-text">
                        If you live outside the city or in regions, please contact us to find out delivery cost and terms: phone +996 (707) 33 01 05
                    </p>

                    <div className="delivery__info-box">
                        <div className="delivery__info-box-card">
                            <BsClockHistory fill="#db3f44" size={50}/>
                            <span className="delivery__info-box-subtitle">
                                Average delivery time - 3 hours
                            </span>
                        </div>

                        <div className="delivery__info-box-card">
                            <TfiWallet fill="#db3f44" size={50}/>
                            <span className="delivery__info-box-subtitle">
                                Delivery cost in Bishkek is 200 som. <br/>
                                Orders exceeding 3500 som are delivered for free.
                            </span>
                        </div>

                        <div className="delivery__info-box-card">
                            <MdDeliveryDining fill="#db3f44" size={50}/>
                            <span className="delivery__info-box-subtitle">
                                We have delivery outside the city
                            </span>
                        </div>
                    </div>

                    <p className="delivery__info-text">
                        * we deliver only to clients that have reached the minimum legal age. The courier is obliged by law to double-check the minimum legal age. Customers that fail to confirm the minimum legal age will not receive the order but will be billed for delivery service
                    </p>
                </div>
            </div>
        </section>
    )
}