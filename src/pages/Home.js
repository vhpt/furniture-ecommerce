import React, { useEffect, useState } from 'react';
import './css/Home.css';
import hero from '../assets/images/hero-img.png';
import Services from '../services/Services';

import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';
import counter from '../assets/images/counter-timer-img.png'
import { Link } from 'react-router-dom';

const Home = () => {
    const [trendProduct, setTrendProduct] = useState([]);
    const [bestSales, setBestSales] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularCategory, setPopularCategory] = useState([]);

    useEffect(() => {
        const filterTrendProducts = products.filter(item => item.category === "chair");
        const filterBestSales = products.filter(item => item.category === "sofa");
        const filterMobileProducts = products.filter(item => item.category === "mobile");
        const filterWirelessProducts = products.filter(item => item.category === "wireless");
        const filterPopularCategory = products.filter(item => item.category === "watch");


        setTrendProduct(filterTrendProducts);
        setBestSales(filterBestSales);
        setMobileProducts(filterMobileProducts);
        setWirelessProducts(filterWirelessProducts);
        setPopularCategory(filterPopularCategory);
    }, []);

    //check length aftar scroll
    const [buttonOnTop, setButtonOnTop] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            let length = window.scrollY;
            //console.log(length);

            if(length >= 2000){
                setButtonOnTop(true);
            }
            else{
                setButtonOnTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);   
    }, []);

    const handleOnTop = () => {
       window.scrollTo({
        top: 0,
        behavior: "smooth",
       });
    }

    return (
        <div>
            <div className='bgColorBanner'>
                <div className='container'>
                    <div className='row mb-3 heroContent'>
                        <div className='col-md-6'>
                            <p>Trending products in 2024</p>
                            <h3>Make Your Interior More</h3>
                            <h3>Minimalistic & Modern</h3>

                            <p>
                                Trending products in 2024 Make Your Interior More Minimalistic & Modern.
                                Trending products in 2024 Make Your Interior More Minimalistic & Modern.
                                Trending products in 2024 Make Your Interior More Minimalistic & Modern
                            </p>
                            <Link className='btn btn-dark p-2 mt-3 text-white' to={'/shop'}>Shop now</Link>
                        </div>
                        <div className='col-md-6'>
                            <img src={hero} alt='hero' className='' />
                        </div>

                    </div>
                </div>
            </div>

            <Services />

            <section className='trendProducts mt-5'>
                <h1 className='text-center'>Trending products</h1>
                <ProductList data={trendProduct} />
            </section>

            <section className='bestSales mt-5'>
                <h1 className='text-center'>Best Sales</h1>
                <ProductList data={bestSales} />
            </section>

            <section className='timmerCount mt-5'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-7'>
                            <div className='timerContent'>
                                <h4 className='text-white'>Limited Offers</h4>
                                <h3 className='text-white'>Quantity Armchair</h3>
                            </div>

                            <p className='text-white'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                            </p>
                            <button className='btn bg-white motion mt-5'>
                                <Link to={'/shop'} >Visit Store</Link>
                            </button>
                        </div>
                        <div className='col-md-5'>
                            <img src={counter} alt={'g'} />
                        </div>
                    </div>
                </div>

            </section>

            <section className='newArrivals mt-5'>
                <h1 className='text-center'>New Arrivals</h1>
                <ProductList data={mobileProducts} />
            </section>

            <section className='popularCategory mt-5'>
                <h1 className='text-center'>Popular in Category</h1>
                <ProductList data={popularCategory} />
                <ProductList data={wirelessProducts} />
            </section>

            {buttonOnTop && <button className='btn btn-dark btnOnTop' onClick={handleOnTop}><i className="bi bi-arrow-bar-up"></i></button>}

        </div>
    );
};

export default Home;