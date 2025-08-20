import React, { useEffect, useRef } from 'react'
import arrowIcon from "../../assets/img/services/s2-img-arrow.png";
import starIcon from "../../assets/img/services/s2-star-icon.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import Tilt from "react-parallax-tilt";
import SplitText2 from '../../components/title-animation/SplitTextAnimation2';

function ServicesTwo() {

  useGSAP(() => {
    // add active class
    gsap.to(".chy-services-2-area", {
      scrollTrigger: {
        trigger: ".chy-services-2-item-wrap",
        scrub: 1,
        start: "top 80%",
        end: "bottom bottom",
        toggleClass: "active",
        toggleActions: "play none none reverse",
        once: true,
      },
    });
  });


  // countup
  const countUpRef = useRef()

  return (
    <div className="chy-services-2-area pt-105 pb-180 fix">
      <div className="container chy-container-1">
        <div className="row g-0">
          <div className="col-xl-6">
            <div className="chy-services-2-item-wrap chy-class-add">
              <img src={starIcon} className="icon chyroted" alt="" />

              {/* single-item  */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon">
                    <i className="fi fi-rs-challenge-alt"></i>
                  </div>
                  <h5 className="chy-heading-1 title">
                    <Link to="/services-01">link building</Link>
                  </h5>
                  <p className="chy-para-2 disc">
                    Duis aute irure dolor in fot reprehendeirure dolor
                  </p>
                </Tilt>
              </div>

              {/* single-item */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon">
                    <i className="fi fi-bs-at"></i>
                  </div>
                  <h5 className="chy-heading-1 title">
                    <Link to="/services-01">email marketing</Link>
                  </h5>
                  <p className="chy-para-2 disc">
                    Duis aute irure dolor in fot reprehendeirure dolor
                  </p>
                </Tilt>
              </div>

              {/* single-item */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon ">
                    <i className="fi fi-ts-function-process"></i>
                  </div>
                  <h5 className="chy-heading-1 title">
                    <Link to="/services-01">optimization</Link>
                  </h5>
                  <p className="chy-para-2 disc">
                    Duis aute irure dolor in fot reprehendeirure dolor
                  </p>
                </Tilt>
              </div>

              {/* single-item */}
              <div className="chy-services-2-item ">
                <Tilt
                  className="background-stripes parallax-effect"
                  perspective={500}
                >
                  <div className="icon">
                    <i className="fi fi-rs-it"></i>
                  </div>
                  <h5 className="chy-heading-1 title">
                    <Link to="/services-01">development</Link>
                  </h5>
                  <p className="chy-para-2 disc">
                    Duis aute irure dolor in fot reprehendeirure dolor
                  </p>
                </Tilt>
              </div>
            </div>
          </div>

          {/* right-content  */}
          <div className="col-xl-6">
            <div className="chy-services-2-content">
              {/* section-title */}
              <div className="section-title-wrap mb-35">
                <h3
                  className="chy-subtitle-2"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  top services
                </h3>
                <h2 className="chy-title-2 chy-split-in-right-2 chy-split-text">
                  <SplitText2 text="grow and prosper with our experts" />
                </h2>
                <p
                  className="chy-para-2"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  Duis aute irure dolor in reprehendeirure dolor irit in volut
                  ate velit esse cillum dolDuis aute irure dolor in ore accu
                  santium fugiat nulla pariatur.s
                </p>
              </div>

              <div className="chy-services-2-work mb-55">
                <img src={arrowIcon} alt="" />
                <div className="right">
                  <h4 className="chy-heading-1 title">work completed</h4>
                  <h3 className="chy-heading-1 number">
                    <CountUp
                      delay={1}
                      duration={3}
                      start={1}
                      end={86900}
                      enableScrollSpy
                      scrollSpyOnce
                      suffix={"+"}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </h3>
                </div>
              </div>
              <Link
                to="/services-02"
                className="chy-pr-btn-3"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <span className="text">explore more</span>
                <FontAwesomeIcon icon={faLongArrowRight} />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ServicesTwo