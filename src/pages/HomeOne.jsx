import React, { useEffect, useState } from "react";
import HeaderOne from "../elements/headers/HeaderOne";
import bg1 from "../assets/img/bg/body-bg-1.png";
import bg2 from "../assets/img/bg/body-bg-2.png";
import TrustedOne from "../elements/trusted/TrustedOne";
import HeroOne from "../elements/hero/HeroOne";
import ServicesOne from "../elements/services/ServicesOne";
import SolutionOne from "../elements/solution/SolutionOne";
import ResearchOne from "../elements/research/ResearchOne";
import PricingOne from "../elements/pricing/PricingOne";
import ProjectOne from "../elements/project/ProjectOne";
import PricingCardOne from "../components/pricing-card/PricingCardOne";
import TeamOne from "../elements/team/TeamOne";
import ClientOne from "../elements/client/ClientOne";
import VideoPopupOne from "../elements/video-popup/VideoPopupOne";
import CtaOne from "../elements/cta/CtaOne";
import BlogOne from "../elements/blog/BlogOne";
import FooterOne from "../elements/footer/FooterOne";
import TeamSliderOne from "../elements/team-slider/TeamSliderOne";
import BackToTop from "../components/back-to-top/BackToTop";
import Preloader from "../components/preloader/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HomeOne() {

  useEffect(()=> {
    
    // title setup 
    document.title = `McCollins Media - Digital Marketing Agency`

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
      {loading && <Preloader/>}
      {!loading && <>
        <HeaderOne />
        <HeroOne />
        <div
          className="body-bg-1 bg-default"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <TrustedOne />
          <ServicesOne />
          <SolutionOne />
        </div>
        <ResearchOne />
        <PricingOne />
        <ProjectOne />
        <div
          className="body-bg-2 bg-default"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <PricingCardOne />
          <TeamOne />
          <TeamSliderOne />
          <ClientOne />
        </div>
        <VideoPopupOne />
        <CtaOne />
        <BlogOne />
        <FooterOne />
        <BackToTop />
      </>}
    </>
  );
}

export default HomeOne;
