import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import CandiSec5 from "../components/candidates/CandiSec5";
import dataCandi from "../assets/fakeData/dataCandi";
import Gotop from "../components/gotop";

Candidates_v5.propTypes = {};

function Candidates_v5(props) {
  return (
    <div>
      <Header2 />

      <CandiSec5 data={dataCandi} />
      <Gotop />
    </div>
  );
}

export default Candidates_v5;
