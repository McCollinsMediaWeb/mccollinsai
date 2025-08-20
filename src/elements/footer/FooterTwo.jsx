import React, { useEffect } from 'react'
import team1 from "../../assets/img/footer/f2-team-1.png";
import team2 from "../../assets/img/footer/f2-team-2.png";
import team3 from "../../assets/img/footer/f2-team-3.png";
import team4 from "../../assets/img/footer/f2-team-4.png";
import icon1 from "../../assets/img/footer/f2-icon-1.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';
import Fancybox from "../../components/utiles/Fancybox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IoImagesOutline } from 'react-icons/io5';

function FooterTwo() {

  useGSAP(() => {
    // image animation
    gsap.utils.toArray(".chyroted").forEach((el, index) => {
      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scrub: 3,
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl6
        .set(el, { transformOrigin: "center center" })
        .fromTo(
          el,
          { rotateZ: 360 },
          { rotateZ: 0, duration: 1, immediateRender: false }
        );
    });
  });

  return (
    <footer className="chy-footer-2-area pt-110 pb-90 fix">
      <div className="container chy-container-1">
        <div className="row">

          {/* left-content */}
          <div className="col-lg-5">
            <div className="chy-footer-2-content">
              <h3 className="chy-heading-1 title chyf2cc">
                let's <img src={icon1} className="chyroted" alt="" /> connect.
              </h3>
              <p className="chy-para-2 disc">
                Quisquam est, qui dolorem ipsum quia dolor sit amet, consecte
                adipisci velit, sed quia non numquam eius modi tempora incidu
                labore et dolore magnam.
              </p>
              <ul className="chy-footer-2-social-link mb-30">
                <li>
                  <Link aria-label="link" href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                  <Link aria-label="link" href="#">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </li>
                <li>
                  <Link aria-label="link" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link aria-label="link" href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
              </ul>
              <h4 className="chy-heading-1 copyright-link">
                © copyright 2024 by{" "}
                <Link
                  to={{ pathname: "https://themexriver.com/" }}
                  target="_blank"
                >
                  themexriver.com
                </Link>
              </h4>
            </div>
          </div>

          {/* right-content */}
          <div className="col-lg-7">
            <div className="chy-footer-2-widget-wrap">
              {/* single-item */}
              <div className="chy-footer-2-widget">
                <h4 className="chy-heading-1 chy-footer-1-widget-title">
                  services
                </h4>
                <ul className="chy-footer-1-menu">
                  <li>
                    <Link href="#">recycling</Link>
                  </li>
                  <li>
                    <Link href="#">ecosystem</Link>
                  </li>
                  <li>
                    <Link href="#">organic</Link>
                  </li>
                  <li>
                    <Link href="#">biology</Link>
                  </li>
                </ul>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget">
                <h4 className="chy-heading-1 chy-footer-1-widget-title">
                  links
                </h4>
                <ul className="chy-footer-1-menu">
                  <li>
                    <Link href="#">help</Link>
                  </li>
                  <li>
                    <Link href="#">support</Link>
                  </li>
                  <li>
                    <Link href="#">clients</Link>
                  </li>
                </ul>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget">
                <h4 className="chy-heading-1 chy-footer-1-widget-title">
                  newsletter
                </h4>
                <form className="chy-footer-1-form" action="#">
                  <input type="text" placeholder="enter your email" />
                  <button aria-label="newsletter" type="submit">
                    subsrcribe
                  </button>
                </form>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget has-full-widht">
                <span className="line"></span>
              </div>

              {/* single-item */}
              <div className="chy-footer-2-widget has-full-widht">
                <h4 className="chy-heading-1 chy-footer-1-widget-title">
                  our team
                </h4>
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <div
                    className="chy-footer-2-team wow slideInRight"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-once="true"
                    data-aos-offset="200"
                  >
                    <a
                      data-fancybox="gallery"
                      data-src={team1}
                      className="item popup_img img-cover"
                    >
                      <img src={team1} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                    <a
                      data-fancybox="gallery"
                      data-src={team2}
                      className="item popup_img img-cover"
                    >
                      <img src={team2} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                    <a
                      data-fancybox="gallery"
                      data-src={team3}
                      className="item popup_img img-cover"
                    >
                      <img src={team3} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                    <a
                      data-fancybox="gallery"
                      data-src={team4}
                      className="item popup_img img-cover"
                    >
                      <img src={team4} alt="" />
                      <span className="icon">
                        <IoImagesOutline />
                      </span>
                    </a>
                  </div>
                </Fancybox>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default FooterTwo