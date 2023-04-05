import React from "react";

export const Love = () => {
    return (
        <section className="love">
            <div className="container">
                <h2 className="love__title" style={{color: "#252125",fontWeight: '900'}}>
                    People love us, because...
                </h2>

                <div className="love__content">

                    <div className="love__content-left">

                        <div className="love__content-left-item">
                            <div className="love__content-left-info">
                                <h2 className="love__content-left-title">
                                    ...we take care from the very first minute:
                                </h2>


                                <p className="love__content-left-desc">
                                    Every year we attend wine exhibitions and visit winemakers of different countries, to ensure that you can enjoy a wide range of high-quality wines.
                                    Our wine is transported and stored according to all standards.
                                </p>
                            </div>

                            <img className="love__content-left-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/icon1-1.png?fit=75%2C75&ssl=1    " alt=""/>
                        </div>

                        <div className="love__content-left-item">
                            <img className="love__content-left-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/icon2-1.png?fit=75%2C75&ssl=1" alt=""/>

                            <div className="love__content-left-info" style={{textAlign: "left"}}>
                                <h2 className="love__content-left-title">
                                    We provide a unique selection of wines
                                </h2>


                                <p className="love__content-left-desc">
                                    Our wine selection is exclusive – by choosing “Vinoteka” you will receive both, unique taste and guaranteed quality
                                </p>

                            </div>
                        </div>

                    </div>

                    <div className="love__content-left">

                        <div className="love__content-left-item">

                            <div className="love__content-left-info" style={{textAlign: "right"}}>
                                <h2 className="love__content-left-title">
                                    And here you will feel like home
                                </h2>


                                <p className="love__content-left-desc">
                                    “Vinoteka” is a family business and we do everything possible to let our customers feel like home as well.
                                </p>
                            </div>

                            <img className="love__content-left-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/icon-4-2.png?fit=75%2C75&ssl=1" alt=""/>


                        </div>

                        <div className="love__content-left-item">
                            <img className="love__content-left-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/icon3-2.png?fit=75%2C75&ssl=1" alt=""/>

                            <div className="love__content-left-info" style={{textAlign: "left"}}>
                                <h2 className="love__content-left-title">
                                    We create an exceptional atmosphere where you want to return
                                </h2>


                                <p className="love__content-left-desc">
                                    "Vinoteka" does not compromise on service: our administrators will help you find the perfect combination of food and wine so that your evening will be unforgettable. And don't forget to ask for the tasting.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}