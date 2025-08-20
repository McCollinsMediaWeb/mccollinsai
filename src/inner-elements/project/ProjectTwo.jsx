import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-3.png'
import image1 from '../../assets/img/project/pp-img-1.jpg'
import image2 from '../../assets/img/project/pp-img-2.jpg'
import image3 from '../../assets/img/project/pp-img-3.jpg'
import image4 from '../../assets/img/project/pp-img-4.jpg'
import image5 from '../../assets/img/project/pp-img-5.jpg'
import image6 from '../../assets/img/project/pp-img-6.jpg'
import image7 from '../../assets/img/project/pp-img-7.jpg'
import image8 from '../../assets/img/project/pp-img-8.jpg'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ProjectTwo() {

    // project data 
    const data = [
        {
            id: "01",
            name: "digital marketing agency",
            image: image1
        },
        {
            id: "02",
            name: "Business Consulting",
            image: image2
        },
        {
            id: "03",
            name: "Social Media Marketing",
            image: image3
        },
        {
            id: "04",
            name: "Analytics Research Results in Business",
            image: image4
        },
        {
            id: "05",
            name: "Engine Marketing Composition Design",
            image: image5
        },
        {
            id: "06",
            name: "Business Consulting",
            image: image6
        },
        {
            id: "07",
            name: "Engine Marketing Composition Design",
            image: image7
        },
        {
            id: "08",
            name: "Social Media Marketing",
            image: image8
        },
    ]

  return (
    <div className="body-bg-1 bg-default" style={{ backgroundImage:`url(${bgImage})`}} >

        <div className="project-page-2-area pt-120 pb-90">
            <div className="container chy-container-1">

                {/* section-title */}
                <div className="section-title-wrap mb-50 text-center">
                    <h5 className="chy-subtitle-1 wow fadeInDown">Our Best Projects</h5>
                    <h2 className="chy-title-1  chy-split-in-right chy-split-text">Our Success Projects <br /> That Inspire</h2>
                </div>

                <div className="row">

                    {/* project data map  */}
                    {data.map((item)=> <div key={item.id} className="col-lg-6">
                        <div className="project-page-2-item mb-30">
                            <div className="project-page-item">
                                <div className="main-img img-cover">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="btn-position">
                                    <Link to="/project-details" className="pp-btn" >
                                        <FiArrowUpRight />
                                    </Link>
                                </div>
                                <div className="content-wrap">
                                    <span className="chy-heading-1 subtitle">marketing</span>
                                    <h3 className="chy-heading-1 title">
                                        <Link to="/project-details">{item.name}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectTwo