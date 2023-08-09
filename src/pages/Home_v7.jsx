import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Banner07 from "../components/banner/Banner07";
import Category07 from "../components/category/Category07";
import dataCate from "../assets/fakeData/dataCategory";
import Job07 from "../components/jobs/Job07";
import dataJobs from "../assets/fakeData/dataJobs";
import Location from "../components/location";
import dataLocation from "../assets/fakeData/dataLocation";

import Box07 from "../components/boxicon/Box07";
import Couter from "../components/iconbox/Couter";
import Blog01 from "../components/blog/Blog01";
import dataBlog from "../assets/fakeData/dataBlog";
import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";
import Footer from "../components/footer";
import Gotop from "../components/gotop";

Home_v7.propTypes = {};

function Home_v7(props) {
  return (
    <div>
      <Header2 />
      <Banner07 />
      <Category07 data={dataCate} />

      <Job07 data={dataJobs} />

      <Location data={dataLocation} />
      <Box07 />

      <div className="container">
        <Couter className="background1" />
      </div>

      <Blog01 data={dataBlog} />
      <Partner data={dataPartner} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Home_v7;
