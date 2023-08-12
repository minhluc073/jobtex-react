import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import data from "../assets/fakeData/dataEmployers";
import Form2 from "../components/formsearch/Form2";
import EmpSec1 from "../components/employer/EmpSec1";
import dataEm from "../assets/fakeData/dataEmployers";
import Gotop from "../components/gotop";

Employer_v1.propTypes = {};

function Employer_v1(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Employers" />
      <Form2 />

      <EmpSec1 data={dataEm} />
      <Gotop />
    </div>
  );
}

export default Employer_v1;
