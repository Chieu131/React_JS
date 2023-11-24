import React from "react";
import products from "../data/Products";
import Product from './Product';

const ProductList = () => {
    return (
        <div className="PricingPage">
            <h2>Our Products</h2>
            <div className="PricingList">
         {products.map((product, index) => (
            <Product key= {index} {...product} />
         ))}
            </div>
        </div>
        
    );
};
export default ProductList;