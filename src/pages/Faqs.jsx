import React from "react";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import FaqItem from "../components/faq";
import dataFaq from "../assets/fakeData/dataFaq";

function Faqs(props) {
  return (
    <>
      <Header2 />
      <Breadcrumb title="Accordion" />
      <FaqItem data={dataFaq} />
      <Footer />
      <Gotop />
    </>
  );
}

export default Faqs;
