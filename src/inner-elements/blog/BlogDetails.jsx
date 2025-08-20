import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assets/img/blog/bd-img-1.jpg'
import img2 from '../../assets/img/blog/inner-img-1.jpg'
import auth1 from '../../assets/img/blog/comment-author-1.jpg'
import btnImg1 from '../../assets/img/blog/b1-img-1.png'
import btnImg2 from '../../assets/img/blog/b1-img-2.png'
import commentAuth1 from '../../assets/img/blog/comment-author-2.jpg'
import commentAuth2 from '../../assets/img/blog/comment-author-3.jpg'
import commentAuth3 from '../../assets/img/blog/comment-author-4.jpg'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { BiSolidQuoteRight} from 'react-icons/bi';
import { BsCheck2All } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function BlogDetails() {

  return (
    <div className="blog-details-area pt-120 pb-70 fix">
        <div className="container chy-container-1">
            <div className="row">

                {/* left-content */}
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                    <div className="blog-details-content">
                        <div className="main-img img-cover">
                            <img src={img1} alt="" />
                        </div>

                        <div className="blog-details-content-meta">
                            <span className="author chy-para-1" ><i className="fi fi-rs-circle-user"></i> Nolie Jona</span>
                            <span className="author chy-para-1" ><i className="fi fi-rr-comment-alt-middle"></i> comments(04)</span>
                            <span className="author chy-para-1" ><i className="fi fi-rs-calendar"></i> October 6,2024</span>
                        </div>

                        <h2 className="chy-heading-1 title chy-split-in-right chy-split-text">Better Ship Faster Avoid Unauthorized</h2>

                        <p className="chy-para-1 disc">Aliquam metus nibh consectetuer montes nascetur quisque lobortis a aliquet diam. Egestas dapibus hen drerit nascetur etiam sociosqu. Himenaeos interdum tortor augue malesuada id. Fringilla dapibus pellen tesque letius bibendum consequat. Sociosqu quam tincidunt consectetur et integer tortor turpis risus ele ifend. Curabitur sit sollicitudin duis condimentum nec. Venenatis pharetra himenaeos eu dolor vulputate semper lectus. Commodo lacinia primis eleifend ullamcorper fames venenatis suspendisse ultrices scele risque aliquet. Urna iaculis mus class a massa ut ligula leo at taciti. Risus per proin diam non maximus con dimentum viverra nullam arcu. Lectus molestie laoreet nec aptent luctus.</p>

                        <p className="chy-para-1 disc">Himenaeos interdum tortor augue malesuada id. Fringilla dapibus pellen tesque letius bibendum conseq. Sociosqu quam tincidunt consectetur et integer tortor turpis risus ele ifend. Curabitur sit sollicitudin duis condimentum nec. Venenatis pharetra himenaeos eu dolor vulputate semper lectus. Commodo lacinia primis eleifend ullamcorper fames venenatis suspendisse ultrices scele risque aliquet</p>


                        <blockquote className="blog-details-blockquote-1">
                        “Tortor Dis Efficitur Risus Placerat Libero Condimentum Faucibus Enim Luctus. Porttitor Per Si Nisi Sodales Accumsan. Accumsan Suscipit Semper Pharetra Pretium Consequat Primis Quis Placerat Lacinia Donec Laoreet.”

                            <span className="author">KATHRYN MURPHY</span>
                            <BiSolidQuoteRight className='icon' />
                        </blockquote>

                        
                        <p className="chy-para-1 disc">Egestas dapibus hen drerit nascetur etiam sociosqu. Himenaeos interdum tortor augue malesuada id. Frin gilla dapibus pellen tesque letius bibendum consequat. Sociosqu quam tincidunt consectetur et inte ger tor tor turpis risus ele ifend. Curabitur sit sollicitudin duis condimentum nec. Venenatis pharetra himen eu dolor vulputate semper lectus. Commodo lacinia primis eleifend ullamcorper fames venenatis suspen disse ultrices scele risque aliquet. Urna iaculis mus class a massa ut ligula leo at taciti. Risus per proin diam non maximus con dimentum viverra nullam arcu. Lectus molestie laoreet nec aptent luctus.</p>

                        <div className="inner-div mb-30">
                            <ul className="blog-details-content-list">
                                <li><i><BsCheck2All /></i> Aliquet est massa, sit amet tempor</li>
                                <li><i><BsCheck2All /></i> Sit amet tempor mi auctor nec.</li>
                                <li><i><BsCheck2All /></i> Pellentesque aliquet est tempor</li>
                                <li><i><BsCheck2All /></i> Aliquet est massa, sit amet tempor</li>
                                <li><i><BsCheck2All /></i> Sit amet tempor mi auctor nec.</li>
                                <li><i><BsCheck2All /></i> Pellentesque aliquet est tempor</li>
                            </ul>
                            <div className="blog-details-content-inner-img">
                                <img src={img2} alt="" />
                            </div>
                        </div>

                        <h2 className="chy-heading-1 subtitle chy-split-in-right chy-split-text">Creative Approach To Every Project</h2>

                        <p className="chy-para-1 disc">Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Do purus mi, commodo id commodo vel, im perdiet ut mauris. Ut ultricies arcu risus, males uada efficitur orci euismod in. Proin ele est risus, ac sodales nulla mollis vel.</p>
                        
                        {/* social & tags */}
                        <div className="blog-details-tag-share-wrap mb-30 mt-30">
                            <div className="blog-details-tag">
                                <h6 className="title chy-heading-1">tags:</h6>
                                <Link aria-label="tags" >agency</Link>
                                <Link aria-label="tags" >business</Link>
                                <Link aria-label="tags" >marketing</Link>
                            </div>
                            <div className="blog-details-share">
                                <h6 className="title chy-heading-1">Share Article:</h6>
                                <Link  aria-label="social link" >
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18 0C21.3526 0.0382568 24.3813 0.862213 27.0861 2.47187C29.7587 4.04939 31.9819 6.28618 33.5431 8.96835C35.143 11.6895 35.962 14.7365 36.0001 18.1095C35.9051 22.7245 34.4495 26.6662 31.6333 29.9345C28.817 33.2029 25.2101 35.2249 21.4763 36V23.0609H25.0063L25.8046 17.9762H20.4593V14.6458C20.4296 13.9554 20.648 13.2771 21.0749 12.7337C21.5023 12.1888 22.2551 11.9023 23.3332 11.8744H26.561V7.42031C26.5147 7.40541 26.0753 7.34649 25.2426 7.24354C24.2983 7.13306 23.3488 7.07404 22.3981 7.06676C20.2463 7.07669 18.5446 7.68365 17.2929 8.88764C16.0411 10.0913 15.4017 11.8327 15.3746 14.1119V17.9762H11.3068V23.0609H15.3746V36C10.79 35.2249 7.18304 33.2029 4.36681 29.9345C1.55058 26.6662 0.0950269 22.7245 0 18.1095C0.0380195 14.7364 0.856995 11.6893 2.45693 8.96835C4.01815 6.28618 6.24136 4.04939 8.91397 2.47187C11.6187 0.862523 14.6474 0.0385667 18 0Z" fill="#3A5897"/>
                                    </svg>
                                </Link>
                                <Link  aria-label="social link" >
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_68_1258)">
                                        <path d="M18.5703 0C8.62953 0 0.570312 8.05922 0.570312 18C0.570312 27.9408 8.62953 36 18.5703 36C28.5111 36 36.5703 27.9408 36.5703 18C36.5703 8.05922 28.5111 0 18.5703 0Z" fill="black"/>
                                        <path d="M20.5412 16.371L28.2468 7.41394H26.4209L19.7301 15.1913L14.3862 7.41394H8.22266L16.3036 19.1746L8.22266 28.5676H10.0487L17.1144 20.3544L22.7579 28.5676H28.9214L20.5408 16.371H20.5412ZM10.7067 8.7886H13.5114L26.4217 27.2554H23.6169L10.7067 8.7886Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_68_1258">
                                        <rect width="36" height="36" fill="white" transform="translate(0.570312)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link  aria-label="social link" >
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.189 0C8.23344 0 0.144531 8.02935 0.144531 18.0002C0.144531 27.9706 8.23344 36 18.189 36C28.1446 36 36.1446 27.9706 36.1446 18.0002C36.1446 8.02935 28.1446 0 18.189 0ZM19.6112 22.8531C18.2779 22.7647 17.7446 22.0591 16.6779 21.4414C16.1446 24.4411 15.4335 27.2645 13.389 28.7646C12.7668 24.2648 14.2779 20.912 14.989 17.2941C13.7446 15.2647 15.1668 11.0296 17.7446 12.0882C20.9446 13.3237 14.989 19.8529 18.989 20.6469C23.2557 21.5293 24.9446 13.3237 22.3668 10.6765C18.5445 6.8823 11.3446 10.5881 12.2335 16.0587C12.5001 17.3825 13.8335 17.8235 12.8557 19.6766C10.3668 19.1473 9.65568 17.2057 9.74454 14.7354C9.92231 10.5881 13.4779 7.67627 17.1224 7.23534C21.6557 6.70601 25.9224 8.91173 26.4557 13.1469C27.1668 18.0002 24.4113 23.2061 19.6112 22.8531Z" fill="#E8170E"/>
                                    </svg>   
                                </Link>
                                <Link  aria-label="social link" >
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_68_1252)">
                                        <path d="M18.7109 0C15.1509 0 11.6708 1.05568 8.71068 3.03355C5.7506 5.01141 3.44349 7.82263 2.08111 11.1117C0.718737 14.4008 0.362277 18.02 1.05681 21.5116C1.75134 25.0033 3.46568 28.2106 5.98302 30.7279C8.50037 33.2453 11.7077 34.9596 15.1993 35.6541C18.691 36.3487 22.3102 35.9922 25.5992 34.6298C28.8883 33.2675 31.6995 30.9603 33.6774 28.0003C35.6553 25.0402 36.7109 21.5601 36.7109 18C36.7109 13.2261 34.8145 8.64773 31.4389 5.27208C28.0632 1.89642 23.4848 0 18.7109 0ZM13.4767 27.4737H9.54989V14.8239H13.4767V27.4737ZM11.5109 13.0974C11.059 13.0992 10.6167 12.9671 10.2398 12.7176C9.86301 12.4681 9.5686 12.1125 9.39382 11.6958C9.21904 11.279 9.17174 10.8198 9.2579 10.3761C9.34406 9.93249 9.55981 9.52435 9.87788 9.2033C10.1959 8.88225 10.6021 8.66271 11.0449 8.57241C11.4877 8.48212 11.9473 8.52514 12.3657 8.69603C12.7841 8.86692 13.1424 9.158 13.3954 9.5325C13.6484 9.90699 13.7847 10.3481 13.787 10.8C13.7883 11.406 13.5496 11.9879 13.123 12.4184C12.6965 12.8489 12.1169 13.093 11.5109 13.0974ZM28.1846 27.4737H24.2602V21.3158C24.2602 19.8474 24.2317 17.9645 22.2186 17.9645C20.2054 17.9645 19.8502 19.5608 19.8502 21.2092V27.4737H15.9399V14.8239H19.708V16.5482H19.7625C20.2859 15.5534 21.5673 14.5042 23.4786 14.5042C27.4528 14.5042 28.1846 17.1237 28.1846 20.5247V27.4737Z" fill="#007BB5"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_68_1252">
                                        <rect width="36" height="36" fill="white" transform="translate(0.710938)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* next & previews blog btn */}
                        <div className="blog-next-btn mb-30">
                            <div className="btn-item">
                                <div className="main-img img-cover">
                                    <img src={btnImg1} alt="" />
                                    <div className="arrow-btn">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <span className="chy-heading-1 date">december 6, 2023</span>
                                    <h3 className="chy-heading-1 title">
                                        <Link  aria-label="blog" >We Leverage Technology to Solve Challenges for Your Business</Link>
                                    </h3>
                                </div>
                            </div>
                            <div className="btn-item">
                                <div className="main-img img-cover">
                                    <img src={btnImg2} alt="" />
                                    <div className="arrow-btn">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <span className="chy-heading-1 date">december 6, 2023</span>
                                    <h3 className="chy-heading-1 title">
                                        <Link  aria-label="blog" >Your Business Building Automation into Business Processes</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        {/* author */}
                        <div className="blog-details-comment-item mb-30">
                            <div className="img-wrap">
                                <img src={auth1} alt=""/>
                            </div>
                            <div className="content-wrap">
                                <span className="name">jamile milson</span>
                                <p className="comment-text chy-para-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                                <ul className="social-link">
                                    <li>
                                        <Link >
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                        <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link >
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* comments */}
                        <div className="blog-details-comments-wrap mb-40">
                            <h3 className="chy-heading-1 title chy-split-in-right chy-split-text">03 Comments</h3>

                            <div className="comments-box-single ">
                                <div className="person-img  img-cover">
                                    <img src={commentAuth1} alt="" />
                                </div>
                                <div className="comments-box-author-content">
                                    <div className="heading-wrap">
                                        <div className="title-wrap">
                                            <span className="name chy-heading-1">Esther Howard</span>
                                            <span className="date">Jan 4, 2024</span>
                                        </div>
                                        <Link className="reply-btn" ><i className="fas fa-comment-lines"></i>reply</Link>
                                    </div>
                                    <p className="comment-text chy-para-1">Neque porro quisquam est, qui is dolor emr ipsum quia dolor sit amet the consec tetur is adipisci velit, sed Neque porro.</p>
                                </div>
                            </div>

                            <div className="comments-box-single ">
                                <div className="person-img  img-cover">
                                    <img src={commentAuth2} alt="" />
                                </div>
                                <div className="comments-box-author-content">
                                    <div className="heading-wrap">
                                        <div className="title-wrap">
                                            <span className="name chy-heading-1">Jenny Wilson</span>
                                            <span className="date">Jan 4, 2024</span>
                                        </div>
                                        <Link className="reply-btn" ><i className="fas fa-comment-lines"></i>reply</Link>
                                    </div>
                                    <p className="comment-text chy-para-1">Neque porro quisquam est, qui is dolor emr ipsum quia dolor sit amet the consec tetur is adipisci velit, sed Neque porro.</p>
                                </div>
                            </div>

                            <div className="comments-box-single ">
                                <div className="person-img  img-cover">
                                    <img src={commentAuth3} alt="" />
                                </div>
                                <div className="comments-box-author-content">
                                    <div className="heading-wrap">
                                        <div className="title-wrap">
                                            <span className="name chy-heading-1">Albert Flores</span>
                                            <span className="date">Jan 4, 2024</span>
                                        </div>
                                        <Link className="reply-btn" ><i className="fas fa-comment-lines"></i>reply</Link>
                                    </div>
                                    <p className="comment-text chy-para-1">Neque porro quisquam est, qui is dolor emr ipsum quia dolor sit amet the consec tetur is adipisci velit, sed Neque porro.</p>
                                </div>
                            </div>

                        </div>

                        {/* comment form  */}
                        <div className="contact-form-wrap wow fadeInUp mb-50">
                            <h6 className="title chy-heading-1">leave A comment</h6>
                            <p className="text chy-para-1">In nec libero luctus, aliquet turpis at, vehicula nisi. Cras eget mauris in nisl tempus lobortis.</p>

                            <form className="contact-form"  action="#">

                                <input type="text" placeholder="first name" />
                                <input type="number" placeholder="phone number" />
                                <input type="email" placeholder="email address" />
                                <input type="text" placeholder="subject" />
        
                                <textarea name="" id="" cols="30" rows="10" placeholder="Type your message"></textarea>
        
                                <div className="btn-wrap">
                                    <button className="chy-pr-btn-1"> 
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
                </div>

                {/* sidebar */}
                <Sidebar />

            </div>
        </div>
    </div>
  )
}

export default BlogDetails