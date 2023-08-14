import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import EmpSec1 from "../components/employer/EmpSec1";
import dataEm from "../assets/fakeData/dataEmployers";
import dataMap from "../assets/fakeData/dataMap";
import MapSection from "../components/map";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import FormEmployer from "../components/employer/FormEmployer";

Employer_v6.propTypes = {};

function Employer_v6(props) {
  return (
    <div>
      <Header2 />
      <MapSection markers={dataMap} />
      <FormEmployer />
      <EmpSec1 data={dataEm} className="inner-employer-section-three" />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Employer_v6;
