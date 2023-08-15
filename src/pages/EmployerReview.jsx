import React, { useState } from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Rating } from "react-simple-star-rating";

EmployerReview.propTypes = {};

function EmployerReview(props) {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      <Header2 />

      <section>
        <div className="wrap-form-rating-page">
          <div className="wd-form-rating-page">
            <form method="POST">
              <div className="form-title">
                <h1>Please help answer these questions about your employer</h1>
                <h4>
                  Your honest responses help other job seekers and it’s
                  anonymous
                </h4>
              </div>
              <div className="form-company">
                <img
                  src={require("../assets/images/logo-company/cty11.png")}
                  alt="jobtex"
                  className="logo-company"
                />
                <div className="inner-company-right">
                  <h3>What is the company name?</h3>
                  <input type="text" placeholder="Innotek Company" />
                </div>
              </div>
              <div className="form-rating">
                <h3>
                  Please rate your overall interview experience at the company
                </h3>
                <div>
                  <Rating initialValue={3} onClick={handleRating} />
                </div>
              </div>
              <div className="form-notes">
                <h3>
                  What is the best or worst thing about tyhe benefits package at
                  this company?
                </h3>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Tell us abou thing like company perks, health insurance, 401k, vacation, and time off"
                ></textarea>
              </div>
              <button className="tf-btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </div>
  );
}

export default EmployerReview;
