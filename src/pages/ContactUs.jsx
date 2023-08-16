import React from "react";
import Header2 from "../components/header/Header2";
import MapSection from "../components/map";
import dataMap from "../assets/fakeData/dataMap";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import Contact from "../components/contact";

function ContactUs(props) {
  return (
    <>
      <Header2 />
      <MapSection markers={dataMap} />
      <Contact />
      <Footer />
      <Gotop />
    </>
  );
}

export default ContactUs;
