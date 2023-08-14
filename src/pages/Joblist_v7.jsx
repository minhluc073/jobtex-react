import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import JobTopmap from "../components/jobs/JobTopmap";
import dataJobs from "../assets/fakeData/dataJobs";
import Gotop from "../components/gotop";
import FormMapJobs from "../components/map/FormMapJobs";

Joblist_v7.propTypes = {};

function Joblist_v7(props) {
  return (
    <div>
      <Header2 />

      <FormMapJobs />
      <JobTopmap data={dataJobs} className="inner-jobs-section-two" />
      <Gotop />
    </div>
  );
}

export default Joblist_v7;
