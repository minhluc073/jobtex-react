import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import CandiSec3 from "../components/candidates/CandiSec3";
import dataCandi from "../assets/fakeData/dataCandi";
import Gotop from "../components/gotop";

Candidates_v3.propTypes = {};

function Candidates_v3(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Find Candidates" className="breadcrumb-section" />
      <CandiSec3 data={dataCandi} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Candidates_v3;
