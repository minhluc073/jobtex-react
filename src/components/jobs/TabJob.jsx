import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

TabJob.propTypes = {};

function TabJob(props) {
  const { data } = props;

  return (
    <section className="tab-section">
      <div className="tf-container">
        <Tabs className="row tf-tab">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="group-job-sidebar">
              <TabList className="list-job menu-tab">
                {data.map((idx) => (
                  <Tab key={idx.id} className="features-job mg-bt-0 ct-tab">
                    <div className="job-archive-header">
                      <div className="inner-box">
                        <div className="logo-company">
                          <img src={idx.img} alt="Jobtex" />
                        </div>
                        <div className="box-content">
                          <h4>
                            <Link to="jobs-single.html">{idx.cate}</Link>
                          </h4>
                          <h3>
                            <Link to="jobs-single.html">{idx.title}</Link>
                            <span className="icon-bolt"></span>
                          </h3>
                          <ul>
                            <li>
                              <span className="icon-map-pin"></span>
                              {idx.map}
                            </li>
                            <li>
                              <span className="icon-calendar"></span>
                              {idx.time}
                            </li>
                          </ul>
                          <span className="icon-heart"></span>
                        </div>
                      </div>
                    </div>
                    <div className="job-archive-footer">
                      <div className="job-footer-left">
                        <ul className="job-tag">
                          <li>
                            <Link to="#">Contract</Link>{" "}
                          </li>
                          <li>
                            <Link to="#">Remote</Link>{" "}
                          </li>
                        </ul>
                        <div className="star">
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                        </div>
                      </div>
                      <div className="job-footer-right">
                        <div className="price">
                          <span className="icon-dolar1"></span>
                          <p>
                            {idx.price} <span className="year">/year</span>
                          </p>
                        </div>
                        <p className="days">{idx.apply}</p>
                      </div>
                    </div>
                  </Tab>
                ))}

                <Link to="#" className="btn-load">
                  Load more Job Results (3719)
                </Link>
              </TabList>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12">
            {data.map((idx) => (
              <TabPanel className="content-tab sticky-home2 po-sticky add-mgt">
                <article className={`job-article ${idx.stt}`}>
                  <div className="top-content">
                    <div className="features-job style-2 stc-apply">
                      <div className="job-archive-header">
                        <div className="inner-box">
                          <div className="logo-company">
                            <img src={idx.img} alt="Jobtex" />
                          </div>
                          <div className="box-content">
                            <h4>
                              <Link to="jobs-single.html">
                                Rockstar Games New York
                              </Link>
                            </h4>
                            <h3>
                              <Link to="jobs-single.html">
                                Senior UI/UX Designer
                              </Link>
                              <span className="icon-bolt"></span>
                            </h3>
                            <ul>
                              <li>
                                <span className="icon-map-pin"></span>
                                Las Vegas, NV 89107, USA
                              </li>
                              <li>
                                <span className="icon-calendar"></span>2 days
                                ago
                              </li>
                            </ul>
                            <div className="button-readmore">
                              <span className="icon-heart"></span>
                              <a className="btn-apply btn-popup">
                                <span className="icon-send"></span>
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-archive-footer">
                        <div className="job-footer-left">
                          <ul className="job-tag">
                            <li>
                              <Link to="#">Full-time</Link>
                            </li>
                            <li>
                              <Link to="#"> Remote</Link>
                            </li>
                          </ul>
                          <div className="star">
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                            <span className="icon-star-full"></span>
                          </div>
                        </div>
                        <div className="job-footer-right">
                          <div className="price">
                            <span className="icon-dollar"></span>
                            <p>
                              $83,000 - $110,000{" "}
                              <span className="year">/year</span>
                            </p>
                          </div>
                          <p className="days">32 days left to apply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-content">
                    <h5>Full Job Description</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                    <p className="mg-19">
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
                    <h6>The Work You'll Do:</h6>
                    <ul className="list-dot">
                      <li>
                        Support the Creative Directors and Associate Creative
                        Directors of experience design to concept and oversee
                        the production of bold, innovative, award-winning
                        campaigns and digital experiences.
                      </li>
                      <li>
                        Make strategic and tactical UX decisions related to
                        design and usability as well as features and functions.
                      </li>
                      <li>
                        Creates low- and high-fidelity wireframes that represent
                        a user's journey.
                      </li>
                      <li>
                        Effectively pitch wireframes to and solutions to
                        stakeholders. You'll be the greatest advocate for our
                        work, but you'll also listen and internalize feedback so
                        that we can come back with creative that exceeds
                        expectations.
                      </li>
                    </ul>
                    <h6>What you'll bring:</h6>
                    <ul className="list-dot mg-bt-15">
                      <li>
                        Passion for Human-Centered Design-a drive to make
                        interactive technology better for people.
                      </li>
                      <li>Thorough knowledge of UX/UI best practices.</li>
                      <li>
                        Understanding of brand identity and working within a
                        defined design system as well as contributing to it.
                      </li>
                      <li>
                        A mastery of craft. You dream about color, typography,
                        and interaction design every day. You are proficient
                        using tools like Figma and Adobe XD. You can efficiently
                        use your skill set to develop new designs within
                        existing and new visual systems and design languages.
                      </li>
                      <li>
                        A portfolio which highlights strong understanding of UX
                        design including but not limited to: user flows, IA, and
                        translating customer research, analytics, and insights
                        into wireframes and high-fidelity designs.
                      </li>
                      <li>
                        Possess problem-solving skills, an investigative
                        mentality, and a proactive nature-committed to
                        delivering solutions.
                      </li>
                      <li>Possess problem-solving skills</li>
                    </ul>
                    <h6>Qualifications:</h6>
                    <ul className="list-dot mg-bt-15">
                      <li>
                        Bachelor's degree preferred, or equivalent experience.
                      </li>
                      <li>
                        At least 5-8 years of experience with UX and UI design.
                      </li>
                      <li>
                        2 years of experience with design thinking or similar
                        framework that focuses on defining users' needs early.
                      </li>
                      <li>
                        Strong portfolio showing expert concept, layout, and
                        typographic skills, as well as creativity and ability to
                        adhere to brand standards.
                      </li>
                      <li>
                        Expertise in Figma, Adobe Creative Cloud suite,
                        Microsoft suite.
                      </li>
                      <li>
                        Ability to collaborate well with cross-disciplinary
                        agency team and stakeholders at all levels.
                      </li>
                      <li>
                        Forever learning: Relentless desire to learn and
                        leverage the latest web technologies.
                      </li>
                      <li>
                        Detail-oriented: You must be highly organized, be able
                        to multi-task, and meet tight deadlines.
                      </li>
                      <li>
                        Independence: The ability to make things happen with
                        limited direction. Excellent proactive attitude,
                        take-charge personality, and "can-do" demeanor.
                      </li>
                      <li>
                        Proficiency with Front-End UI technologies a bonus but
                        not necessary (such as HTML, CSS, JavaScript).
                      </li>
                    </ul>
                  </div>
                </article>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default TabJob;
