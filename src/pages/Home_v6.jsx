import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import FormMap from "../components/map/FormMap";
import Category from "../components/category";
import dataCate from "../assets/fakeData/dataCategory";
import Job05 from "../components/jobs/Job05";
import dataJobs from "../assets/fakeData/dataJobs";
import Location05 from "../components/location/Location05";
import About from "../components/about";
import Employer from "../components/employer";
import dataEm from "../assets/fakeData/dataEmployers";
import dataMap from "../assets/fakeData/dataMap";
import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";
import Footer from "../components/footer";
import Gotop from "../components/gotop";

Home_v6.propTypes = {};

function Home_v6(props) {
  return (
    <div>
      <Header2 />

      <FormMap markers={dataMap}/>

      <Category data={dataCate} />
      <Job05 data={dataJobs} />

      <Location05 />

      <About />
      <Employer data={dataEm} className="employer-section-two" />
      <Partner data={dataPartner} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Home_v6;
