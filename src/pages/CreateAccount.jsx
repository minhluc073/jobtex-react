import React from "react";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import SignUp from "../components/signUp";

function CreateAccount(props) {
  return (
    <>
      <Header2 />
      <Breadcrumb title="Login" />
      <SignUp />
      <Footer />
      <Gotop />
    </>
  );
}

export default CreateAccount;
