import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import FooterOne from '../elements/footer/FooterOne'
import BackToTop from '../components/back-to-top/BackToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import AboutTwoSection from "../elements/about/AboutTwo";
import SolutionTwo from '../elements/solution/SolutionTwo'
import ResearchTwo from '../elements/research/ResearchTwo'
import MarqueeTwo from '../elements/marquee/MarqueeTwo'
import PortfolioTwo from '../elements/portfolio/PortfolioTwo'
import BlogOne from '../elements/blog/BlogOne'




function AboutTwo() {

  useEffect(()=> {
    
    // title setup 
    document.title = `Choicy - About 02`

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
      {!loading &&
        <div>
          <HeaderFive />
          <BreadCrumb title="About 02" />
          <div className='pb-100'>
            <AboutTwoSection />
          </div>
          <SolutionTwo />
          <ResearchTwo />
          <MarqueeTwo />
          <PortfolioTwo />
          <BlogOne />
          <FooterOne />
          <BackToTop />
        </div>
        }
    </>
  )
}

export default AboutTwo