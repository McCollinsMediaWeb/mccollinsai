import React from 'react'
import bgImg from '../../assets/img/testimonial/t2-bg-img-1.png'
import img1 from "../../assets/img/price/p2-img-1.png";
import img2 from "../../assets/img/price/p2-img-2.png";
import img3 from "../../assets/img/price/p2-img-3.png";
import logo1 from "../../assets/img/testimonial/t2-logo-1.png";
import logo2 from "../../assets/img/testimonial/t2-logo-2.png";
import logo3 from "../../assets/img/testimonial/t2-logo-3.png";
import logo4 from "../../assets/img/testimonial/t2-logo-4.png";
import logo5 from "../../assets/img/testimonial/t2-logo-5.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from 'react-icons/fa';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function TestimonialTwo() {
  
  useGSAP(() => {
  // clip animation 
    gsap.utils.toArray(".chyclip").forEach((el, index) => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 2,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl6
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { clipPath: "polygon(30% 0, 70% 0, 70% 100%, 30% 100%)" },
          {
            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 1,
            immediateRender: false,
          }
        );
    });
  });

  return (
    <div
      className="chy-testimonial-2-area bg-default pt-100 pb-50 chyclip"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container chy-container-1">
        {/* slider */}
        <div className="chy-testimonial-2-slider fix mb-50">
          <Swiper
            loop={true}
            spaceBetween={0}
            speed={500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".chy-testimonial-2-pagination",
              type: "bullets",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="swiper-container fix chy_testimonial_2_active"
          >
            <div className="swiper-wrapper">

              {/* single-item */}
              <SwiperSlide className="swiper-slide">
                <div className="chy-testimonial-2-item">
                  <div className="main-img">
                    <img src={img1} alt="" />
                  </div>
                  <h4 className="chy-heading-1 comment">
                    To my mind, the greatest reward for any renovation project
                    is being able to expertience the transformation from
                    beginning to end. I enjoy getting to see how a renovation
                    can go from an idea to a reality and lead to an elevated
                    mood
                  </h4>
                  <div className="person-wrap">
                    <div className="icon">
                      <FaQuoteLeft />
                    </div>
                    <div className="right">
                      <h3 className="chy-heading-1 name">marko marlee</h3>
                      <p className="chy-para-2 bio">building corp</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* single-item */}
              <SwiperSlide className="swiper-slide">
                <div className="chy-testimonial-2-item">
                  <div className="main-img">
                    <img src={img2} alt="" />
                  </div>
                  <h4 className="chy-heading-1 comment">
                    To my mind, the greatest reward for any renovation project
                    is being able to expertience the transformation from
                    beginning to end. I enjoy getting to see how a renovation
                    can go from an idea to a reality and lead to an elevated
                    mood
                  </h4>
                  <div className="person-wrap">
                    <div className="icon">
                      <FaQuoteLeft />
                    </div>
                    <div className="right">
                      <h3 className="chy-heading-1 name">marko marlee</h3>
                      <p className="chy-para-2 bio">building corp</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* single-item  */}
              <SwiperSlide className="swiper-slide">
                <div className="chy-testimonial-2-item">
                  <div className="main-img">
                    <img src={img3} alt="" />
                  </div>
                  <h4 className="chy-heading-1 comment">
                    To my mind, the greatest reward for any renovation project
                    is being able to expertience the transformation from
                    beginning to end. I enjoy getting to see how a renovation
                    can go from an idea to a reality and lead to an elevated
                    mood
                  </h4>
                  <div className="person-wrap">
                    <div className="icon">
                      <FaQuoteLeft />
                    </div>
                    <div className="right">
                      <h3 className="chy-heading-1 name">marko marlee</h3>
                      <p className="chy-para-2 bio">building corp</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </div>
          </Swiper>
          <div className="chy-testimonial-2-pagination"></div>
        </div>

        {/* logo  */}
        <div className="chy-testimonial-2-logo">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default TestimonialTwo