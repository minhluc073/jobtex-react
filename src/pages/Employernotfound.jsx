import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';

Employernotfound.propTypes = {
    
};

function Employernotfound(props) {
    return (
        <div>
            <Header2 />
            <Breadcrumb title='Employers' />
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
                                {/* <div className="nice-select" tabIndex="0"><span className="current">All Location</span>
                                    <ul className="list">
                                    <li data-value="0" className="option selected">All Location</li>
                                    <li data-value="0" className="option">India</li>
                                    <li data-value="0" className="option">Singapore</li>
                                    <li data-value="0" className="option">French</li>
                                    </ul>
                                </div> */}
                                </div>
                            </div>
                            <div className="group-form filter-block">
                                <div className="salary-slider-one">
                                <div className="input-outer">
                                    <label>Estimate Salary:</label>
                                    <div className="salary-outer"><span className="count"></span></div>
                                </div>
                                <div className="salary-slider"></div>
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
                                {/* <div className="nice-select" tabIndex="0"><span className="current">Design &amp; Creative </span>
                                    <ul className="list">
                                    <li data-value="0" className="option selected">Design &amp; Creative </li>
                                    <li data-value="0" className="option">Design</li>
                                    <li data-value="0" className="option">Ux/Ui</li>
                                    </ul>
                                </div> */}
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
                                {/* <div className="nice-select" tabIndex="0"><span className="current">1-5 employees</span>
                                    <ul className="list">
                                    <li data-value="0" className="option selected">1-5 employees</li>
                                    <li data-value="0" className="option">Website</li>
                                    </ul>
                                </div> */}
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
                            {/* <div className="group-select">
                                <select>
                                <option>12 Per Page</option>
                                <option>1 Per Page</option>
                                <option>10 Per Page</option>
                                </select>
                                <div className="nice-select" tabIndex="0"><span className="current">12 Per Page</span>
                                <ul className="list">
                                    <li data-value="12 Per Page" className="option selected">12 Per Page</li>
                                    <li data-value="1 Per Page" className="option">1 Per Page</li>
                                    <li data-value="10 Per Page" className="option">10 Per Page</li>
                                </ul>
                                </div>
                                <select>
                                <option>Sort by (Defaut)</option>
                                <option>New</option>
                                <option>Last</option>
                                </select>
                                <div className="nice-select" tabIndex="0"><span className="current">Sort by (Defaut)</span>
                                <ul className="list">
                                    <li data-value="Sort by (Defaut)" className="option selected">Sort by (Defaut)</li>
                                    <li data-value="New" className="option">New</li>
                                    <li data-value="Last" className="option">Last</li>
                                </ul>
                                </div>
                            </div> */}
                            </div>
                            <button className="btn btn-submit" type="submit">Reset Filter</button>

                        </div>


                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
            
        </div>
    );
}

export default Employernotfound;