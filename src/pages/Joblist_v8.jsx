import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Map from "../components/map";
import JobSec4 from "../components/jobs/JobSec4";
import dataJobs from "../assets/fakeData/dataJobs";
import Gotop from "../components/gotop";

Joblist_v8.propTypes = {};

function Joblist_v8(props) {
  return (
    <div>
      <Header2 />

      <Map className="v8" />

      <JobSec4 data={dataJobs} className="inner-jobs-section-three" />
      <Gotop />
    </div>
  );
}

export default Joblist_v8;
