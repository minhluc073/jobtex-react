import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import FormMapEm from "../components/map/FormMapEm";
import EmpSec1 from "../components/employer/EmpSec1";
import dataEm from "../assets/fakeData/dataEmployers";
import Footer from "../components/footer";
import Gotop from "../components/gotop";

Employer_v6.propTypes = {};

function Employer_v6(props) {
  return (
    <div>
      <Header2 />
      <FormMapEm />
      <EmpSec1 data={dataEm} className="inner-employer-section-three" />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Employer_v6;
