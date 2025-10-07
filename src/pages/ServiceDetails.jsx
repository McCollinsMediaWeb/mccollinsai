import React, { useEffect, useState } from 'react'
import HeaderFive from '../elements/headers/HeaderFive'
import HeaderOne from '../elements/headers/HeaderOne'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from '../components/preloader/Preloader'
import ServiceDetailsSection from '../inner-elements/services/ServiceDetails';
import FooterOne from '../elements/footer/FooterOne';
import BackToTop from '../components/back-to-top/BackToTop';



function ServiceDetails() {

  useEffect(()=> {
    
    // title setup 
    document.title = `McCollins Media - Service Details`

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
            <HeaderOne />
            <BreadCrumb title="Our Services" />
            <ServiceDetailsSection />
            <FooterOne />
            <BackToTop />
        </div>
        }
    </>
  )
}

export default ServiceDetails