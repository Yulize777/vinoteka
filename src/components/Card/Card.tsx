import React, {FC} from "react";
import {winesType} from "../../models/models";
import {Link} from "react-router-dom";

interface props {
    wines: winesType
}

export const Card: FC<props> = ({wines} ) => {

    return(
        <Link to={`/aboutWine/${wines.id}`} className="cards">
            <div className="cards__bg"
            style={{background: `url("${wines.image}") center/cover no-repeat`}}>
                <p className="cards__bg-text">
                    {wines.description}
                </p>
            </div>

            <div className="cards__info">
                <h2 className="cards__info-title">
                    {wines.name}
                </h2>

                <div className="cards__info-box">
                    <p className="cards__info-price">
                        {wines.price} KGS
                    </p>

                    <p className="cards__info-price-btn">
                        More
                    </p>
                </div>
            </div>
        </Link>
    )
}