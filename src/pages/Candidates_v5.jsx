import React, { useState } from "react";
import Header2 from "../components/header/Header2";
import CandiSec5 from "../components/candidates/CandiSec5";
import dataCandi from "../assets/fakeData/dataCandi";
import Gotop from "../components/gotop";
import Popupcandi from "../components/popup/Popupcandi";

function Candidates_v5(props) {
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
      <Popupcandi handlePopup={handlePopup} />
      <Header2 />
      <CandiSec5 data={dataCandi} handlePopup={handlePopup} />
      <Gotop />
    </>
  );
}

export default Candidates_v5;
