import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import Review from "../components/aboutPage/Review";
import Gotop from "../components/gotop";
import BannerCounter from "../components/aboutPage/BannerCounter";
import { Link } from "react-router-dom";
import img1 from "../assets/images/job/work-icon-1.jpg";
import img2 from "../assets/images/job/work-icon-2.jpg";
import img3 from "../assets/images/job/work-icon-3.jpg";
import Iconbox3 from "../components/aboutPage/Iconbox3";
import Testimonial from "../components/aboutPage/Testimonial";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import Partner from "../components/aboutPage/Partner";

AboutUs.propTypes = {};

function AboutUs(props) {
  return (
    <>
      <Header2 />
      <Breadcrumb title="About Us" />
      <Review />
      <BannerCounter />
      <section className="wd-iconbox style-3 inner-iconbox-section">
        <div className="tf-container">
          <div className="title-iconbox style-3 stc">
            <h4>How it work?</h4>
            <p>
              Pellentesque quis lectus sagittis, gravida erat id, placerat
              tellus.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="group-col-3">
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img1} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">Free resume assessments</Link>
                    </h6>
                    <p>
                      Aenean porta, eros lacus congue lorem, sit amet mollis
                      magna velit ac erat Morbi accumsan purus nec vehicula
                      ornare. Nam quis tincidunt nulla.
                    </p>
                    <button>
                      Start Now&nbsp;
                      <span className="icon-arrow-right2" />
                    </button>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img2} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">Job fit scoring</Link>
                    </h6>
                    <p>
                      Aenean porta, eros lacus congue lorem, sit amet mollis
                      magna velit ac erat Morbi accumsan purus nec vehicula
                      ornare. Nam quis tincidunt nulla.
                    </p>
                    <button>
                      Start Now&nbsp;
                      <span className="icon-arrow-right2" />
                    </button>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img3} alt="img" />
                    </div>
                  </div>
                  <div className="box-content ">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">
                        Help every step of the way
                      </Link>
                    </h6>
                    <p>
                      Aenean porta, eros lacus congue lorem, sit amet mollis
                      magna velit ac erat Morbi accumsan purus nec vehicula
                      ornare. Nam quis tincidunt nulla.
                    </p>
                    <button>
                      Start Now&nbsp;
                      <span className="icon-arrow-right2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Iconbox3 />
      <Testimonial data={dataTestimonials} />
      <Partner />
      <section className="wd-banner-CTA">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12  wow fadeInUp">
              <div className="group-banner-CTA">
                <h3>Job Opportunities Are Always Open</h3>
                <p>
                  Aenean porta, eros lacus congue lorem, sit amet mollis magna
                  velit ac erat.
                </p>
                <div className="group-btn">
                  <button className="tf-btn">Search Job</button>
                  <button className="tf-btn">Find Candidates</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </>
  );
}

export default AboutUs;
