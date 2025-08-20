import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div className="contact-page-area bg-default pt-120 pb-120" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="container chy-container-1">


            {/* section-title */}
            <div className="section-title-wrap mb-50 text-center">
                <h5 className="chy-subtitle-1 wow fadeInDown">contact us</h5>
                <h2 className="chy-title-1  chy-split-in-right chy-split-text">Excited About The Project? Please Get in Touch.</h2>
            </div>

            <div className="row">
                <div className="col-lg-7">
                    <div className="contact-form-2-wrap">
                        <h6 className="title chy-heading-1">contact me</h6>
                        <form className="contact-form-2"  action="#">
                            <div className="item 1">
                                <label htmlFor="name">Fast name<span>*</span></label>
                                <input type="text" placeholder="first name" />
                            </div>

                            <div className="item2">
                                <label htmlFor="name">phone number<span>*</span></label>
                                <input type="text" placeholder="phone number" />
                            </div>

                            <div className="item3">
                                <label htmlFor="name">email address<span>*</span></label>
                                <input type="email" placeholder="email address" />
                            </div>

                            <div className="item4">
                                <label htmlFor="name">service type<span>*</span></label>
                                <input type="text" placeholder="service type" />
                            </div>


                            <div className="item5">
                                <label htmlFor="name">message<span>*</span></label>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Type your message"></textarea>
                            </div>
    
                            <div className="btn-wrap item6">
                                <button type="button" aria-label="contact form" className="chy-pr-btn-1"> 
                                    <span className="text">
                                        send message
                                    </span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faRightLong} />
                                    </span>
                                </button>
                            </div>
    
                        </form>
                    </div>
    
                </div>

                {/* right-content */}
                <div className="col-lg-5">
                    <div className="contact-page-content">
                        <div className="contact-page-map mb-40">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.87879892963!2d-0.4133961526767937!3d51.52844205506356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1703659075536!5m2!1sen!2sbd" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="border-left">
                            <div className="contact-page-contact-list mb-50">
                                <div className="item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="content-wrap">
                                        <h4 className="chy-heading-1 title">address:</h4>
                                        <p className="chy-para-1 text">2715 Ash Dr. San Jose, South Dakota 83475</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="content-wrap">
                                        <h4 className="chy-heading-1 title">Phone Number:</h4>
                                        <span className="chy-para-1 text">
                                            <a href='tel:(704) 555-0127'>(704) 555-0127</a>
                                            <a href='tel:(239) 555-0108'>(239) 555-0108</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="content-wrap">
                                        <h4 className="chy-heading-1 title">email:</h4>
                                        <a href='mailto:themexriver@support.com' className="chy-para-1 text">themexriver@support.com</a>
                                    </div>
                                </div>
                            </div>
                            <ul className="contact-page-social-link">
                                <li>
                                    <Link aria-label="social">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Link>
                                </li>
                                <li>
                                    <Link aria-label="social">
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </Link>
                                </li>
                                <li>
                                    <Link aria-label="social">
                                        <FontAwesomeIcon icon={faDribbble} />
                                    </Link>
                                </li>
                                <li>
                                    <Link aria-label="social">
                                        <FontAwesomeIcon icon={faBehance} />
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ContactUs