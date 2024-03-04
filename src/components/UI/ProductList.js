import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({data}) => {
    return (
          <div className='container'>
            <div className='row'>
          {data?.map((item, index)  => (
            <div key={index} className="col-lg-3 col-md-4">
              <ProductCard item={item} />
            </div>
          ))}
          </div>
          </div>
     
    );
};

export default ProductList;