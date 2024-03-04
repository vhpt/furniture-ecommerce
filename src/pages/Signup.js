import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Signup.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                toast.success('Account created!');
                navigate('/login');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Email or password is invalid!');
            });
    }
    return (
        <div>
            <section className='sectionSignup mt-5'>
                <div className='container '>
                    <div className='row mt-5'>
                        {loading ? <div className='col-md-6 text-center'>
                            Loading
                        </div>
                            :
                            <div className='offset-md-3 col-md-6'>
                                <form onSubmit={signUp} className='bgFormSignup mt-5'>
                                    <h3 className='text-center mb-3'>Sign Up</h3>
                                    <label className='mt-2'>Name</label>
                                    <input className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)} />

                                    <label className='mt-2'>Email</label>
                                    <input className='form-control' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                                    <label className='mt-2'>Password</label>
                                    <input className='form-control' type='password' value={password} onChange={(e) => setPasword(e.target.value)} />

                                    <button className='btn bg-light mt-5 offset-md-5 col-3 mb-2 text-dark'>
                                        {loading ? 'Signup' : 'Signup'}
                                    </button>

                                    <p className='text-center'>Already have an account? <Link to={'/login'} className='text-primary'>
                                        Login</Link>
                                    </p>
                                </form>

                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;