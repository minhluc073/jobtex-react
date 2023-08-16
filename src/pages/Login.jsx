import React from "react";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import SignIn from "../components/signin";

function Login(props) {
  return (
    <>
      <Header2 />
      <Breadcrumb title="Login" />
      <SignIn />
      <Footer />
      <Gotop />
    </>
  );
}

export default Login;
