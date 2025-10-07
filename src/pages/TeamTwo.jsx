import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import VideoPopupOne from '../elements/video-popup/VideoPopupOne'
import CtaOne from '../elements/cta/CtaOne'
import TeamSliderOne from '../elements/team-slider/TeamSliderOne'
import ClientOne from '../elements/client/ClientOne'
import bgImage from '../assets/img/bg/body-bg-1.png'
import FooterOne from '../elements/footer/FooterOne'
import BackToTop from '../components/back-to-top/BackToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import TeamFourSection from '../elements/team/TeamFour'
import { data_2 } from '../data/team/team-four'
import HeaderOne from '../elements/headers/HeaderOne'



function TeamTwo() {

  useEffect(() => {

    // title setup 
    document.title = `McCollins Media - Team`

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
          {/* <HeaderFive /> */}
          <HeaderOne />
          <BreadCrumb title="Team" />
          <TeamFourSection data={data_2} />
          <VideoPopupOne />
          <div className="body-bg-1 bg-default" style={{ backgroundImage: `url(${bgImage})` }}>
            <CtaOne />
            <TeamSliderOne />
            <ClientOne />
            <FooterOne />
            <BackToTop />
          </div>
        </div>
      }
    </>
  )
}

export default TeamTwo