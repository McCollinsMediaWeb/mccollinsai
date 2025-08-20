import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-2.png'
import iconImg from '../../assets/img/icon/career-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom'

function Career() {

  useGSAP(() => {
    // For each images with class "animate-image" on page
    gsap.utils.toArray('.chyScl').forEach((el, index) => { 
        let chyScl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 95%",
            end: "top 70%",
            toggleActions: "play none none reverse",
            markers: false
        }
        })
        
        chyScl
        .set(el, {transformOrigin: 'center center'})
        .fromTo(el, { scale: .8 }, { scale: 1, duration: .5, immediateRender: false})
    })
  });

  return (
    <div className="body-bg-2 bg-default pt-120 pb-120" style={{backgroundImage: `url(${bgImage})`}}>
            
        <div className="career-page-area">
            <div className="container chy-container-1">
                {/* section-title */}
                <div className="section-title-wrap mb-50 text-center">
                    <h5 className="chy-subtitle-1 wow fadeInDown">Our Best Projects</h5>
                    <h2 className="chy-title-1  chy-split-in-right chy-split-text">Open Positions</h2>
                </div>

                <div className="career-page-item-wrap">

                    {/* single-item  */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt="" />
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">Product Designer</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                    {/* single-item */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt="" />
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">Digital marketer</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                    {/* single-item */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt="" />
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">Product Designer</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                    {/* single-item */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt="" />
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">Business manager</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                    {/* single-item */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt="" />
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">ui/ux Designer</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                    {/* single-item */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt="" />
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">web developer</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                    {/* single-item */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt=""/>
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">Seo supporter</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                    {/* single-item */}
                    <div className="career-page-item chyScl">
                        <div className="icon-wrap">
                            <img src={iconImg} alt="" />
                            <span className="chy-heading-1 full-time">full time</span>
                        </div>
                        <h4 className="chy-heading-1 title">wordpress developer</h4>
                        <div className="meta">
                            <span className="chy-para-1 loc"><i className="fi fi-rr-street-view"></i> san francissco</span>
                            <span className="chy-para-1 date"><i className="fi fi-rs-calendar"></i> 30 march 2024</span>
                        </div>
                        <p className="chy-para-1 disc">Lorem ipsum dolor sit amet consectetur. Eg tas ac fringilla mi morbi eget. Dolor a etsit non libero lobortis cras fames maec enas im perdiet. Lorem senectus tempor non pulvina pellentes que urna.</p>

                        <div className="btn-wrap">
                            <Link to="/career-details" className="chy-pr-btn-1 ">
                                <span className="text">
                                    job apply
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                            <h4 className="chy-heading-1 price">$2000.00</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Career