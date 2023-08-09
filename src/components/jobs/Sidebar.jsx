import React from 'react';
import PropTypes from 'prop-types';

Sidebar.propTypes = {
    
};

function Sidebar(props) {
    return (
        <div className="widget-filter st2  style-scroll po-sticky">
                            <form action="GET">
                            <div className="group-form">
                                <label className="title">Search Company</label>
                                <div className="group-input search-ip">
                                <button><i className="icon-search"></i></button>
                                <input type="text" placeholder="Job title, key words or company" required />
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Location</label>
                                <div className="group-input has-icon">
                                <i className="icon-map-pin"></i>
                                <select>
                                    <option value="0">All Location</option>
                                    <option value="0">India</option>
                                    <option value="0">Singapore</option>
                                    <option value="0">French</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Job Title</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">Design & Creative </option>
                                    <option value="0">Design</option>
                                    <option value="0">Ux/Ui</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">On-site/Remote</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">On-site </option>
                                    <option value="0">Remote</option>
                                    <option value="0">Freelancer</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Job Types</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">All Job Types</option>
                                    <option value="0">SoftWere </option>
                                    <option value="0">Website</option>
                                </select>
                                </div>
                            </div>

                            <div className="group-form filter-block">
                                <div className="salary-slider-one">
                                <div className="input-outer">
                                    <label>Salary:</label>
                                    <div className="salary-outer"><span className="count"></span></div>
                                </div>
                                <div className="salary-slider"></div>
                                </div>
                            </div>

                            <div className="group-form">
                                <label className="title st2">Radius: <span id="default-side" className="color-pri1"></span>
                                <span>Miles</span> </label>
                                <div className="group-input">
                                <input type="range" min="1" max="100" value="25" className="range-input" id="myRange" />
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Posted Anytime</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">Posted Anytime </option>
                                    <option value="0">Website</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">All Seniority Levels</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">All Seniority Levels </option>
                                    <option value="0">Website</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Company</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">Company </option>
                                    <option value="0">Website</option>
                                </select>
                                </div>
                            </div>
                            <button type="submit">Find Jobs</button>
                            </form>
                        </div>
    );
}

export default Sidebar;