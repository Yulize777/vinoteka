import React from "react";
import {BsArrowRightCircleFill} from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import {Link} from "react-router-dom";

type itemType = {
    title: string,
    desc: string,
    url: string,
    read: string
}


const box:Array<itemType> = [
    {
        title: "Basic rules",
        desc:'Don’t let big names, ratings or awards mislead you. There are also excellent wines that ...',
        url: "https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/etiket.jpg?fit=600%2C400&ssl=1",
        read: "Read"
    },
    {
        title: "Wine drinking and health …",
        desc:'There is a popular saying that there are more old wine lovers in the world ...',
        url: "https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/piti-vino-polezno.jpg?fit=600%2C400&ssl=1",
        read: "Read"
    },
    {
        title: "At which temperature a wine should be served?",
        desc:'Everyone probably heard that white wine should be drunk chilled, and red wine should be consumed at ...',
        url: "https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/pri-kakoi-temperature.jpg?fit=600%2C400&ssl=1",
        read: "Read"
    },
    {
        title: "Which wines are better, dry ones or sweet ones?",
        desc:'In Soviet times, unfortunately, low-quality wines were often covered by sugar...',
        url: "https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/suhoe-ili-sladkoe.jpg?fit=600%2C400&ssl=1",
        read: "Read"
    }
]



export const Last = () => {

    return(
        <section className="last">
            <div className="container">
                <div className="last__content">

                    <Swiper
                        className=" last__content-left"
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{delay: 2000}}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        {
                            box.map((item : itemType) => (
                                <SwiperSlide key={item.url} className="last__content-box"
                                style={{
                                    background: `url(${item.url}) center/cover no-repeat`
                                }}>
                                    <h2 className="last__content-box-title">
                                        {item.title}
                                    </h2>

                                    <p className="last__content-box-desc">
                                        {item.desc}
                                    </p>

                                    <p className="last__content-box-desc"
                                    style={{marginTop: '30px'}}>
                                        {item.read}
                                    </p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <div className="last__content-right">
                        <h2 className="last__content-right-title">
                            Articles about wines
                        </h2>

                        <p className="last__content-right-subtitle">
                            Do you want to learn more?
                        </p>

                        <p className="last__content-right-desc">
                            We prepared some basic information for you and hope that this will answer most of frequently asked questions. For instance: How to choose a good wine? Which wine to prefer — dry or sweet? Why we drink white wine chilled and red wine just below room temperature? And others.
                        </p>

                        <Link to="/articles" className="last__content-right-link">
                            Read all articles
                            <BsArrowRightCircleFill className="last__content-right-icon" size={20} fill="#784b4b"/>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}