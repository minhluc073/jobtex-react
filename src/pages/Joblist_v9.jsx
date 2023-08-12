import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import JobSec9 from "../components/jobs/JobSec9";
import dataJobs from "../assets/fakeData/dataJobs";

Joblist_v9.propTypes = {};

function Joblist_v9(props) {
  return (
    <div>
      <Header2 />
      <JobSec9 data={dataJobs} />
      {/* <Gotop /> */}
    </div>
  );
}

export default Joblist_v9;
