import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import Term from "../components/term";

Termsofuse.propTypes = {};

function Termsofuse(props) {
  return (
    <>
      <Header2 />
      <Breadcrumb title="Term Of Use" />
      <Term />
      <Footer />
      <Gotop />
    </>
  );
}

export default Termsofuse;
