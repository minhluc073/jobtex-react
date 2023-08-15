import React from "react";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import Pricing1 from "../components/pricing";
import Pricing2 from "../components/pricing/Pricing2";
import Pricing3 from "../components/pricing/Pricing3";

function Pricing(props) {
  return (
    <>
      <Header2 />
      <Breadcrumb title="Pricing" className="breadcrumb-section" />
      <Pricing1 />
      <Pricing2 />
      <Pricing3 />
      <Footer />
      <Gotop />
    </>
  );
}

export default Pricing;
