import { createBrowserRouter } from "react-router-dom";
import HomeTwo from "../pages/HomeTwo";
import HomeThree from "../pages/HomeThree";
import HomeOne from "../pages/HomeOne";
import HomeFour from "../pages/HomeFour";
import ServicesOne from "../pages/ServicesOne";
import ServicesTwo from "../pages/ServicesTwo";
import ServicesThree from "../pages/ServicesThree";
import ServiceDetails from "../pages/ServiceDetails";
import AboutOne from "../pages/AboutOne";
import AboutTwo from "../pages/AboutTwo";
import AboutThree from "../pages/AboutThree";
import TeamOne from "../pages/TeamOne";
import TeamTwo from "../pages/TeamTwo";
import TeamDetails from "../pages/TeamDetails";
import ProjectOne from "../pages/ProjectOne";
import ProjectTwo from "../pages/ProjectTwo";
import ProjectDetails from "../pages/ProjectDetails";
import BlogOne from "../pages/BlogOne";
import BlogTwo from "../pages/BlogTwo";
import BlogDetails from "../pages/BlogDetails";
import Career from "../pages/Career";
import CareerDetails from "../pages/Career-Details";
import JobApply from "../pages/JobApply";
import Faq from "../pages/Faq";
import Testimonial from "../pages/Testimonial";
import OurClients from "../pages/OurClients";
import Pricing from "../pages/Pricing";
import Process from "../pages/Process";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeOne />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home-02",
        element: <HomeTwo/>,
    },
    {
        path: "/home-03",
        element: <HomeThree/>,
    },
    {
        path: "/home-04",
        element: <HomeFour/>,
    },
    {
        path: "/services-01",
        element: <ServicesOne/>
    },
    {
        path: "/services-02",
        element: <ServicesTwo/>
    },
    {
        path: "/services-03",
        element: <ServicesThree/>
    },
    {
        path: "/service-details",
        element: <ServiceDetails/>
    },
    {
        path: "/about-01",
        element: <AboutOne/>
    },
    {
        path: "/about-02",
        element: <AboutTwo/>
    },
    {
        path: "/about-03",
        element: <AboutThree/>
    },
    {
        path: "/team-01",
        element: <TeamOne/>
    },
    {
        path: "/team-02",
        element: <TeamTwo/>
    },
    {
        path: "/team-details",
        element: <TeamDetails/>
    },
    {
        path: "/project-01",
        element: <ProjectOne/>
    },
    {
        path: "/project-02",
        element: <ProjectTwo/>
    },
    {
        path: "/project-details",
        element: <ProjectDetails/>
    },
    {
        path: "/blog-01",
        element: <BlogOne/>
    },
    {
        path: "/blog-02",
        element: <BlogTwo/>
    },
    {
        path: "/blog-details",
        element: <BlogDetails/>
    },
    {
        path: "/career",
        element: <Career/>
    },
    {
        path: "/career-details",
        element: <CareerDetails/>
    },
    {
        path: "/job-apply",
        element: <JobApply/>
    },
    {
        path: "/faqs",
        element: <Faq/>
    },
    {
        path: "/testimonial",
        element: <Testimonial/>
    },
    {
        path: "/our-clients",
        element: <OurClients/>
    },
    {
        path: "/pricing",
        element: <Pricing/>
    },
    {
        path: "/process",
        element: <Process/>
    },
    {
        path: "/contact-us",
        element: <ContactUs/>
    },
])

export default router;