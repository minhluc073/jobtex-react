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
                <input type="text" placeholder="Keywork" required="" />
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
                <div className="nice-select" tabIndex="0"><span className="current">All Location</span>
                    <ul className="list">
                    <li data-value="0" className="option selected">All Location</li>
                    <li data-value="0" className="option">India</li>
                    <li data-value="0" className="option">Singapore</li>
                    <li data-value="0" className="option">French</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="group-form">
                <label className="title">Job Title</label>
                <div className="group-input">
                <select>
                    <option value="0">Design &amp; Creative </option>
                    <option value="0">Design</option>
                    <option value="0">Ux/Ui</option>
                </select>
                <div className="nice-select" tabIndex="0"><span className="current">Design &amp; Creative </span>
                    <ul className="list">
                    <li data-value="0" className="option selected">Design &amp; Creative </li>
                    <li data-value="0" className="option">Design</li>
                    <li data-value="0" className="option">Ux/Ui</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="group-form st2">
                <label className="title st2">Radius: <span id="default-side" className="color-pri1"></span>
                <span>Miles</span> </label>
                <div className="group-input style-1">
                    <input type="range" min="1" max="100" value="25" className="range-input" id="myRange" />
                </div>
            </div>
            <div className="group-form">
                <label className="title">Company Size</label>
                <div className="group-input">
                <select>
                    <option value="0">Company </option>
                    <option value="0">Website</option>
                </select>
                <div className="nice-select" tabIndex="0"><span className="current">1-5 employees</span>
                    <ul className="list">
                    <li data-value="0" className="option selected">1-5 employees</li>
                    <li data-value="0" className="option">Website</li>
                    </ul>
                </div>
                </div>
            </div>
            <button type="submit">Find Jobs</button>
            </form>
        </div>
    );
}

export default Sidebar;