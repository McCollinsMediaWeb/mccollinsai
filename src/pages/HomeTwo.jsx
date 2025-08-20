import React, { useEffect, useState } from "react";
import HeaderTwo from "../elements/headers/HeaderTwo";
import HeroTwo from "../elements/hero/HeroTwo";
import TrustedTwo from "../elements/trusted/TrustedTwo";
import AboutTwo from "../elements/about/AboutTwo";
import PortfolioTwo from "../elements/portfolio/PortfolioTwo";
import ServicesTwo from "../elements/services/ServicesTwo";
import SolutionTwo from "../elements/solution/SolutionTwo";
import PricingTwo from "../elements/pricing/PricingTwo";
import TestimonialTwo from "../elements/testimonial/TestimonialTwo";
import ResearchTwo from "../elements/research/ResearchTwo";
import MarqueeTwo from "../elements/marquee/MarqueeTwo";
import BlogTwo from "../elements/blog/BlogTwo";
import FooterTwo from "../elements/footer/FooterTwo";
import SearchPopup from "../components/search-popup/SearchPopup";
import BackToTop from "../components/back-to-top/BackToTop";
import Preloader from "../components/preloader/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HomeTwo() {

  // // text animation 
  // useGSAP(() => {

  //   gsap.utils.toArray('.chy-split-in-right-2').forEach((el, index) => { 
  //     let tl1 = gsap.timeline({
  //       defaults: {ease: "power4.inOut", duration: 2},
  //       scrollTrigger: {
  //         trigger: el,
  //         // once: true,
  //       }
  //     })
      
  //     tl1
  //     .set(el, {transformOrigin: 'right left'})
  //     .to(el, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, x: 0})
  //   })


  // });

  useEffect(()=> {

    // title setup 
    document.title = `Choicy - Home 02`

    // aos activation
    AOS.init();

  }, [])

  // preloader handle 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
    setLoading(false);
    };

    if (document.readyState === 'complete') {
    setLoading(false);
    } else {
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
    }
  }, []);


  return (
    <>
      {loading && <Preloader />}
      {!loading && <div className="h2-body-bg fix">
      <HeaderTwo />
      <HeroTwo />
      <TrustedTwo />
      <AboutTwo />
      <PortfolioTwo />
      <ServicesTwo />
      <SolutionTwo />
      <PricingTwo />
      <TestimonialTwo />
      <ResearchTwo />
      <MarqueeTwo />
      <BlogTwo />
      <FooterTwo />
      <SearchPopup />
      <BackToTop />
    </div>}
    </>
  );
}

export default HomeTwo;
