import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";

import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";
import Category from "../components/category";
import dataCate from "../assets/fakeData/dataCategory";
import Jobs from "../components/jobs";
import dataJobs from "../assets/fakeData/dataJobs";
import Footer from "../components/footer";
import Employer from "../components/employer";
import dataEm from "../assets/fakeData/dataEmployers";
import Location from "../components/location";
import dataLocation from "../assets/fakeData/dataLocation";
import About from "../components/about";
import Banner03 from "../components/banner/Banner03";
import Job03 from "../components/jobs/Job03";
import Gotop from "../components/gotop";
import { useEffect } from "react";

Home_v3.propTypes = {};

function Home_v3(props) {
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  return (
    <div>
      <Header2 />
      <Banner03 />

      <Partner data={dataPartner} />

      <Category data={dataCate} />

      <Job03 data={dataJobs} />

      <Location data={dataLocation} />

      <About />

      <Employer data={dataEm} />

      <Footer />
      <Gotop />
    </div>
  );
}

export default Home_v3;
