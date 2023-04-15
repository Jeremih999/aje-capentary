import React from "react";
import testimonials from "../testimonials";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Testimonial = () => {

    return (
        <div className="testimonial-container">
          <h1>TESTIMONIALS FROM CLIENT</h1>

            <div className="testimonial__list">
                <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {
                    testimonials.map((testimonial) => {
                        return (
                            <SwiperSlide>
                            <div className="testimonial" key={testimonial.id}>
                                <div >
                                    <img src={testimonial.img} alt="avatar" className="testimonial__avatar" />
                                </div>
                                <div className="testimonial__person">
                                    <h3>{testimonial.name}</h3>
                                    <p>{testimonial.title}</p>
                                </div>
                                <div className="testimonial__desc">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum laboriosam beatae voluptates exercitationem nesciunt maiores eaque doloribus cumque quidem</p>
                                </div>
                            </div>
                            </SwiperSlide>
                        )
                    })
                }

                </Swiper>
            </div>


        </div>
    )
}

export default Testimonial