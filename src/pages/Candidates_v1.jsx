import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import CandiSec1 from "../components/candidates/CandiSec1";
import dataCandi from "../assets/fakeData/dataCandi";
import Form3 from "../components/formsearch/Form3";
import Gotop from "../components/gotop";

Candidates_v1.propTypes = {};

function Candidates_v1(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Find Candidates" className="breadcrumb-section" />
      <Form3 />
      <CandiSec1 data={dataCandi} />

      <Footer />
      <Gotop />
    </div>
  );
}

export default Candidates_v1;
