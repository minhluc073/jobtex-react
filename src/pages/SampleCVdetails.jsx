import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Details from "../components/sampleCV/Details";
import Gotop from "../components/gotop";

SampleCVdetails.propTypes = {};

function SampleCVdetails(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="CV Details" className="breadcrumb-section" />

      <Details />

      <Footer />
      <Gotop />
    </div>
  );
}

export default SampleCVdetails;
