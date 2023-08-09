import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Sidebar.propTypes = {
    
};

function Sidebar(props) {
    const {data} = props
    return (
        <section className="candidate-cv-section-two">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="widget-filter po-sticky m-bottom">
                                    <form action="GET">
                                    <div className="group-form">
                                        <label className="title">Language</label>
                                        <div className="group-input">
                                        <select>
                                            <option value="0">English</option>
                                            <option value="0">Japanis</option>
                                            <option value="0">Spanis</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="group-form">
                                        <label className="title">Job</label>
                                        <div className="group-input">
                                        <select>
                                            <option value="0">UI UX Design</option>
                                            <option value="0">Developer</option>
                                            <option value="0">Tester</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="group-form">
                                        <label className="title">Design</label>
                                        <div className="group-input">
                                        <select>
                                            <option value="0">Minimal</option>
                                            <option value="0">Minimal</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="group-form">
                                        <label className="title">popularity</label>
                                        <div className="group-input">
                                        <select>
                                            <option value="0">Most Users</option>
                                            <option value="0">Minimal</option>
                                        </select>
                                        </div>
                                    </div>
                                    <button type="submit">Find Sample CV</button>
                                    </form>
                                </div>

                            </div>
                            
                            <div className="col-lg-8 tf-tab">
                                <div className="wd-meta-select-job">
                                    
                                    <div className="wd-findjob-filer">
                                        <div className="group-select-display">
                                            <ul className="menu-tab cv-stc2">
                                                <li className="ct-tab active"> Popularity CV</li>
                                                <li className="ct-tab">Personalized CV</li>
                                            </ul>
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
                                </div>
                                    <div className="content-tab cv-stc2">
                                        <div className="inner">
                                            <div className="group-col-2">
                                                {
                                                    data.map(idx=> (
                                                        <div key={idx.id} className="wd-cv-template cl2">
                                                            <div className="features">
                                                                <Link to="#"><img src={idx.img} alt="images" /></Link>
                                                            </div>
                                                            <div className="content">
                                                                <div className="top-content">
                                                                    <ul className="list-category">
                                                                        <li><Link to="#">Create</Link></li>
                                                                        <li><Link to="#">Professionally</Link></li>
                                                                        <li><Link to="#">Minimal</Link></li>
                                                                    </ul>
                                                                    <Link to="#" className="heart-btn"><i className="icon-heart"></i></Link>
                                                                </div>
                                                                <h6><Link to="#">basic CV</Link></h6>
                                                                <div className="bottom-content">
                                                                    <ul className="list-select">
                                                                        <li><Link to="#" className="sl1"></Link></li>
                                                                        <li><Link to="#" className="sl2"></Link></li>
                                                                        <li><Link to="#" className="sl3"></Link></li>
                                                                        <li><Link to="#" className="sl4"></Link></li>
                                                                    </ul>
                                                                    <Link to="#" className="tf-btn">Use CV</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                               
                                                
                                            </div>
                                        
                                        </div>
                                        <div className="inner">
                                            <div className="group-col-2">
                                        {/* //         {
                                        //             data.slide(0,3).map(idx=> (
                                        //                 <div className="wd-cv-template cl2">
                                        //                     <div className="features">
                                        //                         <Link to="#"><img src="images/review/cv1.jpg" alt="images" /></Link>
                                        //                     </div>
                                        //                     <div className="content">
                                        //                         <div className="top-content">
                                        //                             <ul className="list-category">
                                        //                                 <li><Link to="#">Create</Link></li>
                                        //                                 <li><Link to="#">Professionally</Link></li>
                                        //                                 <li><Link to="#">Minimal</Link></li>
                                        //                             </ul>
                                        //                             <Link to="#" className="heart-btn"><i className="icon-heart"></i></Link>
                                        //                         </div>
                                        //                         <h6><Link to="#">basic CV</Link></h6>
                                        //                         <div className="bottom-content">
                                        //                             <ul className="list-select">
                                        //                                 <li><Link to="#" className="sl1"></Link></li>
                                        //                                 <li><Link to="#" className="sl2"></Link></li>
                                        //                                 <li><Link to="#" className="sl3"></Link></li>
                                        //                                 <li><Link to="#" className="sl4"></Link></li>
                                        //                             </ul>
                                        //                             <Link to="#" className="tf-btn">Use CV</Link>
                                        //                         </div>
                                        //                     </div>
                                        //                 </div>
                                        //             ))
                                        //         } */}
                                                
                                            </div>
                                        
                                        </div>
                                    </div>
                            </div>
                            <ul className="pagination-job padding">
                            <li><Link to="#"><i className="icon-keyboard_arrow_left"></i></Link></li>
                            <li><Link to="#">1</Link></li>
                            <li className="current"><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#"><i className="icon-keyboard_arrow_right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
            </section>
    );
}

export default Sidebar;