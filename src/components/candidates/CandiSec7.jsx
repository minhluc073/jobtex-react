import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

CandiSec7.propTypes = {
    
};

function CandiSec7(props) {
    const {data} = props
    return (
        <section className="candidates-section">
                <div className="tf-container">
                <div className="row">
                    <div className="col-lg-4 ctn2">
                        <Sidebar />
                    </div>

                    <div className="col-lg-8 tf-tab ctn2">
                        <div className="wd-meta-select-job">
                            
                            <div className="wd-findjob-filer">
                                <div className="group-select-display">
                                    <p className="nofi-job"> Showing all 0 result</p>
                                </div>
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
                            <button className="btn-pri">Reset Filter</button>
                        </div>
                    </div>
                    <ul className="pagination-job p-top-st1">
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
                </div>
            </section>
    );
}

export default CandiSec7;