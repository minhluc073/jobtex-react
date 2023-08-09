import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Banner05 from "../components/banner/Banner05";
import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";
import Category from "../components/category";
import dataCate from "../assets/fakeData/dataCategory";
import Job05 from "../components/jobs/Job05";
import dataJobs from "../assets/fakeData/dataJobs";
import Location04 from "../components/location/Location04";
import About05 from "../components/about/About05";
import Couter from "../components/couter";
import Testimonials from "../components/testimonials";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import Footer from "../components/footer";
import Gotop from "../components/gotop";

Home_v5.propTypes = {};

function Home_v5(props) {
  return (
    <div>
      <Header2 />
      <Banner05 />
      <Partner data={dataPartner} />
      <Category data={dataCate} />
      <Job05 data={dataJobs} />

      <Location04 />

      <About05 />
      <Couter />
      <Testimonials
        data={dataTestimonials}
        className="testimonials-section-two"
      />

      <Footer />
      <Gotop />
    </div>
  );
}

export default Home_v5;
