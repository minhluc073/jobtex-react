import React from 'react';
import PropTypes from 'prop-types';

Sidebar.propTypes = {
    
};

function Sidebar(props) {
    return (
        <div className="content-left style2 po-sticky">
                        <div className="inner st-filter">
                        <div className="widget-filter no-scroll mb1">
                            <form action="GET">
                            <div className="group-form">
                                <label className="title">Search by Keywords</label>
                                <div className="group-input search-ip">
                                <button><i className="icon-search"></i></button>
                                <input type="text" placeholder="Keywork" required />
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
                                    <option value="0">Design & Creative</option>
                                    <option value="0">Design</option>
                                    <option value="0">Ux/Ui</option>
                                </select>
                                </div>
                            </div>

                            <div className="group-form st2">
                                <label className="title st2">Age:
                                <span id="default-side" className="color-pri1"></span>
                                <span>Years Old</span>
                                </label>
                                <div className="group-input">
                                <input type="range" min="1" max="100" value="25" className="range-input" id="myRange" />
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Salary Estimate</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">Male</option>
                                    <option value="0">Website</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Experrience</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">1 year experience</option>
                                    <option value="0">2 year experience</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Qualification </label>
                                <div className="group-input">
                                <select>
                                    <option value="0">Certificate</option>
                                    <option value="0">Certificate 2</option>
                                </select>
                                </div>
                            </div>
                            <button type="submit">Find Employers</button>
                            </form>
                        </div>
                        <div className="widget-filter no-scroll">
                            <form action="GET">
                            <div className="group-form">
                                <label className="title">Title </label>
                                <div className="group-input">
                                <select>
                                    <option value="0">Marketing</option>
                                    <option value="0">2 year experience</option>
                                </select>
                                </div>
                            </div>
                            <div className="group-form">
                                <label className="title">Email Frequency</label>
                                <div className="group-input">
                                <select>
                                    <option value="0">Weekly</option>
                                    <option value="0">Weekly 2</option>
                                </select>
                                </div>
                            </div>
                            <button type="submit">save job Alert</button>
                            </form>
                        </div>
                        </div>
                    </div>
    );
}

export default Sidebar;