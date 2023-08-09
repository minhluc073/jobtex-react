import React from 'react';
import Header2 from '../components/header/Header2';
import Footer from '../components/footer';
import Blog01 from '../components/blog/Blog01';
import dataBlog from '../assets/fakeData/dataBlog';
import { Link } from 'react-router-dom';

Blogsingle_v3.propTypes = {
    
};

function Blogsingle_v3(props) {
    return (
        <div>
            <Header2 />
            <section className="blog-details-section">
                <div className="tf-container">
                    <div className="row">
                    <div className="blog style-1 stc col-lg-9 col-md-12">
                        <div className="blog-detail blog-detail-side-bar-content side-bar-blog">
                            <div className="widget-blog-1 style-1">
                                <div className="content">
                                    <span className="sub-title">Makerting</span>
                                    <h3 className="main-heading">5 Rules to keep in mind when negotiating a job</h3>
                                    <div className="meta">
                                        <div className="author"><span>by</span>Avitex</div>
                                        <div className="time"><span className="icon-calendar"></span> 2 days ago</div>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src={require ('../assets/images/blog/blog-detail-01.jpg')} alt="" />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum sed mauris eu imperdiet. Donec congue orci nec mi luctus, ut faucibus mauris scelerisque. Donec orci lorem, volutpat a mauris nec, sodales imperdiet urna. Sed dictum enim libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ligula libero, pharetra non dolor et, tempor bibendum magna. Mauris a efficitur nisi.</p>
                            <p>Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus, ante vitae mattis gravida, purus sapien interdum magna, convallis volutpat est turpis pulvinar dui. Aenean eu turpis est. In hac habitasse platea dictumst. Integer at lobortis metus. Proin molestie eget massa vel gravida. Suspendisse nec ante vel augue consectetur mollis.</p>
                            <div className="image-single">
                                <img src={require ('../assets/images/blog/blog-detail-02.jpg')} alt="" />
                                <img src={require ('../assets/images/blog/blog-detail-03.jpg')} alt="" />
                            </div>
                            <h5>How to deal with employee quitting</h5>
                            <p>Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit amet urna fringilla tincidunt. Vestibulum ullamcorper nec lacus ac molestie. Curabitur congue neque sed nisi auctor consequat. Pellentesque rhoncus tortor vitae ipsum sagittis tempor.</p>
                            <p>Vestibulum et pharetra arcu. In porta lobortis turpis. Ut faucibus fermentum posuere. Suspendisse potenti. Mauris a metus sed est semper vestibulum. Mauris tortor sem, consectetur vehicula vulputate id, suscipit vel leo.</p>
                            <ul className="blog-text">
                                <li>15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</li>
                                <li>Deep knowledge and experience with different security areas like identity and access management, cryptography, network security, etc.</li>
                                <li>Experience with database systems and database internals, such as query engines and optimizers are a big plus. </li>
                                <li>Strong fundamentals in computer science skills.</li>
                                <li>Expert-level development skills in Java or C++.</li>
                                <li>Knowledge of industry standard security concepts and protocols like SAML, SCIM, OAuth, RBAC, cryptography is a plus.</li>
                                <li>Advanced degree in Computer Science or related degree.</li>
                                <li>Ph.D. in the related field is a plus</li>
                            </ul>
                            <p>Curabitur aliquam ac arcu in mattis. Phasellus pulvinar erat at aliquam hendrerit. Nam ut velit dolor. Sed fermentum tempus odio, ac faucibus elit scelerisque consequat. Fusce ac malesuada elit. Nam at aliquam libero, quis lacinia erat. In hac habitasse platea dictumst. Suspendisse id dolor orci. Vivamus at aliquam tellus. Vestibulum a augue ac purus suscipit varius non eget lectus. Nam lobortis mauris luctus tristique feugiat. Nulla eleifend risus sit amet nisi feugiat, id eleifend sapien malesuada. Phasellus venenatis convallis mattis. Duis vel tempor eros. Mauris semper sollicitudin neque, imperdiet ultrices urna maximus id.</p>
                            <div className="tag-social">
                                <div className="widget-popular-tags">
                                    <span className="main-title">Tag:</span>
                                    <ul className="widget-popular-tags-wrap">
                                        <li className="widget-popular-tags-item"><Link to="#">Featured</Link></li>
                                        <li className="widget-popular-tags-item"><Link to="#">Interview</Link></li>
                                        <li className="widget-popular-tags-item"><Link to="#">Career</Link></li>
                                    </ul>
                                </div>
                                <div className="wd-social d-flex aln-center">
                                <span>Share this post:</span>
                                <ul className="list-social d-flex aln-center">
                                    <li><Link to="#"><i className="icon-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="icon-linkedin2"></i></Link></li>
                                    <li><Link to="#"><i className="icon-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="icon-pinterest"></i></Link></li>
                                    <li><Link to="#"><i className="icon-instagram1"></i></Link></li>
                                    <li><Link to="#"><i className="icon-youtube"></i></Link></li>
                                </ul>
                                </div>
                            </div>
                            <div className="nav-links">
                                <div className="post-navigation previous-post">
                                    <div className="title-post">
                                        <Link to="#" rel="prev">Previous</Link>
                                    </div>
                                    <p>How to choose the right customer </p>
                                </div>
                                <div className="post-navigation next-post">
                                    <div className="title-post text-end">
                                        <Link to="#" rel="prev">Next</Link>
                                    </div>
                                    <p>Starting your traveling blog with Vasco</p>
                                </div>
                            </div>
                            <div className="comment-list-wrap">
                                <h3 className="comment-title">03 Comments</h3>
                                <div className="comment-list">
                                    <article className="widget-comment-wrap">
                                        <div className="feature-post">
                                            <img src={require ('../assets/images/user/avatar/image-02.jpg')} alt="" />
                                        </div>
                                        <div className="content-post">
                                            <div className="post-author">
                                                <Link to="#">Guy Hawkins</Link>
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="post-date">August 13, 2023</div>
                                            <p>Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis risus amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.</p>
                                            <div className="button"><Link to="#">Reply</Link></div>
                                        </div>
                                        <div className="helpfull">
                                            <Link to="#">Was this helpful?<span className="icon-like1"></span></Link>
                                        </div>
                                    </article>
                                    <div className="children">
                                        <article className="widget-comment-wrap">
                                            <div className="feature-post">
                                                <img src={require ('../assets/images/user/avatar/image-03.jpg')} alt="" />
                                            </div>
                                            <div className="content-post">
                                                <div className="post-author">
                                                    <Link to="#">Eleanor Pena</Link>
                                                    <span className="icon-check"></span>
                                                </div>
                                                <div className="post-date">August 13, 2023</div>
                                                <p>Great choice of Acronym AF1’s 👌🏼</p>
                                                <div className="button"><Link to="#">Reply</Link></div>
                                            </div>
                                            <div className="helpfull">
                                                <Link to="#">Was this helpful?<span className="icon-like1"></span></Link>
                                            </div>
                                        </article>
                                    </div>
                                    <article className="widget-comment-wrap">
                                        <div className="feature-post">
                                            <img src={require ('../assets/images/user/avatar/image-04.jpg')} alt="" />
                                        </div>
                                        <div className="content-post">
                                            <div className="post-author">
                                                <Link to="#">Jerome Bell</Link>
                                                <span className="icon-check"></span>
                                            </div>
                                            <div className="post-date">August 13, 2023</div>
                                            <p>Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis risus amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.</p>
                                            <div className="button"><Link to="#">Reply</Link></div>
                                        </div>
                                        <div className="helpfull">
                                            <Link to="#">Was this helpful?<span className="icon-like1"></span></Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <form method="post" className="wd-form-rating">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="form-rating-heading">
                                    <h3>Leave A Comment</h3>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="form-rating-content">
                                    <div className="row">
                                    <div className="col-lg-6">
                                        <div className="wrap-input">
                                        <label>Name</label>
                                        <input type="text" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="wrap-input">
                                        <label>Email</label>
                                        <input type="text" placeholder="jobtex@mail.com" />
                                        </div> 
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="wrap-checkbox">
                                        <input type="checkbox" />
                                        <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="wrap-notes">
                                        <label>Comment</label>
                                        <textarea   cols="30" rows="10" placeholder="Write comment"></textarea>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <button className="tf-btn-submit style-2">submit review</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className="widget-side-bar stc">
                        <form role="search" method="get" action="#" className="widget-block-search-2">
                            <div className="widget-block-search-2-wrap">
                                <input type="search" className="widget-block-search-2-input " placeholder="Search" required="" />
                                <button type="submit" className="widget-block-search-2-button">
                                    <span className="icon-search1"></span>
                                </button>
                            </div>
                        </form>
                        <div className="categories">
                            <h3 className="main-title">Categories</h3>
                            <div className="categories-wrap">
                                <div className="categories-item"><Link to="#">Business</Link></div>
                                <div className="categories-item"><Link to="#">Interview</Link></div>
                                <div className="categories-item"><Link to="#">Career</Link></div>
                                <div className="categories-item"><Link to="#">Company</Link></div>
                            </div>
                        </div>
                        <div className="recent-posts">
                            <div className="main-title">Recent Posts</div>
                            <div className="recent-post-wrap">
                                <div className="widget-blog-1">
                                    <div className="image">
                                        <img src={require ('../assets/images/side-bar/image-01.jpg')} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="sub-title">Development</div>
                                        <div className="text"><Link to="blog-detail.html">September Most-Loved Best Selling Fall Pieces</Link></div>
                                    </div>
                                </div>
                                <div className="widget-blog-1">
                                    <div className="image">
                                        <img src={require ('../assets/images/side-bar/image-02.jpg')} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="sub-title">Design</div>
                                        <div className="text"><Link to="blog-detail.html">5 Rules to keep in mind when negotiating a job</Link></div>
                                    </div>
                                </div>
                                <div className="widget-blog-1">
                                    <div className="image">
                                        <img src={require ('../assets/images/side-bar/image-03.jpg')} alt="" />
                                    </div>
                                    <div className="content">
                                        <div className="sub-title">Business</div>
                                        <div className="text"><Link to="blog-detail.html">Strategies to increase salary with job offers</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget-popular-tags">
                            <div className="main-title">Popular Tags</div>
                            <div className="widget-popular-tags-wrap">
                                <span className="widget-popular-tags-item"><Link to="#">Featured</Link></span>
                                <span className="widget-popular-tags-item"><Link to="#">Experience</Link></span>
                                <span className="widget-popular-tags-item"><Link to="#">Interview</Link></span>
                                <span className="widget-popular-tags-item"><Link to="#">Skill</Link></span>
                                <span className="widget-popular-tags-item"><Link to="#">Business</Link></span>
                                <span className="widget-popular-tags-item"><Link to="#">Featured</Link></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
            </section>
          
            <Blog01 data={dataBlog} />
            <Footer />
            
        </div>
    );
}

export default Blogsingle_v3;