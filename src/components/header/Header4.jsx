import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import logo from "../../assets/images/logo.png";
import avt from "../../assets/images/user/avatar/image-01.jpg";
import { Link, NavLink } from "react-router-dom";

Header4.propTypes = {};

function Header4({ clname = "", handleMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header" className="header header-default">
      <div className="tf-container ct2">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src={logo}
                      alt="Image"
                    />
                  </Link>
                </div>
                <div className="categories">
                  <Link to="#">
                    <span className="icon-grid"></span>Categories
                  </Link>
                  <div className="sub-categorie">
                    <ul className="pop-up">
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-1"></span>Design &
                          Creative
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">
                                  Android Developer
                                </Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-8"></span>Digital
                          Marketing
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-2"></span>Development
                          & IT
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">
                                  Android Developer
                                </Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-3"></span>Music &
                          Audio
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">
                                  Android Developer
                                </Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-4"></span>Finance &
                          Accounting
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Development & IT</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-5"></span>Programming
                          & Tech
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Music & Audio</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">adobe XD</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-6"></span>Video &
                          Animation
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">Design & Creative</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Digital marketing</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Adobe Photoshop</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="icon-categorie-7"></span>Writing &
                          translation
                        </Link>
                        <div className="group-menu-category">
                          <div className="menu left">
                            <h6>Top Categories</h6>
                            <ul>
                              <li>
                                <Link to="/joblist_v1">
                                  Finance & Accounting
                                </Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">Programming & Tech</Link>
                              </li>
                              <li>
                                <Link to="/joblist_v1">video & Animation</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menu right">
                            <h6>Top Skills</h6>
                            <ul>
                              <li>
                                <Link to="/jobsingle_v1">Figma</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">CSS, Html</Link>
                              </li>
                              <li>
                                <Link to="/jobsingle_v1">BA</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header-ct-center">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className={`menu ${clname}`}>
                      <li className="menu-item menu-item-has-children sub1">
                        <Link to="#">Home </Link>
                        <div className="menu-bar">
                          <ul className="sub-menu-bar">
                            <li className="menu-item">
                              <NavLink to="/">Home Page 01 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v2">Home Page 02 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v3">Home Page 03 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v4">Home Page 04 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v5">Home Page 05 </NavLink>
                            </li>
                          </ul>

                          <ul className="sub-menu-bar">
                            <li className="menu-item">
                              <NavLink to="/home_v6">Home Page 06 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v7">Home Page 07 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v8">Home Page 08 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v9">Home Page 09 </NavLink>
                            </li>
                            <li className="menu-item">
                              <NavLink to="/home_v10">Home Page 10 </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children sub2">
                        <Link to="#">Find jobs </Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Jobs Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item subitem1">
                                <NavLink to="/joblist_v1">List Layout</NavLink>
                              </li>
                              <li className="nav-menu-item subitem2">
                                <NavLink to="/job-grid">Grid Layout</NavLink>
                              </li>
                              <li className="nav-menu-item subitem3">
                                <NavLink to="/job-list-sidebar">
                                  List Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item subitem4">
                                <NavLink to="/job-grid-sidebar">
                                  Grid Sidebar
                                </NavLink>
                              </li>

                              <li className="nav-menu-item subitem5">
                                <NavLink to="/joblist_v5">
                                  List Sidebar Fullwidth
                                </NavLink>
                              </li>
                              <li className="nav-menu-item subitem6">
                                <NavLink to="/joblist_v6">
                                  Grid Sidebar Fullwidth
                                </NavLink>
                              </li>
                              <li className="nav-menu-item subitem7">
                                <NavLink to="/joblist_v7">Top Map</NavLink>
                              </li>
                              <li className="nav-menu-item subitem8">
                                <NavLink to="/joblist_v8">
                                  Top Map Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item subitem9">
                                <NavLink to="/joblist_v9">
                                  Half Map - V1
                                </NavLink>
                              </li>
                              <li className="nav-menu-item subitem10">
                                <NavLink to="/joblist_v10">
                                  Half Map - V2
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <NavLink to="/jobsingle_v1">
                              Jobs Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav3">
                            <NavLink to="/jobsingle_v2">
                              Jobs Single - V2
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item menu-item-has-children sub3">
                        <Link to="#">Employers</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Employers Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v1">
                                  List Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v3">
                                  List Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v4">
                                  Grid Sidebar
                                </NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/employers_v5">Full width</NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/employers_v6">Top Map</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/employers_v7">Half Map</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <NavLink to="/employersingle_v1">
                              Employers Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav3">
                            <NavLink to="/employersingle_v2">
                              Employers Single - V2
                            </NavLink>
                          </li>

                          <li className="nav-sub subnav4">
                            <NavLink to="/employerreview">
                              Employers Reviews
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav5">
                            <NavLink to="/employernotfound">
                              Employers Not Found
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children sub4">
                        <Link to="#">Candidates</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Candidates Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v1">
                                  List Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v2">
                                  Grid Layout
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v3">
                                  List Sidebar
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v4">Top Map</NavLink>
                              </li>

                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v5">Half Map</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v6">
                                  No Available - V1
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/candidates_v7">
                                  No Available - V2
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <Link to="#">
                              Sample CV
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <NavLink to="/samplecv">Sample CV</NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvdetails">
                                  CV Details
                                </NavLink>
                              </li>
                              <li className="nav-menu-item">
                                <NavLink to="/samplecvslidebar">
                                  Sample CV Sidebar
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav3">
                            <NavLink to="/candidatesingle_v1">
                              Candidate Single - V1
                            </NavLink>
                          </li>
                          <li className="nav-sub subnav4">
                            <NavLink to="/candidatesingle_v2">
                              Candidate Single - V2
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children sub5">
                        <Link to="#">Blog</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub subnav1">
                            <Link to="#">
                              Blog Listing
                              <span className="icon-keyboard_arrow_right"></span>
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item subitem1">
                                <Link to="/blog_v1">Blog List </Link>
                              </li>
                              <li className="nav-menu-item subitem2">
                                <Link to="/blog_v2">Blog Grid</Link>
                              </li>
                              <li className="nav-menu-item subitem3">
                                <Link to="/blog_v3">Blog Masonry</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub subnav2">
                            <Link to="#">
                              Blog Details
                              <span className="icon-keyboard_arrow_right"></span>{" "}
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <Link to="/blogsingle_v1">
                                  Blog Details - V1
                                </Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/blogsingle_v2">
                                  Blog Details - V2
                                </Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/blogsingle_v3">
                                  Blog Details Sidebar
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children sub6">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu st1">
                          <li className="nav-sub">
                            <Link to="#">
                              Shop
                              <span className="icon-keyboard_arrow_right"></span>{" "}
                            </Link>
                            <ul className="nav-sub-menu">
                              <li className="nav-menu-item">
                                <Link to="/shop">Shop List</Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/shopsingle">Shop Single</Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/shoppingcart">Shopping Cart</Link>
                              </li>
                              <li className="nav-menu-item">
                                <Link to="/checkout">Checkout</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-sub">
                            <Link to="/aboutus">About Us</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/faqs">FAQS</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/termsofuse">Terms Of Use</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/login">Login</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/createaccount">Create Account</Link>
                          </li>
                          <li className="nav-sub">
                            <Link to="/contactus">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-ct-right">
                <div className="header-customize-item help">
                  <Link to="/termsofuse">
                    <span className="icon-help-circle"></span>
                  </Link>
                </div>
                <div className="header-customize-item bell">
                  <span className="icon-bell"></span>
                  <div className="sub-notification">
                    <div className="sub-notification-heading">
                      <div className="sub-notification-title">Notification</div>
                      <span>5 New</span>
                    </div>
                    <div className="sub-notification-content">
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">Last day</div>
                        <div className="content">
                          Your submit job{" "}
                          <span className="name">Graphic Design</span> is
                          <span className="status">Success</span>
                        </div>
                      </div>
                      <div className="sub-notification-item icon-plus">
                        <div className="time">5 Day ago</div>
                        <div className="content">
                          A new application is submitted on your job
                          <span className="name">Graphic Design</span> by
                          <span className="name">Maverick Nguyen</span>
                        </div>
                      </div>
                    </div>
                    <div className="sub-notification-button">
                      <Link to="#">Read All</Link>
                    </div>
                  </div>
                </div>
                <div className="header-customize-item account">
                  <img src={avt} alt="" />
                  <div className="name">
                    Candidates<span className="icon-keyboard_arrow_down"></span>
                  </div>
                  <div className="sub-account">
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-dashboard.html">
                        <span className="icon-dashboard"></span>Dashboard
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-profile-setting.html">
                        <span className="icon-profile"></span> Profile
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-resumes.html">
                        <span className="icon-resumes"></span> Resumes
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-my-applied.html">
                        <span className="icon-my-apply"></span> My Applied
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-save-jobs.html">
                        <span className="icon-work"></span> Saved Jobs
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-alerts-jobs.html">
                        <span className="icon-bell1"></span> Candidate Alerts
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-messages.html">
                        <span className="icon-chat"></span> Messages
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-following-employers.html">
                        <span className="icon-following"></span>
                        Following Employers
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-meetings.html">
                        <span className="icon-meeting"></span> Meeting
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-change-passwords.html">
                        <span className="icon-change-passwords"></span>
                        Change Passwords
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="dashboard/candidates-delete-profile.html">
                        <span className="icon-trash"></span> Delete Profile
                      </Link>
                    </div>
                    <div className="sub-account-item">
                      <Link to="#">
                        <span className="icon-log-out"></span> Log Out
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="header-customize-item button">
                  <Link to="dashboard/candidates-dashboard.html">
                    Upload Resume
                  </Link>
                </div>
              </div>
              <div className="nav-filter" onClick={handleMobile}>
                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header4;