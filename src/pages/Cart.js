import React from 'react';
import './css/Cart.css';
import CommonSection from '../components/UI/CommonSection';

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';


const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);


    return (
        <div>
            <CommonSection name={'Shopping Cart'} />

            {/* section cart */}
            <section className='cartProducts'>
                <div className='container'>
                    <div className='row mt-3'>
                        <div className='col-md-7 me-5'>
                            {cartItems.length === 0 ?
                                <h2 className='text-center'>No item added to the cart</h2>
                                :
                                (
                                    <>
                                        <table className="table bordered">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))}
                                            </tbody>
                                        </table>

                                    </>
                                )
                            }
                        </div>

                        <div className='col-md-4 mt-1'>
                            <div>
                            <h5 className='d-flex align-items-center justify-content-between'>Subtotal:
                            <span className='fw-bold fs-5'>${totalAmount}</span>
                            </h5>
                            </div>

                            <p>Taxes and shipping will calculate in checkout</p>

                           
                               <div className='row mt-5'>
                               <Link className='btn btn-dark text-white me-2 offset-2' to={'/shop'} style={{width: '300px'}}>Continue</Link>
                               
                               </div>
                               <div className='row mt-3'>
                               <Link className='btn btn-dark text-white me-2 offset-2' to={'/checkout'} style={{width: '300px'}}>Checkout</Link>
                               </div>

                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

const Tr = ({ item }) => {
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id));
    };

    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt={item.productName} width={100} height={100} />
            </td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>
                <button className='btn btn-danger' onClick={deleteProduct}><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default Cart;