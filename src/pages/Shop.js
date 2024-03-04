import React, { useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import products from '../assets/data/products';
import ProductList from './../components/UI/ProductList';
import './css/Shop.css';


const Shop = () => {
    const [productData, setProductData] = useState(products);
    const [filterValue, setFilterValue] = useState('');

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
    
        if (selectedValue === 'sofa' || selectedValue === 'wireless' || selectedValue === 'chair' || selectedValue === 'mobile' || selectedValue === 'watch') {
            const filteredProducts = products.filter(item => item.category === selectedValue);
            setProductData(filteredProducts);
            setFilterValue(selectedValue);
        } else {
            setFilterValue('');
            setProductData(products); 
        }
    };

    const handleSortBy = (e) => {
        const sortValue = e.target.value;

        if(sortValue === 'ascending'){
            const sortProducts = products.filter(
                item => item.productName.length >= 20);

                setProductData(sortProducts);
        }
        else{
            const sortProducts = products.filter(
                item => item.productName.length < 20);

                setProductData(sortProducts);
        }

        
        
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value;

        const searchProducts = products.filter(
            item => item.productName.toLowerCase().includes(searchValue.toLowerCase()));

            setProductData(searchProducts);
    }

    return (
        <div>
            <CommonSection name={'Products'}/>
            <section>
                <div className='container'>
                    <div className='row mb-2 mt-5'>
                        <div className='col-md-3 mt-2'>
                            <select className="form-select" aria-label="Default select example" onChange={handleFilter} value={filterValue}>
                                <option disabled>Filter By Category</option>
                                <option value="wireless">Wireless</option>
                                <option value="sofa">Sofa</option>
                                <option value="chair">Chair</option>
                                <option value="mobile">Mobile</option>
                                <option value="watch">Watch</option>
                            </select>
                        </div>
                        <div className='col-md-3 mt-2'>
                            <select className="form-select" aria-label="Default select example" onChange={handleSortBy}>
                                <option disabled>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                        <div className='offset-md-2 col-md-3 mt-2'>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" onChange={handleSearch} />
                                <span><i className="bi bi-search"></i></span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section className='productList pt-0 mt-0'>
                <div className='container'>
                <div className='row'>
                {productData.length === 0 ? <h1>No products are found!</h1>
                : <ProductList data={productData}/>}
                </div>
               
                </div>
                

            </section>
        </div>
    );
};

export default Shop;