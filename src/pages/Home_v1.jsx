import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Banner01 from "../components/banner/Banner01";
import Category from "../components/category";
import Jobs from "../components/jobs";
import BoxIcon from "../components/boxicon";
import Employer from "../components/employer";
import Testimonials from "../components/testimonials";
import Partner from "../components/partner";
import dataCate from "../assets/fakeData/dataCategory";
import dataJobs from "../assets/fakeData/dataJobs";
import dataEm from "../assets/fakeData/dataEmployers";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import dataPartner from "../assets/fakeData/dataPartner";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";

Home_v1.propTypes = {};

function Home_v1(props) {

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  
  return (
    <>
      <Header />
      <Banner01 />

      <Category data={dataCate} />

      <Jobs data={dataJobs} />

      <BoxIcon />

      <Employer data={dataEm} />

      <Testimonials data={dataTestimonials} />

      <Partner data={dataPartner} />

      <Footer />

      <Gotop />
    </>
  );
}

export default Home_v1;
