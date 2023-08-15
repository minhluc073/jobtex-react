import React from "react";

import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import CandiSec7 from "../components/candidates/CandiSec7";
import Gotop from "../components/gotop";

Candidates_v7.propTypes = {};

function Candidates_v7(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Find Candidates" className="breadcrumb-section" />
      <CandiSec7 />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Candidates_v7;
