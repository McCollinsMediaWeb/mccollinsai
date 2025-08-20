import React from 'react'
import logo1 from "../../assets/img/logo/logo-white.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SplitText from '../../components/title-animation/SplitTextAnimation';

function FooterOne() {
  return (
    <footer className="chy-footer-1-area fix">
      <div className="container chy-container-1">

        {/* top-content */}
        <div className="chy-footer-1-top">
          <Link to="/" className="d-block footer-logo">
            <img src={logo1} alt="" />
          </Link>
          <h3 className="chy-heading-1 title  chy-split-in-right chy-split-text">
            <SplitText text="ready to get started" />
          </h3>
          <Link className="chy-pr-btn-1 ">
            <span className="text">get a demo</span>
            <span className="icon">
              <FontAwesomeIcon icon={faRightLong} />
            </span>
          </Link>
        </div>

        {/* meddle-content */}
        <div className="chy-footer-1-meddle">
          <div className="footer-1-widget">
            <div className="chy-footer-1-form-wrap">
              <h4 className="chy-heading-1 title">
                subscribe to our <br /> newsletter
              </h4>
              <form className="chy-footer-1-form">
                <input type="text" placeholder="enter your email" />
                <button type="submit" aria-label="newsletter" className="#">
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-1-widget">
            <h4 className="chy-heading-1 chy-footer-1-widget-title">services</h4>
            <ul className="chy-footer-1-menu">
              <li>
                <Link >email marketing</Link>
              </li>
              <li>
                <Link >seo</Link>
              </li>
              <li>
                <Link >business strategy</Link>
              </li>
              <li>
                <Link >print materials</Link>
              </li>
            </ul>
          </div>
          <div className="footer-1-widget">
            <h4 className="chy-heading-1 chy-footer-1-widget-title">about</h4>
            <ul className="chy-footer-1-menu">
              <li>
                <Link >our story</Link>
              </li>
              <li>
                <Link >benefits</Link>
              </li>
              <li>
                <Link >team</Link>
              </li>
              <li>
                <Link >careers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-1-widget">
            <h4 className="chy-heading-1 chy-footer-1-widget-title">
              navigation
            </h4>
            <ul className="chy-footer-1-menu">
              <li>
                <Link >email marketing</Link>
              </li>
              <li>
                <Link >campaign</Link>
              </li>
              <li>
                <Link >branding</Link>
              </li>
              <li>
                <Link >offline</Link>
              </li>
            </ul>
          </div>
          <div className="footer-1-widget">
            <h4 className="chy-heading-1 chy-footer-1-widget-title">help</h4>
            <ul className="chy-footer-1-menu">
              <li>
                <Link >FAQs</Link>
              </li>
              <li>
                <Link >contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom-content */}
        <div className="chy-footer-1-bottom">
          <ul className="chy-footer-1-social-link">
            <li>
              <Link >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </li>
            <li>
              <Link >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
          </ul>
          <h4 className="chy-heading-1 copyright-link">
            2024 themeXriver <span>| all rights reserved</span>
          </h4>
        </div>
        
      </div>
    </footer>
  );
}

export default FooterOne