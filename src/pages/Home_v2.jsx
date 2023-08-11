import React from "react";
import PropTypes from "prop-types";
import TabJob from "../components/jobs/TabJob";
import dataJobs from "../assets/fakeData/dataJobs";
import Banner02 from "../components/banner/Banner02";
import Gotop from "../components/gotop";
import HeaderHome2 from "../components/header/HeaderHome2";
import Footer from "../components/footer";
import MetaCategory from "../components/dropdown/MetaCategory";

Home_v2.propTypes = {};

function Home_v2(props) {
  return (
    <>
      <HeaderHome2 />

      <Banner02 />

      <MetaCategory />

      <TabJob data={dataJobs} />
      <Footer />

      <Gotop />
    </>
  );
}

export default Home_v2;
