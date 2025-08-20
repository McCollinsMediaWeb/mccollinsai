import { faRightLong, faPlus  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function Faq() {
  return (
    <div className="chy-faq-page-area bg-default pt-120 pb-120" data-background="assets/img/bg/body-bg-1.png">
        <div className="container chy-container-1">
            <div className="row">

                {/* left-content */}
                <div className="col-lg-5">
                    <div className="chy-faq-page-content">

                        {/* section-title */}
                        <div className="section-title-wrap ">
                            <h5 className="chy-subtitle-1">popular questions</h5>
                            <h2 className="chy-title-1 has-55 chy-split-in-right chy-split-text">Frequently Asked Questions</h2>
                            <p className="chy-section-para-1">At tempus aenean sapien torquent sed diam class efficitur mus morbi eros dictum quam augue ac laor eet ligula libero mi commodo.</p>
                        </div>

                        <div className="btn-wrap">
                            <Link className="chy-pr-btn-1" >
                                <span className="text">
                                    other question?
                                </span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRightLong} />
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* right-faq */}
                <div className="col-lg-7">
                    <div className="chy-faq-page-accordion">
                        <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            
                            {/* single item */}
                            <Accordion.Item eventKey="0" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >What Is Insurance Services?</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                                
                            </Accordion.Item>
                            
                            {/* single item */}
                            <Accordion.Item eventKey="1" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >How Many Service We Provide?</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            {/* single item */}
                            <Accordion.Item eventKey="2" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >Why We Are The Best Company?</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* single item */}
                            <Accordion.Item eventKey="3" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >The Best Company? Why We Are</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* single item */}
                            <Accordion.Item eventKey="4" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >Cubilia efficitur praesent morbi libero eleifend enim?</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* single item */}
                            <Accordion.Item eventKey="5" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >Vitae ut nunc parturient suspendisse proin?</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* single item */}
                            <Accordion.Item eventKey="6" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >Senectus massa pulvinar auctor suscipit non?</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* single item */}
                            <Accordion.Item eventKey="7" className="mb-15">
                                <Accordion.Header>
                                    <span className="icon-2"><i className="fi fi-bs-angle-double-small-down"></i></span>
                                    <span className="title chy-heading-1" >Nunc hendrerit fringilla ultricies habitasse condimentum?</span>
                                    <span className="icon"><FontAwesomeIcon icon={faPlus} /></span>
                                </Accordion.Header>
                                <Accordion.Body>
                                <div className="disc chy-para-1">
                                    Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consecte nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculu blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque eli fames donec. Tellus in curae suspendisse tortor commodo parturient pede magna libe phasellus quam. Ullamcorper eu massa pellentesque bibendum sed. 
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                        </Accordion>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Faq