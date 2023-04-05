import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

export const Popular = () => {
    return(
        <section className='popular'>
            <div className="container">
                <h2 className="popular__title">
                    Most popular
                </h2>

                <p className="popular__subtitle">
                    Favorite wines for <br/>
                    sweet memories
                </p>


                <div className="popular__content">

                    <Swiper
                        className=" mySwiper popular__content-left"
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{delay: 5000}}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/sauvignon-blank-eng.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/pino-grigio-eng.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/passiari-1.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/merlot-1.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/grenache-1.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/cot-de-rousilion-1.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/grillo-1.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/coto-dezas-en.png?w=273&ssl=1" alt=""/>
                        </SwiperSlide>

                        <SwiperSlide className="popular__content-box">
                            <img className="popular__content-box-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/Riesling-imperial-en.png?w=274&ssl=1" alt=""/>
                        </SwiperSlide>
                    </Swiper>

                    <div className="popular__content-right">
                        <h2 className="popular__content-right-title">
                            Wine sets
                        </h2>

                        <p className="popular__content-right-subtitle">
                            more
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}