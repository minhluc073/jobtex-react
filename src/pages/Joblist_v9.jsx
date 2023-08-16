import React, { useState } from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import JobSec9 from "../components/jobs/JobSec9";
import dataJobs from "../assets/fakeData/dataJobs";
import Gotop from "../components/gotop";
import PopupJob from "../components/popup/PopupJob";

Joblist_v9.propTypes = {};

function Joblist_v9(props) {
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
      <JobSec9 data={dataJobs} isShow={isShow} handlePopup={handlePopup} />
      <Gotop />
    </>
  );
}

export default Joblist_v9;
