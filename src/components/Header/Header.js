import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import useAuth from './../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const Header = () => {
    const [activePage, setActivePage] = useState(null);

    const handleItemClick = (page) => {
        setActivePage(page);
    };

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
   


    const { currentUser } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out!');
            navigate('/home');
        })
        .catch((err) => {
            toast.error(err.message);
        });
    }

    const handleLogin = () => {
        navigate('/login');
    }

    const handleSignup = () => {
        navigate('/signup');
    }
    return (
        <div className='container marginBottom'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4 offset-1" to={""}>WStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse offset-md-2" id="navbarNav" style={{ fontSize: '17px' }}>
                        <ul className="navbar-nav col-md-8">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={"/home"} style={{ fontWeight: activePage === "/home" ? "bold" : "" }} onClick={() => handleItemClick("/home")}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/shop"} style={{ fontWeight: activePage === "/shop" ? "bold" : "" }} onClick={() => handleItemClick("/shop")}>Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/cart"} style={{ fontWeight: activePage === "/cart" ? "bold" : "" }} onClick={() => handleItemClick("/cart")}>Cart</Link>
                            </li>
                        </ul>

                        <div className="nav_buttons">
   

                            <Link className="position-relative me-4" to={'/cart'}>
                                <i className="bi bi-bag fs-5 p-1"></i>
                                <span className="position-absolute top-0 start-102 translate-middle badge rounded-pill bg-dark">
                                    {totalQuantity}
                                </span>
                            </Link>
                        </div>

                        <div>
                            {currentUser ? (<button className='btn btn-outline-dark me-2' onClick={handleLogout}>Logout</button>)
                                :
                            (<>
                                <button className='btn btn-outline-dark me-2' onClick={handleLogin}>
                                   Login</button>
                                <button className='btn btn-outline-dark me-2' onClick={handleSignup}>Signup</button>
                                </>
                                )
                            }



                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
