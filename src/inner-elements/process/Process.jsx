import React from 'react'
import bgImage from '../../assets/img/bg/body-bg-3.png'
import image1 from '../../assets/img/process/process-img-1.jpg'
import image2 from '../../assets/img/process/process-img-2.jpg'
import image3 from '../../assets/img/process/process-img-3.jpg'
import image4 from '../../assets/img/process/process-img-4.jpg'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Process() {

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
    <div className="body-bg-1 bg-default" style={{backgroundImage:`url(${bgImage})`}}>

        <div className="our-process-page-area pt-120 pb-120">
            <div className="container chy-container-1">

                {/* section-title */}
                <div className="section-title-wrap mb-50 text-center">
                    <h5 className="chy-subtitle-1 wow fadeInDown">Our Process</h5>
                    <h2 className="chy-title-1  chy-split-in-right chy-split-text">Work Process</h2>
                </div>

                {/* single-item */}
                <div className="our-process-page-item mb-85 chyScl" >
                    <div className="img-wrap">
                        <img src={image1} alt="" />
                    </div>
                    <div className="content-wrap">
                        <h4 className="title chy-heading-1">need assesssment</h4>
                        <p className="text chy-para-1">Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel,</p>
                    </div>
                </div>

                {/* single-item */}
                <div className="our-process-page-item style-2 mb-85 chyScl">
                    <div className="content-wrap">
                        <h4 className="title chy-heading-1">analysis & design</h4>
                        <p className="text chy-para-1">Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel,</p>
                    </div>
                    <div className="img-wrap">
                        <img src={image2} alt="" />
                    </div>
                </div>

                {/* single-item */}
                <div className="our-process-page-item mb-85 chyScl">
                    <div className="img-wrap">
                        <img src={image3} alt="" />
                    </div>
                    <div className="content-wrap">
                        <h4 className="title chy-heading-1">solution development</h4>
                        <p className="text chy-para-1">Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel,</p>
                    </div>
                </div>

                {/* single-item */}
                <div className="our-process-page-item style-2 chyScl">
                    <div className="content-wrap">
                        <h4 className="title chy-heading-1">exution & delivery</h4>
                        <p className="text chy-para-1">Cras ac sapien eget ante faucibus tempus et eu tortor. Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec. Mauris a nibh sed libero fermentum aliquet. Quisque sit amet faucibus magna. Donec purus mi, commodo id commodo vel,</p>
                    </div>
                    <div className="img-wrap">
                        <img src={image4} alt="" />
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Process