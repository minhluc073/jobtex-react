import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import EmpSec7 from "../components/employer/EmpSec7";
import dataEm from "../assets/fakeData/dataEmployers";
import Gotop from "../components/gotop";

Employer_v7.propTypes = {};

function Employer_v7(props) {
  return (
    <div>
      <Header2 />
      <EmpSec7 data={dataEm} />
      <Gotop />
    </div>
  );
}

export default Employer_v7;
