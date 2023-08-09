import React from 'react';
import PropTypes from 'prop-types';

MapCandi.propTypes = {
    
};

function MapCandi(props) {
    return (

        <>
        <section className="wd-feature-map candidate-top-map">
            <div className="tf-slider sl5 style-1">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"

                height="800"

                />
            </div>
        </section>

        <section className="top-map-jobs2">
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
                    <select id="select-location" className="select-location">
                        <option>Location</option>
                        <option>Location 1</option>
                        <option>Location 2</option>
                        <option>Location 3</option>
                    </select>
                    </div>
                    <div className="form-group st">
                    <select>
                        <option>Job Title</option>
                        <option>Ux/Ui</option>
                        <option>Designer</option>
                    </select>
                    </div>
                    <div className="form-group st">
                    <select>
                        <option>Age</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                    </div>
                    <div className="form-group st">
                    <select>
                        <option>Salary Estimate</option>
                        <option>Salary Estimate 1</option>
                        <option>Salary Estimate 2</option>
                    </select>
                    </div>
                    <div className="form-group st">
                    <select>
                        <option>Experience</option>
                        <option>Experience 1</option>
                        <option>Experience 2</option>
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
        </>
    );
}

export default MapCandi;