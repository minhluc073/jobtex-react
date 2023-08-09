import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/header/Header2';
import Breadcrumb from '../components/breadcrumb';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

Shoppingcart.propTypes = {
    
};

function Shoppingcart(props) {
    return (
        <div>
            <Header2 />

            <Breadcrumb title='Shopping Cart' />

            <section className="shop-section">
                <div className="tf-container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="shopping-cart">
                        <h6>Shopping Cart</h6>
                        <div className="table-res">
                        <ul className="list-shop">
                            <li>
                            <div className="product">
                                <div className="thumb"><img src={require ('../assets/images/review/shop1.jpg')} alt="images" /></div>
                                <Link to="#">Manager Onboarding</Link>
                            </div>
                            <div className="quantity cl3">
                                <span className="btn-quantity minus-btn"><i className="icon-minus"></i></span>
                                <input type="number" name="number" value="1" />
                                <span className="btn-quantity active plus-btn"><i className="icon-plus"></i></span>
                            </div>
                            <div className="price">$8.26</div>
                            <Link to="#" className="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20"
                                viewBox="0 0 16 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M7.94594 8.08069V18.6108C7.94594 18.7947 7.79551 18.9444 7.61184 18.9444C7.42816 18.9444 7.27773 18.7947 7.27773 18.6108V8.08069C7.27773 7.89682 7.42816 7.74717 7.61184 7.74717C7.79547 7.74717 7.94594 7.89682 7.94594 8.08069ZM0.453125 2.69592L15.2902 6.10538L15.5188 5.11229C15.6439 4.5653 15.302 4.01745 14.7549 3.89163L11.5352 3.15198L11.6258 2.77971C11.7255 2.3453 11.6493 1.89714 11.4129 1.51682C11.1745 1.13702 10.8033 0.873229 10.3695 0.773034L7.1907 0.0427214C6.75695 -0.056927 6.30758 0.0190496 5.92856 0.257018C5.54758 0.494596 5.28379 0.864831 5.18414 1.29917L5.09742 1.67303L1.9009 0.938737C1.35383 0.813112 0.806758 1.15589 0.681719 1.70331L0.453125 2.69592ZM10.8854 3.00268L5.74156 1.82104L5.83481 1.44885C5.8934 1.18803 6.05363 0.965651 6.28223 0.822253C6.51082 0.678854 6.78043 0.633112 7.04031 0.692721L10.2211 1.42342C10.4809 1.48303 10.7037 1.64245 10.8463 1.87128C10.9909 2.10014 11.0358 2.36948 10.9772 2.63042L10.8854 3.00268ZM4.2982 8.06483L4.81207 18.5946C4.82184 18.7784 4.67922 18.9348 4.49555 18.944C4.48969 18.944 4.48383 18.9444 4.47797 18.9444C4.30211 18.9444 4.15363 18.8055 4.14582 18.6271L3.63199 8.09698C3.62418 7.91311 3.76484 7.75674 3.94852 7.7476C4.13211 7.73792 4.29039 7.88057 4.2982 8.06483ZM0.689531 6.69151L1.87938 19.1845C1.9243 19.6494 2.30922 20 2.77617 20H12.4475C12.9144 20 13.2993 19.6494 13.3443 19.1845L14.5341 6.69151H0.689531ZM10.4116 18.5946L10.9254 8.06483C10.9352 7.88057 11.0915 7.73757 11.2752 7.74756C11.4588 7.75671 11.6014 7.91307 11.5917 8.09694L11.0778 18.6271C11.07 18.8055 10.9215 18.9443 10.7457 18.9443C10.7398 18.9443 10.734 18.9439 10.7281 18.9439C10.5445 18.9348 10.4038 18.7784 10.4116 18.5946Z"
                                    fill="#B1B1B1" />
                                </svg></Link>
                            </li>
                            <li>
                            <div className="product">
                                <div className="thumb"><img src={require ('../assets/images/review/shop2.jpg')} alt="images" /></div>
                                <Link to="#">Switchers</Link>
                            </div>
                            <div className="quantity cl3">
                                <span className="btn-quantity minus-btn"><i className="icon-minus"></i></span>
                                <input type="number" name="number" value="2" />
                                <span className="btn-quantity plus-btn"><i className="icon-plus"></i></span>
                            </div>
                            <div className="price">$9.26</div>
                            <Link to="#" className="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20"
                                viewBox="0 0 16 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M7.94594 8.08069V18.6108C7.94594 18.7947 7.79551 18.9444 7.61184 18.9444C7.42816 18.9444 7.27773 18.7947 7.27773 18.6108V8.08069C7.27773 7.89682 7.42816 7.74717 7.61184 7.74717C7.79547 7.74717 7.94594 7.89682 7.94594 8.08069ZM0.453125 2.69592L15.2902 6.10538L15.5188 5.11229C15.6439 4.5653 15.302 4.01745 14.7549 3.89163L11.5352 3.15198L11.6258 2.77971C11.7255 2.3453 11.6493 1.89714 11.4129 1.51682C11.1745 1.13702 10.8033 0.873229 10.3695 0.773034L7.1907 0.0427214C6.75695 -0.056927 6.30758 0.0190496 5.92856 0.257018C5.54758 0.494596 5.28379 0.864831 5.18414 1.29917L5.09742 1.67303L1.9009 0.938737C1.35383 0.813112 0.806758 1.15589 0.681719 1.70331L0.453125 2.69592ZM10.8854 3.00268L5.74156 1.82104L5.83481 1.44885C5.8934 1.18803 6.05363 0.965651 6.28223 0.822253C6.51082 0.678854 6.78043 0.633112 7.04031 0.692721L10.2211 1.42342C10.4809 1.48303 10.7037 1.64245 10.8463 1.87128C10.9909 2.10014 11.0358 2.36948 10.9772 2.63042L10.8854 3.00268ZM4.2982 8.06483L4.81207 18.5946C4.82184 18.7784 4.67922 18.9348 4.49555 18.944C4.48969 18.944 4.48383 18.9444 4.47797 18.9444C4.30211 18.9444 4.15363 18.8055 4.14582 18.6271L3.63199 8.09698C3.62418 7.91311 3.76484 7.75674 3.94852 7.7476C4.13211 7.73792 4.29039 7.88057 4.2982 8.06483ZM0.689531 6.69151L1.87938 19.1845C1.9243 19.6494 2.30922 20 2.77617 20H12.4475C12.9144 20 13.2993 19.6494 13.3443 19.1845L14.5341 6.69151H0.689531ZM10.4116 18.5946L10.9254 8.06483C10.9352 7.88057 11.0915 7.73757 11.2752 7.74756C11.4588 7.75671 11.6014 7.91307 11.5917 8.09694L11.0778 18.6271C11.07 18.8055 10.9215 18.9443 10.7457 18.9443C10.7398 18.9443 10.734 18.9439 10.7281 18.9439C10.5445 18.9348 10.4038 18.7784 10.4116 18.5946Z"
                                    fill="#B1B1B1" />
                                </svg></Link>
                            </li>
                            <li>
                            <div className="product">
                                <div className="thumb"><img src={require ('../assets/images/review/shop3.jpg')} alt="images" /></div>
                                <Link to="#">Finance for managers</Link>
                            </div>
                            <div className="quantity cl3">
                                <span className="btn-quantity minus-btn"><i className="icon-minus"></i></span>
                                <input type="number" name="number" value="1" />
                                <span className="btn-quantity plus-btn"><i className="icon-plus"></i></span>
                            </div>
                            <div className="price">$6.26</div>
                            <Link to="#" className="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20"
                                viewBox="0 0 16 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M7.94594 8.08069V18.6108C7.94594 18.7947 7.79551 18.9444 7.61184 18.9444C7.42816 18.9444 7.27773 18.7947 7.27773 18.6108V8.08069C7.27773 7.89682 7.42816 7.74717 7.61184 7.74717C7.79547 7.74717 7.94594 7.89682 7.94594 8.08069ZM0.453125 2.69592L15.2902 6.10538L15.5188 5.11229C15.6439 4.5653 15.302 4.01745 14.7549 3.89163L11.5352 3.15198L11.6258 2.77971C11.7255 2.3453 11.6493 1.89714 11.4129 1.51682C11.1745 1.13702 10.8033 0.873229 10.3695 0.773034L7.1907 0.0427214C6.75695 -0.056927 6.30758 0.0190496 5.92856 0.257018C5.54758 0.494596 5.28379 0.864831 5.18414 1.29917L5.09742 1.67303L1.9009 0.938737C1.35383 0.813112 0.806758 1.15589 0.681719 1.70331L0.453125 2.69592ZM10.8854 3.00268L5.74156 1.82104L5.83481 1.44885C5.8934 1.18803 6.05363 0.965651 6.28223 0.822253C6.51082 0.678854 6.78043 0.633112 7.04031 0.692721L10.2211 1.42342C10.4809 1.48303 10.7037 1.64245 10.8463 1.87128C10.9909 2.10014 11.0358 2.36948 10.9772 2.63042L10.8854 3.00268ZM4.2982 8.06483L4.81207 18.5946C4.82184 18.7784 4.67922 18.9348 4.49555 18.944C4.48969 18.944 4.48383 18.9444 4.47797 18.9444C4.30211 18.9444 4.15363 18.8055 4.14582 18.6271L3.63199 8.09698C3.62418 7.91311 3.76484 7.75674 3.94852 7.7476C4.13211 7.73792 4.29039 7.88057 4.2982 8.06483ZM0.689531 6.69151L1.87938 19.1845C1.9243 19.6494 2.30922 20 2.77617 20H12.4475C12.9144 20 13.2993 19.6494 13.3443 19.1845L14.5341 6.69151H0.689531ZM10.4116 18.5946L10.9254 8.06483C10.9352 7.88057 11.0915 7.73757 11.2752 7.74756C11.4588 7.75671 11.6014 7.91307 11.5917 8.09694L11.0778 18.6271C11.07 18.8055 10.9215 18.9443 10.7457 18.9443C10.7398 18.9443 10.734 18.9439 10.7281 18.9439C10.5445 18.9348 10.4038 18.7784 10.4116 18.5946Z"
                                    fill="#B1B1B1" />
                                </svg></Link>
                            </li>
                        </ul>
                        </div>
                        <div className="coupon">
                        <div className="title">You Have Discount Codes?</div>
                        <form method="get" className="cp-form">
                            <div className="group-ip">
                            <input type="text" placeholder="Coupon Code" />
                            <button type="submit">Apply</button>
                            </div>
                            <Link to="#" className="btn"> <i className="icon-refect"></i> Update cart</Link>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="shopping-cart">
                        <h6>order summary</h6>
                        <div className="view-cart">
                        <div className="subtotal">
                            <div className="group-ip">
                            <div className="top">
                                <div className="title">Subtotal</div>
                                <div className="price">$3,698.96</div>
                            </div>
                            <div className="bottom">
                                <div className="title">Saving</div>
                                <div className="price">-$460.00</div>
                            </div>
                            </div>
                            <div className="group-ip shipping">
                            <div className="top">
                                <div className="title">Shipping</div>
                            </div>
                            <div className="bottom">
                                <div className="title">Shipping from <span>Adam State</span> </div>
                                <div className="price st">Free</div>
                            </div>
                            <div className="bottom">
                                <div className="title">Shipping from <span>United State</span> </div>
                                <div className="price st">$19.8</div>
                            </div>
                            </div>
                            <div className="total">
                            <div className="title">Total</div>
                            <div className="price">$3,698.96</div>
                            </div>
                            <Link to="checkout.html" className="btn">proceed to checkout</Link>
                            <Link to="#" className="payment"><img src={require ('../assets/images/review/payment.png')} alt="images" /></Link>
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

export default Shoppingcart;