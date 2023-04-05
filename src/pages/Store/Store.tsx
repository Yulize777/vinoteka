import React from "react";

export const Store = () => {
    return (
        <section className="about">
            <div className="container">
                <h1 className="about__title">
                    About store
                </h1>

                <div className="about__box">
                    <p className="about__box-desc">
                        "Vinoteka" exists for three years already and one may ask, why we decided to create a website? The answer is simple. First of all, we created a website so that as many people as possible know about us. And after all, at present time, visiting a website is easier and faster than visiting a store.                    </p>

                    <p className="about__box-desc">
                        The site will be convenient and increase customer satisfaction: both for those who are already familiar with us, and for those who hear about us for the first time. Why should you spend your time visiting a restaurant to try your favorite wines? Simply order them and enjoy them in good company, wherever you are!
                    </p>


                    <div className="about__album">
                        <div className="about__album-box">
                            <img className="about__album-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/1-1.jpg?w=1400&ssl=1" alt=""/>
                        </div>
                        <div className="about__album-box">
                            <img className="about__album-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/DSC_0194-2.jpg?w=1400&ssl=1" alt=""/>
                        </div>
                    </div>

                    <p className="about__box-desc">
                        Of course, we will also provide advice and online and our administrators are also always in touch: they will help you by phone if needed.
                    </p>

                    <p className="about__box-desc">
                        Finally, in order to facilitate a choice of excellent wines for a reasonable price, we offer you sets (ready-made sets of various wines at a discount) and wine accessories, with which you can start your trip into the interesting world of wine (without being forced to knock on your neighbor’s door for a corkscrew…)
                    </p>
                </div>


                <div className="about__album">
                    <div className="about__album-box">
                        <img className="about__album-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/DSC_0183-2.jpg?w=1400&ssl=1" alt=""/>
                    </div>
                    <div className="about__album-box">
                        <img className="about__album-img" src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/04/DSC_0225-1.jpg?w=1400&ssl=1" alt=""/>
                    </div>
                </div>

                <div className="about__box">
                    <p className="about__box-desc">
                        With the online store, we will be even closer to you and we will deliver your favorite wines to almost any place - wherever you are, at the table, in the mountains and even on the beach.
                    </p>
                    <p className="about__box-desc">
                        In "Vinoteka" you will always find quality wine, excellent service and a great atmosphere. Looking forward to meeting you there!
                    </p>
                </div>

            </div>
        </section>
    )
}