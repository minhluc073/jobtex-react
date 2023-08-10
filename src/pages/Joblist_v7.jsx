import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import JobTopmap from "../components/jobs/JobTopmap";
import dataJobs from "../assets/fakeData/dataJobs";
import Gotop from "../components/gotop";
import FormMap from "../components/map/FormMap";

Joblist_v7.propTypes = {};

function Joblist_v7(props) {
  return (
    <div>
      <Header2 />

      <FormMap />
      <JobTopmap data={dataJobs} className="inner-jobs-section-two" />
      <Gotop />
    </div>
  );
}

export default Joblist_v7;
