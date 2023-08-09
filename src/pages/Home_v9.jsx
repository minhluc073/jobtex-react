import React from "react";
import PropTypes from "prop-types";
import Header03 from "../components/header/Header03";
import Banner09 from "../components/banner/Banner09";
import Couter from "../components/couter";
import Category from "../components/category";
import Jobs from "../components/jobs";
import dataJobs from "../assets/fakeData/dataJobs";
import dataCate from "../assets/fakeData/dataCategory";
import Box09 from "../components/boxicon/Box09";
import ReviewJob09 from "../components/jobs/ReviewJob09";
import GetApp from "../components/getapp";
import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";
import Footer from "../components/footer";
import Gotop from "../components/gotop";

Home_v9.propTypes = {};

function Home_v9(props) {
  return (
    <div>
      <Header03 />
      <Banner09 />
      <Couter />
      <Category data={dataCate} />

      <Jobs data={dataJobs} />
      <Box09 />
      <ReviewJob09 />
      <GetApp className="bg-get-app" />
      <Partner data={dataPartner} />

      <Footer />
      <Gotop />
    </div>
  );
}

export default Home_v9;
