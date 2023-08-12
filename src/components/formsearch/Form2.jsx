import React from "react";
import PropTypes from "prop-types";
import SelectLocation from "../dropdown";

const options = [
  { value: "op1", label: "Job Title" },
  { value: "op2", label: "Design & Creative" },
  { value: "op3", label: "Design" },
  { value: "op4", label: "Ux/Ui" },
];

const options2 = [
  { value: "op1", label: "Any Distance" },
  { value: "op2", label: "Any Distance 1" },
  { value: "op3", label: "Any Distance 2" },
];
const options3 = [
  { value: "op1", label: "Company Size" },
  { value: "op2", label: "Company Size 1" },
  { value: "op3", label: "Company Size 2" },
];

Form2.propTypes = {};

function Form2(props) {
  return (
    <section className="form-sticky stc2">
      <div className="tf-container">
        <div className="job-search-form st1 employers-form">
          <form method="post">
            <div className="row-group-search inner-form">
              <div className="form-group-1 form-style-1">
                <input
                  type="text"
                  className="input-filter-search"
                  placeholder="key words"
                />
                <span className="icon-search search-job"></span>
              </div>
              <div className="form-group-2 form-style-1">
                <span className="icon-map-pin"></span>
                <SelectLocation />
                {/* <div className="nice-select select-location" tabIndex="0">
                            <span className="current">All Location</span>
                            <ul className="list">
                            <li data-value="" className="option selected focus">All Location</li>
                            <li data-value="" className="option">Singapore</li>
                            <li data-value="" className="option">Japan</li>
                            <li data-value="" className="option">Korea</li>
                            <li data-value="" className="option">Italia</li>
                            <li data-value="" className="option">Canada</li>
                            </ul>
                        </div> */}
              </div>
              <div className="form-group-3 form-style-1">
                <select className="select-location">
                  <option value="">Job Title</option>
                  <option value="">Job Title 1</option>
                  <option value="">Job Title 2</option>
                  <option value="">Job Title 3</option>
                </select>
                {/* <div className="nice-select select-location" tabIndex="0"><span className="current">Job Title</span>
                            <ul className="list">
                            <li data-value="" className="option selected focus">Job Title</li>
                            <li data-value="" className="option">Design & Creative </li>
                            <li data-value="" className="option">Design</li>
                            <li data-value="" className="option">Ux/Ui</li>
                            </ul>
                        </div> */}
              </div>
              <div className="form-group-4 form-style-1">
                <select className="select-location">
                  <option value="">Any Distance</option>
                  <option value="">Any Distance 1</option>
                  <option value="">Any Distance 2</option>
                  <option value="">Any Distance 3</option>
                </select>
                {/* <div className="nice-select select-location" tabIndex="0"><span className="current">Any Distance</span>
                            <ul className="list">
                            <li data-value="" className="option selected focus">Any Distance</li>
                            <li data-value="" className="option">Any Distance 1</li>
                            <li data-value="" className="option">Any Distance 2</li>
                            <li data-value="" className="option">Any Distance 3</li>
                            </ul>
                        </div> */}
              </div>
              <div className="form-group-5 form-style-1">
                <select className="select-location">
                  <option value="">Company Size</option>
                  <option value="">Company Size 1</option>
                  <option value="">Company Size 2</option>
                  <option value="">Company Size 3</option>
                </select>
                {/* <div className="nice-select select-location" tabIndex="0"><span className="current">Company Size</span>
                            <ul className="list">
                            <li data-value="" className="option selected focus">Company Size</li>
                            <li data-value="" className="option">Company Size 1</li>
                            <li data-value="" className="option">Company Size 2</li>
                            <li data-value="" className="option">Company Size 3</li>
                            </ul>
                        </div> */}
              </div>
              <div className="form-group-6">
                <button className="btn btn-find">Find Employers</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form2;
