import React from 'react';
import PropTypes from 'prop-types';

Form3.propTypes = {
    
};

function Form3(props) {
    return (
        <section className="form-sticky stc2">
                <div className="tf-container">
                    <div className="job-search-form inner-form-map style2">
                    <form method="post">
                        <div className="row-group-search">
                        <div className="form-group">
                            <input type="text" className="input-filter-search" placeholder="Keywords" />
                            <span className="icon-search search-job icon"></span>
                        </div>
                        <div className="form-group location">
                            <span className="icon-map-pin icon"></span>
                            <select  id="select-location" className="select-location">
                            <option value="">Location</option>
                            <option value="">Singapore</option>
                            <option value="">Japan</option>
                            <option value="">Korea</option>
                            <option value="">Italia</option>
                            <option value="">Canada</option>
                            </select>
                        </div>
                        <div className="form-group st">
                            <select >
                            <option value="">Job Title</option>
                            <option value="">Ux/Ui</option>
                            <option value="">Designer</option>
                            </select>
                        </div>
                        <div className="form-group st">
                            <select >
                            <option value="">Age</option>
                            <option value="">20</option>
                            <option value="">30</option>
                            </select>
                        </div>
                        <div className="form-group st">
                            <select >
                            <option value="">Salary Estimate</option>
                            <option value="">Salary Estimate 1</option>
                            <option value="">Salary Estimate 2</option>
                            </select>
                        </div>
                        <div className="form-group st">
                            <select >
                            <option value="">Experience</option>
                            <option value="">Experience 1</option>
                            <option value="">Experience 2</option>
                            </select>
                        </div>
                        <div className="form-group-btn">
                            <button className="btn btn-find">Find Candidates</button>
                        </div>
                        </div>
                    
                    </form>
                 
                    </div>
                </div>
            </section>
    );
}

export default Form3;