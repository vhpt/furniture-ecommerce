import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bgFooter mt-5 text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-2'>
                        <h5>WStore</h5>
                        <p>
                        Discover style in furniture, phones, watches, and more. Elevate your lifestyle. Shop now!
                        </p>
                    </div>

                    <div className='col-md-3 col-lg-3 col-sm-2'>
                        <h5>Top Categories</h5>
                        <p>Mobile Phone</p>
                        <p>Modern Sofa</p>
                        <p>Arm Chair</p>
                        <p>Smart Watches</p>

                    </div>

                    <div className='col-md-3 col-lg-3 col-sm-2'>
                        <h5>Useful Links</h5>
                        <p>Shop</p>
                        <p>Cart</p>
                        <p>Login</p>
                        <p>Privacy Policy</p>

                    </div>

                    <div className='col-md-3 col-lg-3 col-sm-2'>
                        <h5>Contact</h5>
                        <p><i className="bi bi-geo-alt me-2"></i> 123 ABCXYZ Spy x Family, Naruto</p>
                        <p><i className="bi bi-telephone me-2"></i>0123456789</p>
                        <p><i className="bi bi-envelope me-2"></i>wstore@gmail.com</p>

                    </div>

                </div>

                <div className='row text-center mt-3'>
                    <p>	&#169; Coppyright 2024 developed by wstore. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;