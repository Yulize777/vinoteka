import React,
{useState} from "react";
import {
    Link, useNavigate,
    useParams
} from "react-router-dom";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from '@chakra-ui/react'
import {Avatar} from '@chakra-ui/react'
import {ImEarth} from "react-icons/im";
import {BsArrowRightCircleFill, BsCalendar2Plus} from "react-icons/bs";
import {SlChemistry} from "react-icons/sl";
import {TbColorFilter} from "react-icons/tb";
import {FaPercentage} from "react-icons/fa";
import {GiWaterDrop} from "react-icons/gi";
import {FaCity} from "react-icons/fa";
import {GiGrapes} from "react-icons/gi";
import {FaStar} from "react-icons/fa";
import {winesApi} from "../../redux/reducers/wines";
import '@smastrom/react-rating/style.css'


import '@smastrom/react-rating/style.css'
import {Rating, Star} from "@smastrom/react-rating";
import {Card} from "../Card/Card";

export const AboutWine = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const {data} = winesApi.useDetailWineQuery(Number(id))


    const myStyles = {
        itemShapes: Star,
        activeFillColor: 'orange',
        inactiveFillColor: 'yellow'
    }

    const [text, setText] = useState('')

    const wine = data && data[0]

    const [categoryWine, setCategoryWine] = useState(wine && wine.category)

    const {data: sliderWine} = winesApi.useSliderWineQuery(categoryWine)

    let countWine = 0

    let ratingLength: any = 0

    ratingLength = wine?.rating.length

    wine?.rating.map((item,idx) => {
        countWine += item
    })
    countWine = countWine/ratingLength


    return (
        <section className="detail">
            <div key={wine?.id} className="container">

                <p className="detail__nav" onClick={() => navigate(-1)}>
                    <BsArrowRightCircleFill className="detail__nav-icon" size={20} fill="#784b4b" style={{transform: 'rotate(180deg)'}}/>
                    Turn back
                </p>

                <div className="detail__content">

                    <div className="detail__left">
                        <img className="detail__left-img" src={wine?.image} alt={wine?.name}/>
                    </div>

                    <div className="detail__right">
                        <h2 className='detail__right-title'>{wine?.name}</h2>
                        <p className="detail__right-price">{wine?.price} KGS</p>
                        <ul className="detail__right-info">

                            <li className="detail__right-about">
                                <ImEarth fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Country:</span>
                                {wine?.country}
                            </li>


                            <li className="detail__right-about">
                                <FaCity fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Region:</span>
                                {wine?.region}
                            </li>

                            <li className="detail__right-about">
                                <SlChemistry fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Producer:</span>
                                {wine?.producer}
                            </li>

                            <li className="detail__right-about">
                                <TbColorFilter fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Category:</span>
                                {wine?.category}
                            </li>

                            <li className="detail__right-about">
                                <GiWaterDrop fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Moisture:</span>
                                {wine?.dry}
                            </li>

                            <li className="detail__right-about">
                                <BsCalendar2Plus fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Year:</span>
                                {wine?.year}
                            </li>

                            <li className="detail__right-about">
                                <FaPercentage fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Alc:</span>
                                {wine?.alc} %
                            </li>

                            <li className="detail__right-about">
                                <GiGrapes fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Grape:</span>
                                {wine?.grape}
                            </li>

                            <li className="detail__right-about">
                                <FaStar fill="#663333" size={35}/>
                                <span className="detail__right-about-bold">Rating:</span>
                                {countWine}
                            </li>
                        </ul>
                    </div>
                </div>


                <Tabs className="detail__bottom" position="relative" variant="unstyled">

                    <TabList className="detail__bottom-tab">
                        <Tab className="detail__bottom-tab-text">Description</Tab>
                    </TabList>

                    <TabPanels className="detail__bottom-panel">
                        <TabPanel>
                            <p className="detail__bottom-review">{wine?.description}</p>
                        </TabPanel>

                    </TabPanels>

                </Tabs>


                <div className="detail__slider">
                    <h2 className="detail__slider-title">Similar products</h2>

                    <div className="detail__slider-box">
                        {
                            sliderWine?.map(item => (
                                <Card wines={item} key={item.id}/>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}