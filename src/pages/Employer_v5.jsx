import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Form2 from "../components/formsearch/Form2";
import EmpSec5 from "../components/employer/EmpSec5";
import dataEm from "../assets/fakeData/dataEmployers";
import Footer from "../components/footer";
import Gotop from "../components/gotop";

Employer_v5.propTypes = {};

function Employer_v5(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Employers" className="breadcrumb-section" />
      <Form2 />

      <EmpSec5 data={dataEm} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Employer_v5;
