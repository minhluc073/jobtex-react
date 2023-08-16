import React, { useState } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../components/breadcrumb";
import Header2 from "../components/header/Header2";
import JobSec2 from "../components/jobs/JobSec2";
import dataJobs from "../assets/fakeData/dataJobs";
import Footer from "../components/footer";
import FormSearch from "../components/formsearch";
import Gotop from "../components/gotop";
import PopupJob from "../components/popup/PopupJob";

Joblist_v2.propTypes = {};

function Joblist_v2(props) {
  const [isShow, setShow] = useState(false);
  const handlePopup = () => {
    const getPopUp = document.querySelector(".sidebar-popup");
    setShow(!isShow);
    !isShow
      ? getPopUp.classList.add("modal-menu--open")
      : getPopUp.classList.remove("modal-menu--open");
  };

  return (
    <>
      <PopupJob isShow={isShow} handlePopup={handlePopup} />
      <Header2 />
      <Breadcrumb title="Find Jobs" className="breadcrumb-section" />

      <FormSearch />

      <JobSec2 data={dataJobs} isShow={isShow} handlePopup={handlePopup} />
      <Footer />
      <Gotop />
    </>
  );
}

export default Joblist_v2;
