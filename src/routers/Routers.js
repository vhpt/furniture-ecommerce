import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Shop from '../pages/Shop';
import ProductDetail from './../pages/ProductDetail';
import Cart from './../pages/Cart';
import Checkout from './../pages/Checkout';
import Login from './../pages/Login';
import Signup from './../pages/Signup';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='shop/:id' element={<ProductDetail />} />
                <Route path='cart' element={<Cart />} />
                <Route path='checkout' element={<ProtectedRoute element={Checkout} />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </div>
    );
};

export default Routers;
