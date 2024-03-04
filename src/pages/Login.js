import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signIn = async (e) => {
        // todo: signin
        e.preventDefault();
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                toast.success('Login successful!');
                setLoading(false);
                navigate('/checkout');

            });
    };


    return (
        <div>
            <section className='sectionLogin mt-5'>
                <div className='container '>
                    <div className='row mt-5'>
                        {loading ? 
                        <div className='col-md-6 text-center'>
                            Loading...
                        </div>
                        :
                        <div className='offset-md-3 col-md-6'>
                        <form onSubmit={signIn} className='bgFormLogin mt-5'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <label>Email</label>
                            <input className='form-control' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label>Password</label>
                            <input className='form-control' type='password' value={password} onChange={(e) => setPasword(e.target.value)} />


                            <button className='btn bg-light mt-5 offset-md-5 col-2 mb-2 text-dark' type='submit'>Login</button>

                            <p className='text-center'>Don't have an account? <Link to={'/signup'} className='text-primary'>
                                Create an account</Link>
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

export default Login;