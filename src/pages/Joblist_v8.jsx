import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import MapSection from "../components/map";
import JobSec4 from "../components/jobs/JobSec4";
import dataJobs from "../assets/fakeData/dataJobs";
import dataMap from "../assets/fakeData/dataMap";
import Gotop from "../components/gotop";
import Footer from "../components/footer";

Joblist_v8.propTypes = {};

function Joblist_v8(props) {
  return (
    <div>
      <Header2 />

      <MapSection className="v8" markers={dataMap} />
      <JobSec4 data={dataJobs} className="inner-jobs-section-three" />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Joblist_v8;
