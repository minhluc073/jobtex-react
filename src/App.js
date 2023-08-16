import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home_v1 from "./pages/Home_v1";
import Home_v2 from "./pages/Home_v2";
import Home_v3 from "./pages/Home_v3";
import Home_v4 from "./pages/Home_v4";
import Home_v5 from "./pages/Home_v5";
import Home_v6 from "./pages/Home_v6";
import Home_v7 from "./pages/Home_v7";
import Home_v8 from "./pages/Home_v8";
import Home_v9 from "./pages/Home_v9";
import Home_v10 from "./pages/Home_v10";
import Joblist_v1 from "./pages/Joblist_v1";
import Joblist_v2 from "./pages/Joblist_v2";
import Joblist_v3 from "./pages/Joblist_v3";
import Joblist_v4 from "./pages/Joblist_v4";
import Joblist_v5 from "./pages/Joblist_v5";
import Joblist_v6 from "./pages/Joblist_v6";
import Joblist_v7 from "./pages/Joblist_v7";
import Joblist_v8 from "./pages/Joblist_v8";
import Joblist_v9 from "./pages/Joblist_v9";
import Joblist_v10 from "./pages/Joblist_v10";

import Jobsingle_v1 from "./pages/Jobsingle_v1";
import Jobsingle_v2 from "./pages/Jobsingle_v2";
import Employer_v1 from "./pages/Employer_v1";
import Employer_v2 from "./pages/Employer_v2";
import Employer_v3 from "./pages/Employer_v3";
import Employer_v4 from "./pages/Employer_v4";
import Employer_v5 from "./pages/Employer_v5";
import Employer_v6 from "./pages/Employer_v6";
import Employer_v7 from "./pages/Employer_v7";
import Employersingle_v1 from "./pages/Employersingle_v1";
import Employersingle_v2 from "./pages/Employersingle_v2";
import EmployerReview from "./pages/EmployerReview";
import Employernotfound from "./pages/Employernotfound";
import Employerdashboard from "./pages/Employerdashboard";
import Candidates_v1 from "./pages/Candidates_v1";
import Candidates_v2 from "./pages/Candidates_v2";
import Candidates_v3 from "./pages/Candidates_v3";
import Candidates_v4 from "./pages/Candidates_v4";
import Candidates_v5 from "./pages/Candidates_v5";
import Candidates_v6 from "./pages/Candidates_v6";
import Candidates_v7 from "./pages/Candidates_v7";
import SampleCV from "./pages/SampleCV";
import SampleCVdetails from "./pages/SampleCVdetails";
import SampleCVslidebar from "./pages/SampleCVslidebar";
import Candidatesingle_v1 from "./pages/Candidatesingle_v1";
import Candidatesingle_v2 from "./pages/Candidatesingle_v2";
import Blog_v1 from "./pages/Blog_v1";
import Blog_v2 from "./pages/Blog_v2";
import Blog_v3 from "./pages/Blog_v3";
import Blogsingle_v1 from "./pages/Blogsingle_v1";
import Blogsingle_v2 from "./pages/Blogsingle_v2";
import Blogsingle_v3 from "./pages/Blogsingle_v3";
import Shop from "./pages/Shop";
import Shopsingle from "./pages/Shopsingle";
import Shoppingcart from "./pages/Shoppingcart";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import Termsofuse from "./pages/Termsofuse";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home_v1 /> },
    { path: "/home_v2", element: <Home_v2 /> },
    { path: "/home_v3", element: <Home_v3 /> },
    { path: "/home_v4", element: <Home_v4 /> },
    { path: "/home_v5", element: <Home_v5 /> },
    { path: "/home_v6", element: <Home_v6 /> },
    { path: "/home_v7", element: <Home_v7 /> },
    { path: "/home_v8", element: <Home_v8 /> },
    { path: "/home_v9", element: <Home_v9 /> },
    { path: "/home_v10", element: <Home_v10 /> },
    { path: "/joblist_v1", element: <Joblist_v1 /> },
    { path: "/job-grid", element: <Joblist_v2 /> },
    { path: "/job-list-sidebar", element: <Joblist_v3 /> },
    { path: "/job-grid-sidebar", element: <Joblist_v4 /> },
    { path: "/joblist_v5", element: <Joblist_v5 /> },
    { path: "/joblist_v6", element: <Joblist_v6 /> },
    { path: "/joblist_v7", element: <Joblist_v7 /> },
    { path: "/joblist_v8", element: <Joblist_v8 /> },
    { path: "/joblist_v9", element: <Joblist_v9 /> },
    { path: "/joblist_v10", element: <Joblist_v10 /> },
    { path: "/jobsingle_v1", element: <Jobsingle_v1 /> },
    { path: "/jobsingle_v2", element: <Jobsingle_v2 /> },
    { path: "/employers_v1", element: <Employer_v1 /> },
    { path: "/employers_v2", element: <Employer_v2 /> },
    { path: "/employers_v3", element: <Employer_v3 /> },
    { path: "/employers_v4", element: <Employer_v4 /> },
    { path: "/employers_v5", element: <Employer_v5 /> },
    { path: "/employers_v6", element: <Employer_v6 /> },
    { path: "/employers_v7", element: <Employer_v7 /> },
    { path: "/employersingle_v1", element: <Employersingle_v1 /> },
    { path: "/employersingle_v2", element: <Employersingle_v2 /> },
    { path: "/employerreview", element: <EmployerReview /> },
    { path: "/employernotfound", element: <Employernotfound /> },
    { path: "/employerdashboard", element: <Employerdashboard /> },
    { path: "/candidates_v1", element: <Candidates_v1 /> },
    { path: "/candidates_v2", element: <Candidates_v2 /> },
    { path: "/candidates_v3", element: <Candidates_v3 /> },
    { path: "/candidates_v4", element: <Candidates_v4 /> },
    { path: "/candidates_v5", element: <Candidates_v5 /> },
    { path: "/candidates_v6", element: <Candidates_v6 /> },
    { path: "/candidates_v7", element: <Candidates_v7 /> },
    { path: "/samplecv", element: <SampleCV /> },
    { path: "/samplecvdetails", element: <SampleCVdetails /> },
    { path: "/samplecvslidebar", element: <SampleCVslidebar /> },
    { path: "/candidatesingle_v1", element: <Candidatesingle_v1 /> },
    { path: "/candidatesingle_v2", element: <Candidatesingle_v2 /> },
    { path: "/blog_v1", element: <Blog_v1 /> },
    { path: "/blog_v2", element: <Blog_v2 /> },
    { path: "/blog_v3", element: <Blog_v3 /> },
    { path: "/blogsingle_v1", element: <Blogsingle_v1 /> },
    { path: "/blogsingle_v2", element: <Blogsingle_v2 /> },
    { path: "/blogsingle_v3", element: <Blogsingle_v3 /> },
    { path: "/shop", element: <Shop /> },
    { path: "/shopsingle", element: <Shopsingle /> },
    { path: "/shoppingcart", element: <Shoppingcart /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/faqs", element: <Faqs /> },
    { path: "/termsofuse", element: <Termsofuse /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/login", element: <Login /> },
    { path: "/createaccount", element: <CreateAccount /> },
    { path: "/contactus", element: <ContactUs /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <div className="wd-popup-form">
        <div className="modal-menu__backdrop"></div>
        <div className="content">
          <div className="content-left">
            <div className="thumb">
              <img src="images/review/bg-popup.jpg" alt="images" />
            </div>
          </div>
          <div className="content-right">
            <a className="title-button-group">
              <i className="icon-close"></i>
            </a>
            <h6>Welcome to jobitex</h6>
            <p>
              Sign up to get all the latest Jobitex news, website updates,
              offers and promos.
            </p>
            <form action="get">
              <input type="text" placeholder="Email" />
              <div className="group-radio">
                <input type="radio" />
                <label>Prevent this Pop- up</label>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      {/* <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop"></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <a href="index.html">
                <img className="site-logo" src="images/logo.png" alt="Image" />
              </a>
            </div>
            <a className="title-button-group">
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
                        <a className="iteam-menu">Home</a>
                        <ul className="sub-menu-mobile">
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
      </div> */}

      <App />
    </Router>
  );
};

export default AppWrapper;
