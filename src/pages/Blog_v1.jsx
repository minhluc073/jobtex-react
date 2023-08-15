import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import BlogSec1 from "../components/blog/BlogSec1";
import dataBlog from "../assets/fakeData/dataBlog";
import Gotop from "../components/gotop";

Blog_v1.propTypes = {};

function Blog_v1(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Blog" />

      <BlogSec1 data={dataBlog} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Blog_v1;
