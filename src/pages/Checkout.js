import React from 'react';
import CommonSection from './../components/UI/CommonSection';
import './css/Checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const totalQty = useSelector(state => state.cart.totalQuantity);

    const totalAmount = useSelector(state => state.cart.totalAmount);


    return (
        <div>
            <CommonSection name={'Checkout'}/>

            {/* section checkout */}
            <section className='sectionCheckout'>
                <div className='container'>
                    <div className='row mt-3'>
                        <div className='col-md-7 mb-3'>
                            <h3>Billing Information</h3>
                            
                            <form action=''>
                            <label>Your name</label>
                            <input className='form-control' type='text' placeholder='Enter your name'/>

                            <label className='mt-2'>Your email</label>
                            <input className='form-control' type='text' placeholder='Enter your email'/>

                            <label className='mt-2'>Phone number</label>
                            <input className='form-control' type='text' placeholder='Enter your phone number'/>

                            <label className='mt-2'>Street address</label>
                            <input className='form-control' type='text' placeholder='Enter your street address'/>

                            <label className='mt-2'>City</label>
                            <input className='form-control' type='text' placeholder='Enter your city'/>
                            
                            <label className='mt-2'>Postal code</label>
                            <input className='form-control' type='text' placeholder='Enter your postal code'/>

                            <label className='mt-2'>Country</label>
                            <input className='form-control' type='text' placeholder='Enter your country'/>
                            </form>
                        </div>

                        <div className='offset-md-1 col-md-4 mt-2'>
                            <div className='checkoutCart'>
                                <h6>Total Qty: <span>{totalQty}</span></h6>
                                <h6>Subtotal: <span>{totalAmount}</span></h6>
                                <h6>
                                    <span>
                                    Shipping: <br/> Free shipping
                                    </span>
                                    <span>$0</span>
                                </h6>
                               
                                <h4>Total Cost: <span>${totalAmount}</span></h4>

                                <button className='btn bg-white w-100 mt-5 text-dark'>Place an order</button>
                            </div>

                           
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;