import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

Banner04.propTypes = {};

function Banner04(props) {
  const percentage = 60;

  return (
    <section className="tf-slider sl3 over-flow-hidden">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="content wow fadeInUp">
              <div className="heading">
                <h2 className="text-white">Find the job that fits your life</h2>
                <p className="text-white">
                  Resume-Library is a true performance-based job board. Enjoy
                  custom hiring products and access to up to 10,000 new resume
                  registrations daily, with no subscriptions or user licences.
                </p>
              </div>
              <div className="form-sl">
                <form method="post">
                  <div className="row-group-search home1 st">
                    <div className="form-group-1">
                      <span className="icon-search search-job"></span>
                      <input
                        type="text"
                        className="input-filter-search"
                        placeholder="Job title, key words or company"
                      />
                    </div>
                    <div className="form-group-2">
                      <span className="icon-map-pin"></span>
                      <select id="select-location" className="select-location">
                        <option value="">All Location</option>
                        <option value="">Japan</option>
                        <option value="">Canada</option>
                        <option value="">England</option>
                        <option value="">Mexico</option>
                      </select>
                    </div>
                    <div className="form-group-4">
                      <button type="submit" className="btn btn-find">
                        Find Jobs
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <ul className="list-category text-white">
                <li>
                  <Link to="#">Designer</Link>
                </li>
                <li className="current">
                  <Link to="#">Developer</Link>
                </li>
                <li>
                  <Link to="#">Tester</Link>
                </li>
                <li>
                  <Link to="#">Writing</Link>
                </li>
                <li>
                  <Link to="#">Project Manager</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wd-review-job thumb2 widget-counter tf-sl3">
              <div className="thumb">
                <div className="box1">
                  <img
                    src={require("../../assets/images/review/thumb5.png")}
                    alt="images"
                  />
                  <div className="markk ani3">
                    <img
                      src={require("../../assets/images/review/shape3.png")}
                      alt="images"
                    />
                  </div>
                </div>
                <div className="box2">
                  <img
                    src={require("../../assets/images/review/thumb6.png")}
                    alt="images"
                  />
                  <div className="markk ani3">
                    <img
                      src={require("../../assets/images/review/shape4.png")}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
              <div className="tes-box ani5">
                <div className="client-box">
                  <div className="avt">
                    <img
                      src={require("../../assets/images/review/client.jpg")}
                      alt="images"
                    />
                    <div className="badge"></div>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">1M+ recruiters</h6>
                    <div className="des">Happpy Candidates</div>
                  </div>
                </div>
              </div>
              <div className="icon1 ani3">
                <img
                  src={require("../../assets/images/review/icon2.png")}
                  alt="images"
                />
              </div>
              <div className="icon2 ani4">
                <img
                  src={require("../../assets/images/review/icon3.png")}
                  alt="images"
                />
              </div>
              <div className="icon3 ani6">
                <img
                  src={require("../../assets/images/review/icon11.png")}
                  alt="images"
                />
              </div>

              <div className="chart-box counter">
                <h6>Candidates</h6>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? 60 : 0;
                    return (
                      <CircularProgressbarWithChildren
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={10}
                      >
                        <div className="text-progress">success</div>
                      </CircularProgressbarWithChildren>
                    );
                  }}
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner04;
