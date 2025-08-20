import React from 'react'
import img1 from "../../assets/img/portfolio/p2-img-1.png";
import img2 from "../../assets/img/portfolio/p2-img-2.png";
import img3 from "../../assets/img/portfolio/p2-img-3.png";
import img4 from "../../assets/img/portfolio/p2-img-4.png";
import icon1 from "../../assets/img/icon/subtitle-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SplitText2 from '../../components/title-animation/SplitTextAnimation2';

function PortfolioTwo() {

  // data 
  const data = [
    {
      id: "01",
      subtitle: "pricing packages",
      title: "pecies today",
      image: img1,
    },
    {
      id: "02",
      subtitle: "pricing packages",
      title: "pecies today",
      image: img2,
    },
    {
      id: "03",
      subtitle: "pricing packages",
      title: "pecies today",
      image: img3,
    },
    {
      id: "04",
      subtitle: "pricing packages",
      title: "pecies today",
      image: img1,
    },
    {
      id: "05",
      subtitle: "pricing packages",
      title: "pecies today",
      image: img4,
    },
    {
      id: "06",
      subtitle: "pricing packages",
      title: "pecies today",
      image: img1,
    },
    {
      id: "07",
      subtitle: "pricing packages",
      title: "pecies today",
      image: img3,
    },
  ]
  return (
    <div className="chy-portfolio-2-area pt-110 pb-45 fix">
      <div className="container">

        {/* section-title */}
        <div className="section-title-wrap mb-30 text-center">
          <h3 className="chy-subtitle-2 wow fadeInRight">
            <img src={icon1} className="icon" alt="" /> our portfolio
          </h3>
          <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
            <SplitText2 text="we are a creative digital marketing agency" />
          </h2>
        </div>

      </div>

      <div className="chy-portfolio-2-slider fix pb-50">
        <Swiper
          loop={true}
          spaceBetween={0}
          speed={800}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".chy-portfolio-2-pagination",
            type: "bullets",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              width: 0,
              slidesPerView: 1,
            },
            576: {
              width: 576,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
            1400: {
              width: 1400,
              slidesPerView: 3,
            },
            1600: {
              width: 1600,
              slidesPerView: 4,
            },
            1900: {
              width: 1900,
              slidesPerView: 4,
            },
          }}
          className="swiper-container chy_portfolio_2_active"
        >
          <div className="swiper-wrapper">

            {/* data map  */}
            {
              data.map((item)=>
                <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="chy-portfolio-2-item">
                    <div className="main-img img-cover">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content-wrap">
                      <div className="left">
                        <span className="chy-heading-1 subtitle">
                          {item.subtitle}
                        </span>
                        <h3 className="chy-heading-1 title">
                          <Link to="/service-details">{item.title}</Link>
                        </h3>
                      </div>
                      <Link className="p2-btn">
                        <FontAwesomeIcon icon={faLongArrowRight} />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            }
            

          </div>
        </Swiper>

        <div className="chy-portfolio-2-slider-btn">
          <div className="line"></div>
          <div className="chy-portfolio-2-pagination"></div>
        </div>
        
      </div>
    </div>
  )
}

export default PortfolioTwo