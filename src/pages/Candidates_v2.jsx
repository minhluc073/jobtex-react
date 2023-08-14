import React from "react";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";

import dataCandi from "../assets/fakeData/dataCandi";
import Form3 from "../components/formsearch/Form3";
import CandiSec2 from "../components/candidates/CandiSec2";
import Gotop from "../components/gotop";

Candidates_v2.propTypes = {};

function Candidates_v2(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Find Candidates" />
      <Form3 />
      <CandiSec2 data={dataCandi} />

      <Footer />
      <Gotop />
    </div>
  );
}

export default Candidates_v2;
