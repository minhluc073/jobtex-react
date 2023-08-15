import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import dataBlog from "../assets/fakeData/dataBlog";
import BlogSec3 from "../components/blog/BlogSec3";
import Gotop from "../components/gotop";

Blog_v3.propTypes = {};

function Blog_v3(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Blog Grid" />

      <BlogSec3 data={dataBlog} />
      <Footer />
      <Gotop />
    </div>
  );
}

export default Blog_v3;
