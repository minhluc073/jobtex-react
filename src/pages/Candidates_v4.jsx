import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import FormCandidate from "../components/candidates/FormCandidate";
import Footer from "../components/footer";
import MapCandidate from "../components/map/MapCandidate";
import CandiSec1 from "../components/candidates/CandiSec1";
import dataCandi from "../assets/fakeData/dataCandi";
import dataMap from "../assets/fakeData/dataMap";
import Gotop from "../components/gotop";

Candidates_v4.propTypes = {};

function Candidates_v4(props) {
  return (
    <div>
      <Header2 />
      <MapCandidate markers={dataMap} />
      <FormCandidate />
      <CandiSec1 data={dataCandi} className="candidate-section-two" />

      <Footer />
      <Gotop />
    </div>
  );
}

export default Candidates_v4;
