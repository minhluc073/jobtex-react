import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Banner01 from "../components/banner/Banner01";
import Category from "../components/category";
import Jobs from "../components/jobs";
import BoxIcon from "../components/boxicon";
import Employer from "../components/employer";
import Testimonials from "../components/testimonials";
import Partner from "../components/partner";
import dataCate from "../assets/fakeData/dataCategory";
import dataJobs from "../assets/fakeData/dataJobs";
import dataEm from "../assets/fakeData/dataEmployers";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import dataPartner from "../assets/fakeData/dataPartner";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";

Home_v1.propTypes = {};

function Home_v1(props) {
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });

  const handleToggle = (key) => {
    console.log(key);

    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const [isShowMobile, setShowMobile] = useState(false);
  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <a href="index.html">
                <img className="site-logo" src="images/logo.png" alt="Image" />
              </a>
            </div>
            <a className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </a>
          </div>

          <div className="tf-tab">
            <div className="menu-tab">
              <div className="user-tag active">Menu</div>
              <div className="user-tag">Categories</div>
            </div>

            <div className="content-tab">
              <div className="header-ct-center menu-moblie">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-has-children-mobile current-item">
                        <Link
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                        <Collapse isOpened={toggle.key === "home"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "home" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile current-item">
                              <a href="index.html">Home Page 01 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="Home-02.html">Home Page 02 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-03.html">Home Page 03 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-04.html">Home Page 04 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-05.html">Home Page 05 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-06.html">Home Page 06 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-07.html">Home Page 07 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-08.html">Home Page 08 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-09.html">Home Page 09 </a>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <a href="home-10.html">Home Page 10 </a>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <a className="iteam-menu">Find jobs </a>
                        <ul className="sub-menu-mobile">
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-list.html">Jobs List - V1</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-grid.html">Jobs List - V2</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-list-sidebar.html">
                              Jobs List - V3
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-grid-sidebar.html">
                              Jobs List - V4
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-list-sidebar-fullwidth.html">
                              Jobs List - V5
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-grid-sidebar-fullwidth.html">
                              Jobs List - V6
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-topmap.html">Top Map</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-topmap-sidebar.html">
                              Top Map Sidebar
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-half-map.html">Half Map - V1</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="find-jobs-half-map2.html">
                              Jobs List - 10
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="jobs-single.html">Jobs Single - V1</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="jobs-single2.html">Jobs Single - V2</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <a className="iteam-menu">Employers</a>
                        <ul className="sub-menu-mobile">
                          <li className="menu-item">
                            <a href="employers-list.html">
                              Employers List - V1
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers_grid.html">
                              Employers List - V2
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-list-sidebar.html">
                              Employers List - V3
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-grid-sidebar.html">
                              Employers List - V4
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-grid-fullwidth.html">
                              Employers List - V5
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-topmap.html">
                              Employers List - V6
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-half-map.html">
                              Employers List - V7
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-single.html">
                              Employers Single - V1
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-single2.html">
                              Employers Single - V2
                            </a>
                          </li>

                          <li className="menu-item">
                            <a href="employers-review.html">
                              Employers Reviews
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="employers-not-pound.html">
                              Employers Not Found
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="dashboard/employer-dashboard.html">
                              Employer Dashboard
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <a className="iteam-menu">Candidates</a>
                        <ul className="sub-menu-mobile">
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate.html">Candidates List - V1</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-grid.html">
                              Candidates List - V2
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-list-sidebar.html">
                              Candidates List - V3
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-top-map.html">
                              Candidates List - V4
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-half-map.html">
                              Candidates List - V5
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-no-available.html">
                              Candidate List - V6{" "}
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-no-available2.html">
                              Candidate List - V7
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-single.html">
                              Candidate Single - V1
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="candidate-single2.html">
                              Candidate Single - V2
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="sample-cv.html">Sample CV</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="sample-cv-sidebar.html">
                              Sample CV Sidebar
                            </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="cv-details.html">CV Details</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="dashboard/candidates-dashboard.html">
                              Candidates Dashboard
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <a className="iteam-menu">Blog</a>
                        <ul className="sub-menu-mobile">
                          <li className="menu-item menu-item-mobile">
                            <a href="blog.html">Blog List - V1 </a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="blog-grid.html">Blog List - V2</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="blog-masonry.html">Blog List - V3</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="blog-detail.html">Blog Single - V1</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="blog-detail-01.html">Blog Single - V2</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="blog-detail-side-bar.html">
                              Blog Single - V3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <a className="iteam-menu">Pages</a>
                        <ul className="sub-menu-mobile">
                          <li className="menu-item menu-item-mobile">
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="accordion-page.html">FAQS</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="term-of-use.html">Terms Of Use</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="shop.html">Shop List</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="shopping-cart.html">Shopping Cart</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="shop-details.html">Shop Single</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="login.html">Login</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="create-account.html">Create Account</a>
                          </li>
                          <li className="menu-item menu-item-mobile">
                            <a href="contact-us.html">Contact Us</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="categories">
                <div className="sub-categorie-mobile">
                  <ul className="pop-up">
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-1"></span>Design &
                        Creative
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">
                                Design & Creative
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Digital marketing
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">Development & IT</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">Music & Audio</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Finance & Accounting
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Programming & Tech
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                video & Animation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">Adobe Photoshop</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">adobe XD</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Android Developer</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Figma</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">CSS, Html</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">BA</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-8"></span>Digital
                        Marketing
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">
                                Digital marketing
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Design & Creative
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Finance & Accounting
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">Development & IT</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Programming & Tech
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">adobe XD</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Figma</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">BA</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-2"></span>Development &
                        IT
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">
                                Design & Creative
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">Development & IT</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">Music & Audio</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                video & Animation
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Finance & Accounting
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">adobe XD</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Android Developer</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Adobe Photoshop</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">CSS, Html</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">BA</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-3"></span>Music & Audio
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">
                                Digital marketing
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Design & Creative
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                video & Animation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">Android Developer</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Adobe Photoshop</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">adobe XD</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Figma</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">BA</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-4"></span>Finance &
                        Accounting
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">Development & IT</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Design & Creative
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Programming & Tech
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">Music & Audio</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Finance & Accounting
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                video & Animation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">adobe XD</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Figma</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-5"></span>Programming &
                        Tech
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">
                                Design & Creative
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Digital marketing
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">Music & Audio</a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Finance & Accounting
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Programming & Tech
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                video & Animation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">Adobe Photoshop</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">adobe XD</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">Figma</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">CSS, Html</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">BA</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-6"></span>Video &
                        Animation
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">
                                Design & Creative
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Digital marketing
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Programming & Tech
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                video & Animation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">Adobe Photoshop</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">CSS, Html</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">BA</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="categories-mobile">
                      <a href="#">
                        <span className="icon-categorie-7"></span>Writing &
                        translation
                      </a>
                      <div className="group-menu-category-mobile">
                        <div className="menu left">
                          <ul>
                            <li>
                              <a href="find-jobs-list.html">
                                Finance & Accounting
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                Programming & Tech
                              </a>
                            </li>
                            <li>
                              <a href="find-jobs-list.html">
                                video & Animation
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="menu right">
                          <ul>
                            <li>
                              <a href="jobs-single.html">Figma</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">CSS, Html</a>
                            </li>
                            <li>
                              <a href="jobs-single.html">BA</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header-customize-item button">
            <a href="dashboard/candidates-dashboard.html">Upload Resume</a>
          </div>

          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <a href="tel:0123456678">001-1234-88888</a>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin2"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-instagram1"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Header clname="home1active" handleMobile={handleMobile} />
      <Banner01 />

      <Category data={dataCate} />

      <Jobs data={dataJobs} />

      <BoxIcon />

      <Employer data={dataEm} />

      <Testimonials data={dataTestimonials} />

      <Partner data={dataPartner} />

      <Footer />

      <Gotop />
    </>
  );
}

export default Home_v1;
