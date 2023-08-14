import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import SortBuy from "../components/dropdown/SortBuy";
import RangeOne from "../components/range-slider";
import RangeTwo from "../components/range-slider/RangleTwo";
import SelectLocation from "../components/dropdown";
import Dropdown from "react-dropdown";
import Gotop from "../components/gotop";

const select1 = [
  { value: "s1", label: "Design & Creative " },
  { value: "s2", label: "Design" },
  { value: "s3  ", label: "Ux/Ui" },
];

const select2 = [
  { value: "s1", label: "1-5 employers" },
  { value: "s2", label: "Website" },
];

Employernotfound.propTypes = {};

function Employernotfound(props) {
  return (
    <div>
      <Header2 />
      <Breadcrumb title="Employers" />
      <section className="inner-employer-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="group-4-8">
                <div className="cl4">
                  <div className="widget-filter st2  style-scroll">
                    <form action="GET">
                      <div className="group-form">
                        <label className="title">Search Company</label>
                        <div className="group-input search-ip">
                          <button>
                            <i className="icon-search"></i>
                          </button>
                          <input
                            type="text"
                            placeholder="Keywork"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="group-form">
                        <label className="title">Location</label>
                        <div className="group-input has-icon">
                          <i className="icon-map-pin"></i>
                          <SelectLocation />
                        </div>
                      </div>
                      <RangeTwo title="Estimate Salary:" />
                      <div className="group-form">
                        <label className="title">Job Title</label>
                        <div className="group-input">
                          <Dropdown
                            options={select1}
                            className="react-dropdown select2"
                            value={select1[0]}
                          />
                        </div>
                      </div>
                      <RangeOne miles="Miles" title="Radius:" />

                      <div className="group-form">
                        <label className="title">Company Size</label>
                        <div className="group-input">
                          <Dropdown
                            options={select2}
                            className="react-dropdown select2"
                            value={select2[0]}
                          />
                        </div>
                      </div>
                      <button type="submit">Find Jobs</button>
                    </form>
                  </div>
                </div>
                <div className="cl8 tf-tab padding">
                  <div className="wd-meta-select-job">
                    <div className="wd-findjob-filer mb8">
                      <div className="group-select-display left">
                        <p className="nofi-job"> Showing all 0 result</p>
                      </div>
                      <SortBuy />
                    </div>
                    <button className="btn btn-submit" type="submit">
                      Reset Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </div>
  );
}

export default Employernotfound;
