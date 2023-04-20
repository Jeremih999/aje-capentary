import React from "react";
import testimonials from "../testimonials";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {

    return (
        <div className="testimonial-container">
          <h1>TESTIMONIALS FROM CLIENT</h1>

            <div className="testimonial__list">
                <Swiper
                      // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
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