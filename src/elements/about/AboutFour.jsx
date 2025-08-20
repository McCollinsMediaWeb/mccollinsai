import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img/about/a4-img-1.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../../components/title-animation/SplitTextAnimation";

function AboutFour() {

  // feature data 
  const featureData = [
    {
      id: "01",
      title: "Guaranteed Results",
      disc: "Si massa morbi primis volutpat elementum potenti sapien egestas porttitor hendrerit nec torquent",
      icon: "fi-rs-badge-check",
    },
    {
      id: "02",
      title: "Quality Services",
      disc: "Si massa morbi primis volutpat elementum potenti sapien egestas porttitor hendrerit nec torquent",
      icon: "fi-ts-membership",
    },
    {
      id: "03",
      title: "24/7 Best Support",
      disc: "Si massa morbi primis volutpat elementum potenti sapien egestas porttitor hendrerit nec torquent",
      icon: "fi-tr-onboarding",
    },
  ];

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray(".chy-about-4-img .bg-color").forEach((el, index) => {
      let chyScl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 1,
          start: "top 95%",
          end: "top 70%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      chyScl
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { scale: 1.3, backgroundColor: "#C8AEFF" },
          {
            backgroundColor: "#F4EFFF",
            scale: 1,
            duration: 0.5,
            immediateRender: false,
          }
        );
    });
  });

  return (
    <div className="chy-about-4-area pt-130 pb-130">
      <div className="container chy-container-2">
        
        <div className="section-title-wrap mb-20">
          <div className="left">
            <h5 className="chy-subtitle-4 chy-class-add ">about us our company</h5>
            <h2 className="chy-title-4 chy-split-in-right chy-split-text">
              <SplitText text="We Want to Give You The Best Service" />
            </h2>
          </div>
          <div className="right">
            <p className="chy-para-4 wow fadeInRight">
              We are 100+ professional software engineers with more than 10
              years of experience in delivering superior products Believe it
              because you've seen it. Here are real numbers
            </p>
          </div>
        </div>

        <div className="row align-items-center">

          {/* left-img */}
          <div className="col-lg-6">
            <div className="chy-about-4-img">
              <span className="bg-color"></span>
              <div className="main-img">
                <img src={image} alt="" />
              </div>
            </div>
          </div>

          {/* right-content */}
          <div className="col-lg-6">
            <div className="chy-about-4-content">
              <div className="chy-about-4-feature-wrap mb-30">
                {featureData.map((item) => (
                  <div
                    className="chy-about-4-feature-item wow fadeInUp"
                    key={item.id}
                  >
                    <div className="icon">
                      <i className={`fi ${item.icon}`}></i>
                    </div>
                    <div className="content-wrap">
                      <h5 className="chy-heading-2 title">{item.title}</h5>
                      <p className="chy-para-4 disc">{item.disc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-wrap wow fadeInUp" data-wow-delay=".3s">
                <Link to="/about-02" className="chy-pr-btn-5">
                  <span className="text">learn more</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faRightLong} />
                  </span>
                </Link>
                <div className="chy-call-1-btn-wrap">
                  <a href="tel:+193-940-9845" className="chy-call-2-icon">
                    <i className="fi fi-sr-phone-call"></i>
                  </a>
                  <div className="chy-call-1-content">
                    <span className="text chy-heading-2">give us a call</span>
                    <a className="phone chy-heading-2" href="tel:+193-940-9845">
                      +193-940-9845
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AboutFour;
