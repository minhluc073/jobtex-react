import React from "react";

import Header2 from "../components/header/Header2";
import EmpSec7 from "../components/employer/EmpSec7";
import dataEm from "../assets/fakeData/dataEmployers";
import Gotop from "../components/gotop";
import PopupJob from "../components/popup/PopupEm";
import { useState } from "react";
import PopupEm from "../components/popup/PopupEm";

function Employer_v7(props) {
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
      <PopupEm isShow={isShow} handlePopup={handlePopup} />
      <Header2 />
      <EmpSec7 data={dataEm} isShow={isShow} handlePopup={handlePopup} />
      <Gotop />
    </>
  );
}

export default Employer_v7;
