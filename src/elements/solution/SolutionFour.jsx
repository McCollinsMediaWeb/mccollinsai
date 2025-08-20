import React from 'react'
import image from "../../assets/img/solutions/s4-img-1.jpg";
import imageIl from "../../assets/img/solutions/s4-il-img-1.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from '../../components/title-animation/SplitTextAnimation';

function SolutionFour() {

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray(".chy-solution-4-img .bg-color").forEach((el, index) => {
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

      chyScl.set(el, { transformOrigin: "center center" }).fromTo(
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
    <div className="chy-solution-4-area pt-80 pb-140">
      <div className="container chy-contaienr-2">
        <div className="row">

          {/* left-content */}
          <div className="col-lg-6">
            <div className="chy-solution-4-content">
              {/* section-title */}
              <div className="section-title-wrap mb-25">
                <h5 className="chy-subtitle-4 chy-class-add">COMPANY BENEFITS</h5>
                <h2 className="chy-title-4 chy-split-in-right chy-split-text">
                  <SplitText text="Why You Should Choose Agency Services" />
                </h2>
                <p className="chy-para-4">
                  We are 100+ professional software engineers with more than 10
                  years of experience in delivering superior products Believe it
                  because you've seen it. Here are real numbers
                </p>
              </div>

              <ul className="chy-solution-4-feature mb-30">
                <li>
                  <i className="fi fi-br-checkbox"></i>
                  First Working Process
                </li>
                <li>
                  <i className="fi fi-br-checkbox"></i>
                  Dedicated Team
                </li>
                <li>
                  <i className="fi fi-br-checkbox"></i>
                  24/7 Hours Support
                </li>
                <li>
                  <i className="fi fi-br-checkbox"></i>
                  Handle by Expert
                </li>
              </ul>

              <Link to="/service-details" className="chy-pr-btn-5">
                <span className="text">learn more</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faRightLong} />
                </span>
              </Link>
            </div>
          </div>

          {/* right-content */}
          <div className="col-lg-6">
            <div className="chy-solution-4-img">
              <span className="bg-color"></span>
              <div className="main-img img-cover">
                <img src={image} alt="" />
              </div>
              <img src={imageIl} alt="" className="il-img" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SolutionFour