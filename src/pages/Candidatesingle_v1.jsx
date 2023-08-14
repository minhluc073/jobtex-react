import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

Candidatesingle_v1.propTypes = {};

function Candidatesingle_v1(props) {
  return (
    <div>
      <Header2 />

      <section className="wrapper-author-page-title style2 stc form-sticky fixed-space">
        <div className="tf-container">
          <div className="wd-author-page-title">
            <div className="author-archive-header">
              <img
                src={require("../assets/images/user/avatar/avt-author-1.jpg")}
                alt="jobtex"
                className="logo-company"
              />
              <div className="content">
                <Link to="#" className="tag-head">
                  Available now
                </Link>
                <h4>
                  <Link to="#">Computer Systems Analyst</Link>
                </h4>
                <h3>
                  <Link to="#">Maverick Nguyen</Link>
                  <span className="icon-bolt"></span>
                </h3>
                <ul className="author-list">
                  <li className="tag"> Blender </li>
                  <li className="tag"> Sketch </li>
                  <li className="tag"> Adobe XD </li>
                  <li className="tag"> Figma </li>
                  <li className="map">
                    <span className="icon-map-pin"></span>&nbsp; Tokyo, Japan
                  </li>
                  <li className="price">
                    <span className="icon-dolar1"></span>&nbsp; $300/day
                  </li>
                </ul>
              </div>
            </div>
            <div className="author-archive-footer">
              <button className="tf-btn btn-popup">DownLoad CV</button>
              <button className="tf-btn btn-author">Message</button>
            </div>
          </div>
        </div>
      </section>

      <section className="candidates-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <Tabs className="job-article stc tf-tab single-job">
                <TabList className="menu-tab stc">
                  <Tab className="ct-tab">Resumes</Tab>
                  <Tab className="ct-tab">Portfolio</Tab>
                  <Tab className="ct-tab">Contact</Tab>
                </TabList>
                <div className="content-tab">
                  <TabPanel className="inner-content animation-tab">
                    <h5>About me</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                    <p className="mg-39">
                      Deloitte's Green Dot Agency is looking to add a Lead User
                      Experience Designer to our experience design team. We want
                      a passionate creative who's inspired by new trends and
                      emerging technologies, and is able to integrate them into
                      memorable user experiences. A problem solver who is
                      entrepreneurial, collaborative, hungry, and humble; can
                      deliver beautifully designed, leading-edge experiences
                      under tight deadlines; and who has demonstrated proven
                      expertise.
                    </p>
                    <h5>Education</h5>
                    <div className="group-infor">
                      <div className="inner">
                        <div className="sub-heading">
                          FPT University <span>2019 - 2021</span>
                        </div>
                        <div className="heading">Graphic Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="sub-heading">
                          TB Course <span>2019 - 2021</span>
                        </div>
                        <div className="heading">UX Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </div>

                    <h5>Experience</h5>
                    <div className="group-infor">
                      <div className="inner">
                        <div className="sub-heading">
                          FPT University <span>2019 - 2021</span>
                        </div>
                        <div className="heading">Graphic Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="sub-heading">
                          TB Course <span>2019 - 2021</span>
                        </div>
                        <div className="heading">UX Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </div>

                    <div className="group-skill group-col-2">
                      <div className="inner cl2">
                        <h5>management skills</h5>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">HTML & cSS</div>
                              <div className="donat-bg" data-percent="60%">
                                <div className="custom-donat"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">word</div>
                              <div className="donat-bg" data-percent="90%">
                                <div className="custom-donat"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Excel</div>
                              <div className="donat-bg" data-percent="90%">
                                <div className="custom-donat"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inner cl2">
                        <h5>Design</h5>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Figma</div>
                              <div className="donat-bg" data-percent="80%">
                                <div className="custom-donat"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Photoshop</div>
                              <div className="donat-bg" data-percent="70%">
                                <div className="custom-donat"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">
                                Ilustration
                              </div>
                              <div className="donat-bg" data-percent="90%">
                                <div className="custom-donat"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5>Portfolio</h5>
                    <div className="video-thumb">
                      <div className="content-tab2">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={require("../assets/images/review/thumbv3.jpg")}
                              alt="images"
                            />
                            <Link
                              to="https://www.youtube.com/watch?v=MLpWrANjFbI"
                              className="lightbox-image"
                            >
                              <svg
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M27.5795 50.5623C40.2726 50.5623 50.5624 40.2725 50.5624 27.5794C50.5624 14.8863 40.2726 4.59656 27.5795 4.59656C14.8865 4.59656 4.59668 14.8863 4.59668 27.5794C4.59668 40.2725 14.8865 50.5623 27.5795 50.5623Z"
                                  fill="#EB4D4D"
                                ></path>
                                <path
                                  d="M20.9141 27.5794V24.1779C20.9141 19.7882 24.0167 18.0185 27.8089 20.2019L30.7507 21.9026L33.6925 23.6034C37.4847 25.7867 37.4847 29.3721 33.6925 31.5554L30.7507 33.2562L27.8089 34.9569C24.0167 37.1403 20.9141 35.3476 20.9141 30.9809V27.5794Z"
                                  fill="white"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <ul className="thumb-menu menu-tab2">
                        <li className="ct-tab2">
                          {" "}
                          <a
                            className="lightbox-gallery"
                            href="images/review/thumbv4.jpg"
                          >
                            <img
                              src={require("../assets/images/review/thumbv4.jpg")}
                              alt="images"
                            />
                          </a>{" "}
                        </li>
                        <li className="ct-tab2">
                          {" "}
                          <a
                            className="lightbox-gallery"
                            href="images/review/thumbv1.jpg"
                          >
                            <img
                              src={require("../assets/images/review/thumbv1.jpg")}
                              alt="images"
                            />
                          </a>
                        </li>
                        <li className="ct-tab2">
                          <a
                            className="lightbox-gallery"
                            href="images/review/thumbv2.jpg"
                          >
                            <img
                              src={require("../assets/images/review/thumbv2.jpg")}
                              alt="images"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="form-candidate">
                      <h5>Contact Candidate</h5>
                      <form method="post">
                        <div className="group-input">
                          <div className="ip">
                            <label>Subject</label>
                            <input type="text" placeholder="Subject" />
                          </div>
                          <div className="ip">
                            <label>Name</label>
                            <input
                              type="text"
                              placeholder="Name"
                              value="Tony Nguyen |"
                            />
                          </div>
                        </div>
                        <div className="ip out">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder="Email"
                            value="jobtex@mail.com"
                          />
                        </div>
                        <div className="ip out">
                          <label>Message</label>
                          <textarea placeholder="Message..."></textarea>
                        </div>
                        <button>Send Private Message</button>
                      </form>
                    </div>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>About me</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>About Company</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart.
                    </p>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
            <div className="col-lg-4">
              <div className="cv-form-details stc po-sticky job-sg">
                <ul className="list-infor">
                  <li>
                    <div className="category">Career Finding</div>
                    <div className="detail">UI UX Designer</div>
                  </li>
                  <li>
                    <div className="category">Location</div>
                    <div className="detail">Hanoi City, VietNam</div>
                  </li>
                  <li>
                    <div className="category">Phone Number</div>
                    <div className="detail">123 456 7890 </div>
                  </li>
                  <li>
                    <div className="category">Email</div>
                    <div className="detail">hi.avitex@gmail.com</div>
                  </li>
                  <li>
                    <div className="category">Offered Salary</div>
                    <div className="detail">$2500/Month</div>
                  </li>
                  <li>
                    <div className="category">Experience time</div>
                    <div className="detail">5 Years</div>
                  </li>
                  <li>
                    <div className="category">Language</div>
                    <div className="detail">English, Vietnamese </div>
                  </li>
                  <li>
                    <div className="category">Age</div>
                    <div className="detail">26 Years Old</div>
                  </li>
                  <li>
                    <div className="category">Qualification</div>
                    <div className="detail">Master Degree</div>
                  </li>
                </ul>

                <div className="wd-social d-flex aln-center">
                  <span>Socials:</span>
                  <ul className="list-social d-flex aln-center">
                    <li>
                      <Link to="#">
                        <i className="icon-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-linkedin2"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-instagram1"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="preview-cv mgt-32">
                  <div className="title">Samle_cv_jobitex</div>
                  <div className="category">PDF</div>
                  <div className="icon icon-file-pdf"></div>
                </div>
                <a className="btn-dowload">
                  <i className="icon-download"></i> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Candidatesingle_v1;
