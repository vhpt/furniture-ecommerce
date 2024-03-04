import React from 'react'
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import {toast } from 'react-toastify';

const ProductCard = ({item}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }));

    toast.success('Product added successfully!');
  }
  return (
        <div className='col-lg-3 col-md-4 mt-3' style={{width: '100%'}}>
                <img src={item.imgUrl} alt={item.productName} style={{ width: '220px', height: '200px', marginBottom:'5px' }} height={120}  className='motion'/>
            <h5><Link to={`/shop/${item.id}`}>{item.productName}</Link></h5>
            <p>{item.category}</p>
            <div style={{ display: 'inline-flex' }}>
                <h5>${item.price}</h5>
                <button className='btn btn-outline-dark' style={{ float: 'right', marginLeft: '120px', borderRadius: '30%' }} onClick={addToCart}><i className="bi bi-plus"></i></button>
            </div>     
    </div>


  )
}

export default ProductCard
