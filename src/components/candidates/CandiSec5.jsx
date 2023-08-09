import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

CandiSec5.propTypes = {
    
};

function CandiSec5(props) {
    const {data} = props
    return (
        <section>
            <div className="tf-container ctn-full">
                <div className="row">
                <div className="col-lg-12">
                    <div className="group-half-map">
                    <div className="content-left stc">
                        <div className="wd-findjob-filer">
                        <a className="button-filter">
                            <i className="icon-filter"></i> Filters</a
                        >
                        <div className="group-select">
                            <select>
                            <option>12 Per Page</option>
                            <option>1 Per Page</option>
                            <option>10 Per Page</option>
                            </select>
                            <select>
                            <option>Sort by (Defaut)</option>
                            <option>New</option>
                            <option>Last</option>
                            </select>
                        </div>
                        </div>
                        <p className="nofi-job">
                        <span>1249</span> employers recommended for you
                        </p>
                        <div className="content-job style-scroll">
                            {
                                data.map(idx=> (
                                    <div key={idx.id} className="features-job wd-thum-career">
                                        <div className="job-archive-header">
                                        <div className="career-header-left">
                                            <img
                                            src={idx.avt}
                                            alt="jobtex"
                                            className="thumb"
                                            />
                                            <div className="career-left-inner">
                                            <h4>
                                                <Link to="candidate-single.html">{idx.unit}</Link>
                                            </h4>
                                            <h3>
                                                <Link to="candidate-single.html">{idx.name}</Link>
                                                <span className="icon-bolt"></span>
                                            </h3>
                                            <ul className="career-info">
                                                <li>{idx.cate}</li>
                                                <li>
                                                <span className="icon-map-pin"></span>
                                                {idx.map}
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="career-header-right">
                                            <span className="icon-heart"></span>
                                            <Link to="candidate-single.html" className="tf-btn"
                                            >View Profile</Link
                                            >
                                        </div>
                                        </div>
                                        <div className="job-archive-footer">
                                        <div className="career-footer-left">
                                            <ul className="career-tag">
                                            <li><Link to="#">Blender</Link></li>
                                            <li><Link to="#">Sketch</Link></li>
                                            <li><Link to="#">Adobe XD</Link></li>
                                            <li><Link to="#">Figma</Link></li>
                                            </ul>
                                        </div>
                                        <div className="carrer-footer-right">
                                            <span className="icon-dolar1"></span>
                                            <p>${idx.price}/month</p>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>

                        <ul className="pagination-job absolute">
                        <li>
                            <Link to="#"><i className="icon-keyboard_arrow_left"></i></Link>
                        </li>
                        <li><Link to="#">1</Link></li>
                        <li className="current"><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li>
                            <Link to="#"><i className="icon-keyboard_arrow_right"></i></Link>
                        </li>
                        </ul>
                    </div>
                    <div className="content-right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"

                            height="800"

                            />
                            
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default CandiSec5;