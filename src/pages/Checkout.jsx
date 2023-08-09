import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

Checkout.propTypes = {
    
};

function Checkout(props) {
    return (
        <div>
            <Header2 />

            <Breadcrumb title='Shop' />
            <section className="checkout-section">
                    <div className="tf-container">
                        <div className="bg-coupon">
                            <p>Have a coupon?<Link to="#"> Click here to enter your code</Link></p>
                        </div>

                        <div className="row">
                                <div className="col-lg-7">
                                        <div className="form-candidate form-checkout form-stc">
                                            <div className="group-title">
                                                <h6>Billing Details</h6>
                                            </div>
                                            <form  method="post">
                                            <div className="group-input">
                                                <div className="ip">
                                                    <label >First Name</label>
                                                <input type="text" placeholder="Tony Nguyen |" value="" />
                                                </div>
                                                <div className="ip">
                                                    <label >Last Name</label>
                                                <input type="text" placeholder="Last Name" value="" />
                                                </div>
                                            </div>
                                            <div className="group-input-st1">
                                                <label >Country/Region</label>
                                                <input type="text" placeholder="United State" value="" />
                                            </div>
                                            <div className="group-input-st1">
                                                <label >Town/City</label>
                                                <input type="text" />
                                            </div>
                                            <div className="group-input-st1">
                                                <label >Address</label>
                                                <input type="text" placeholder="Street Adress" />
                                            </div>
                                            <div className="group-input-st1">
                                                <label >Postal Code</label>
                                                <input type="email" placeholder="Code" />
                                            </div>
                                            <div className="group-input-st1">
                                                <label >Phone Number</label>
                                                <input type="number" />
                                            </div>
                                            <div className="group-input-st1">
                                                <label >Email or Phone Number:</label>
                                                <input type="email" />
                                            </div>
                                            <div className="group-ant-choice st">
                                                <div className="sub-ip"><input type="checkbox" />&ensp;Create an account</div>
                                                <div className="sub-ip"><input type="checkbox" />&ensp;Ship to a different address?</div>
                                            </div>
                                            <div className="ip out group-note">
                                                <label >Note Order:</label>
                                                <textarea   placeholder="Write note"></textarea>
                                            </div>
                                            </form>
                                        </div>
                                </div>    
                            <div className="col-lg-5 sticky-sidebar">
                                <div className="shop-content margin content-stc">
                                            <div className="wd-order">
                                                <h5>Your Order</h5>
                                                <div className="bg-checkout">
                                                    <div className="product-list">
                                                        <div className="product-item">
                                                            <div className="info">
                                                                <img src={require ('../assets/images/pages/shop-5.jpg')} alt="image" />
                                                                <h6><Link to="#">Manager Onboarding</Link></h6>
                                                            </div>
                                                            <span className="price">1  x $7.26</span>
                                                        </div>
                                                        <div className="product-item">
                                                            <div className="info">
                                                                <img src={require ('../assets/images/pages/shop-2.jpg')} alt="image" />
                                                                <h6><Link to="#">Switchers</Link></h6>  
                                                            </div>
                                                            <span className="price">2  x $6.26</span>
                                                        </div>
                                                        <div className="product-item">
                                                            <div className="info">
                                                                <img src={require ('../assets/images/pages/shop-6.jpg')} alt="image" />
                                                                <h6><Link to="#">Finance for managers</Link></h6>
                                                            </div>
                                                            <span className="price">1  x $5.26</span>
                                                        </div>
                                                    </div>
                                                    <div className="group-shipping">
                                                        <h6>Shiping</h6>
                                                        <ul>
                                                            <li className="shipping-item"><p>Shipping from <Link to="#"> Adam State</Link></p>  <span>Free</span></li>
                                                            <li className="shipping-item"><p>Shipping from <Link to="#">United State</Link></p>  <span>$19.8</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="group-total">
                                                        <h6>Subtotal</h6>
                                                        <span>$168.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wd-payment">
                                                <h5>Payment Method</h5>
                                                <form className="bg-checkout" method="post" >
                                                    <div className="group-input">
                                                        <input type="radio" checked name="radio" />
                                                        <div className="inner-right">
                                                            <label >Direct bank transfer</label>
                                                            <p>Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                    <div className="group-input">
                                                        <input type="radio" name="radio" />
                                                        <span className="checkmark"></span>
                                                        <label >Cash on delivery</label>
                                                    </div>
                                                    <div className="group-input">
                                                        <input type="radio" name="radio" />
                                                        <label >PayPal</label>
                                                    </div>
                                                    <button type="submit" className="btn-payment">Place Order</button>   
                                                </form>
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

export default Checkout;