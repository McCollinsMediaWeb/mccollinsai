
import image from '../../assets/img/services/sd-img-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function ServiceDetails() {
  return (
     <div className="service-details-area pt-120 pb-70">
        <div className="container chy-container-1">
            <div className="row">

                {/* left-content */}
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <div className="service-details-content mb-50">

                        <div className="service-details-main-img img-cover">
                            <img src={image} alt="" />
                        </div>

                        <h2 className="chy-heading-1 service-details-title chy-split-in-right chy-split-text">Digital Marketing</h2>

                        <p className="chy-para-1 inner-page-disc">
                            At tempus aenean sapien torquent sed diam class efficitur mus morbi eros dictum quam augue ac laor eet ligula libero mi commodo nibh hac fermentum orci ad pharetra consequat justo duis turpis lorem elit dui consectetur magnis lacinia odio per placerat vestibulum volutpat mauris mollis primis imperdiet posu ere ex enim gravida cras congue pellentesque vulputate malesuada dictumst fames interdum cursus an te tellus porta ullamcorper accumsan non eu adipiscing integer venenatis sagittis arcu curae finibus ridi culus aliquam velit lobortis senectus vitae sollicitudin sit consectetuer ultricies rutrum parturient pede nisi nascetur habitant netus quisque elementum inceptos nam felis penatibus feugiat
                        </p>
                        <p className="chy-para-1 inner-page-disc">
                            Habitant metus lobortis quam pharetra maximus tellus parturient fringilla taciti. Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consectetur nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculus blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque elit fames donec.
                        </p>
                        
                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">What We Provide</h2>

                        <p className="chy-para-1 inner-page-disc">
                            Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consectetur nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculus blandit dapibus vehicu. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque elit fames donec.
                        </p>

                        <div className="service-details-feature mb-30 mt-30">
                            <div className="service-details-feature-item">
                                <div className="heading-wrap">
                                    <div className="icon">
                                        <i className="fi fi-ts-password-smartphone"></i>
                                    </div>
                                    <h4 className="chy-heading-1 title">Process Development</h4>
                                </div>
                                <p className="chy-para-1 text">With over a decade of experience, we’ve est ablis ourselves as one of the pioneering agencies in the region decade of experience.</p>
                                
                            </div>
                            <div className="service-details-feature-item">
                                <div className="heading-wrap">
                                    <div className="icon">
                                        <i className="fi fi-tr-megaphone"></i>
                                    </div>
                                    <h4 className="title chy-heading-1" >Digital Marketing</h4>
                                </div>
                                <p className="chy-para-1 text">With over a decade of experience, we’ve est ablis ourselves as one of the pioneering agencies in the region decade of experience.</p>
                                
                            </div>
                            <div className="service-details-feature-item">
                                <div className="heading-wrap">
                                    <div className="icon">
                                        <i className="fi fi-ts-desktop-wallpaper"></i>
                                    </div>
                                    <h4 className="title chy-heading-1" >Strategy</h4>
                                </div>
                                <p className="chy-para-1 text">With over a decade of experience, we’ve est ablis ourselves as one of the pioneering agencies in the region decade of experience.</p>
                                
                            </div>
                            <div className="service-details-feature-item">
                                <div className="heading-wrap">
                                    <div className="icon">
                                        <i className="fi fi-ts-customize-computer"></i>
                                    </div>
                                    <h4 className="title chy-heading-1">Website Design</h4>
                                </div>
                                <p className="chy-para-1 text">With over a decade of experience, we’ve est ablis ourselves as one of the pioneering agencies in the region decade of experience.</p>  
                            </div>
                            
                        </div>


                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">the challange</h2>

                        <p className="chy-para-1 inner-page-disc">
                            Habitant metus lobortis quam pharetra maximus tellus parturient fringilla taciti. Quisque pulvinar facilisi tempor condimentum sit dui pharetra ad fringilla cursus. Consectetur nisl lacus felis proin inceptos vestibu lum mi fermentum cubilia. Augue praesent vel ridiculus blandit dapibus vehicula. Dignissim tortor ultricies iaculis penatibus hendrerit scelerisque elit fames donec.
                        </p>

                        <h2 className="chy-heading-1 chy-split-in-right chy-split-text service-details-subtitle">Frequently Asked Question</h2>
                        
                        <Accordion defaultActiveKey="0" className="chy-sd-1-item"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            
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
                            
                        </Accordion>

                    </div>
                </div>

                {/* sidebar */}
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                    <div className="blog-2-page-sidebar mb-50">

                        {/* sidebar-box */}
                        <div className="sidebar-box mb-30"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true">
                            <h4 className="sidebar-box-title chy-heading-1" >services category</h4>
                            <div className="sidebar-box-wrap">

                                {/* category-menu */}
                                <ul className="sidebar-category">

                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                        data-aos-once="true">
                                        <Link>
                                            <span className="text">
                                                Digital Marketing
                                            </span>
                                            <span className="icon-1" >
                                                <i className="fi fi-ss-angle-double-right"></i>
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                        data-aos-once="true">
                                        <Link>
                                            <span className="text">
                                                Web Development
                                            </span>
                                            <span className="icon-1" >
                                                <i className="fi fi-ss-angle-double-right"></i>
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                        data-aos-once="true">
                                        <Link>
                                            <span className="text">
                                                Clock Fly Strategy
                                            </span>
                                            <span className="icon-1" >
                                                <i className="fi fi-ss-angle-double-right"></i>
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                        data-aos-once="true">
                                        <Link>
                                            <span className="text">
                                                Brand Design Identity
                                            </span>
                                            <span className="icon-1" >
                                                <i className="fi fi-ss-angle-double-right"></i>
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                        data-aos-once="true">
                                        <Link>
                                            <span className="text">
                                                Email Marketing
                                            </span>
                                            <span className="icon-1" >
                                                <i className="fi fi-ss-angle-double-right"></i>
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                        data-aos-once="true">
                                        <Link>
                                            <span className="text">
                                                Digital Strategy
                                            </span>
                                            <span className="icon-1" >
                                                <i className="fi fi-ss-angle-double-right"></i>
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* sidebar-box */}
                        <div className="sidebar-box mb-30"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-once="true">
                            <h4 className="sidebar-box-title chy-heading-1" >our brochures</h4>
                            <div className="sidebar-box-wrap">

                                {/* category-menu */}
                                <ul className="sidebar-download">

                                    <li
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    data-aos-once="true">
                                        <Link>
                                            <span className="icon-1" >
                                                <i className="fi fi-ts-file-pdf"></i>
                                            </span>
                                            <span className="text-wrap">
                                                <span className="title">Company file</span>
                                                <span className="kbs">250kb</span>
                                            </span>
                                            <span className="icon-2" >
                                                <i className="fi fi-ss-download"></i>
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    data-aos-once="true">
                                        <Link>
                                            <span className="icon-1" >
                                                <i className="fi fi-ts-file-pdf"></i>
                                            </span>
                                            <span className="text-wrap">
                                                <span className="title">local file</span>
                                                <span className="kbs">500kb</span>
                                            </span>
                                            <span className="icon-2" >
                                                <i className="fi fi-ss-download"></i>
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ServiceDetails