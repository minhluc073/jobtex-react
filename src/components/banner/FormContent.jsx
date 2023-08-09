import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

FormContent.propTypes = {
    
};

function FormContent(props) {
    return (
        <div className="content">
                        <div className="heading">
                        <h2 className="text-white">Find the job that fits your life</h2>
                        <p className="text-white">Resume-Library is a true performance-based job board. Enjoy custom hiring products
                            and access to up to 10,000 new resume registrations daily, with no subscriptions or user licences.</p>
                        </div>
                        <div className="form-sl">
                        <form method="post">
                            <div className="row-group-search home1">
                            <div className="form-group-1">
                                <input type="text" className="input-filter-search" placeholder="Job title, key words or company" />
                            </div>
                            <div className="form-group-2">
                                <span className="icon-map-pin"></span>
                                <select id="select-location" className="select-location">
                                <option value="">All Location</option>
                                <option value="">Singapore</option>
                                <option value="">Japan</option>
                                <option value="">Korea</option>
                                <option value="">Italia</option>
                                <option value="">Canada</option>
                                </select>
                            </div>
                            <div className="form-group-4">
                                <button type="submit" className="btn btn-find">Find Jobs</button>
                            </div>
                            </div>
                        </form>
              
                        </div>
                        <ul className="list-category text-white">
                        <li><Link to="about-us.html">Designer</Link></li>
                        <li className="current"><Link to="about-us.html">Developer</Link></li>
                        <li><Link to="about-us.html">Tester</Link></li>
                        <li><Link to="about-us.html">Writing</Link></li>
                        <li><Link to="about-us.html">Project Manager</Link></li>
                        </ul>
                    </div>
    );
}

export default FormContent;