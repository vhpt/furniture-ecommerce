import React, {useState } from 'react';
import './css/ProductDetail.css';
import CommonSection from './../components/UI/CommonSection';
import { useParams } from 'react-router-dom';
import products from './../assets/data/products';
import ProductList from './../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(item => item.id === id);

    const { imgUrl, productName, price, category,
        description, avgRating, other, shortDesc } = product;

    const [activeTab, setActiveTab] = useState('desc');

    const relatedProducts = products.filter(item => item.category === category);


    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,
        }));

        toast.success('Product added successfully!');
    }
    return (
        <div>
            <CommonSection name={productName} />

            <section className='productDetail'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-3 mt-0 mt-0'>
                            <img src={imgUrl} alt={productName} width={300} height={300} />
                        </div>
                        <div className='offset-md-2 col-md-6'>
                            <div className='detailContent'>
                                <h2>{productName}</h2>
                                <div className='productRating'>
                                    <div className='stars'>
                                        <span><i className="bi bi-star-half"></i></span>
                                        <span><i className="bi bi-star-fill"></i></span>
                                        <span><i className="bi bi-star-fill"></i></span>
                                        <span><i className="bi bi-star-fill"></i></span>
                                        <span><i className="bi bi-star-fill"></i></span>
                                    </div>
                                    <p className='textRating'>(<span className='numberRating'>{avgRating}</span> ratings)</p>
                                </div>

                                <div className=''>
                                <h3>${price}</h3>
                                <p>Category: {category.toUpperCase()}</p>
                                </div>

                                <p>{shortDesc}</p>

                                <button className='btn btn-dark mt-2 motion' onClick={addToCart}>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='desRev mt-5'>
                <div className='revContent'>
                    <div className='container'>
                        <div className='row d-flex'>
                            <button className={`border-0 bg-light w-auto ${activeTab === "desc" ? "activeTab" : ""}`} onClick={() => setActiveTab('desc')}>Description</button>
                            <button className={`border-0 bg-light w-auto ${activeTab === "oth" ? "activeTab" : ""}`} onClick={() => setActiveTab('oth')}>Other</button>
                        </div>
                        <div className='row mt-3 mb-5'>
                            {activeTab === "desc" ?
                                <div className='textDesc'>
                                    {description}
                                </div>
                                :
                                <div className='textOth'>{other}</div>}
                        </div>

                        {/* related products */}
                        <section className='relatedProducts'>
                            <div className='container'>
                                <div className='row'>
                                    
                                        <h3>You might also like</h3>

                                        <ProductList data={relatedProducts}/>
                                  
                                </div>
                            </div>
                        </section>


                    </div>
                </div>


            </section>


        </div>
    );
};

export default ProductDetail;