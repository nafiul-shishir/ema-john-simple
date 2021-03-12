import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {ProductKey} = useParams()
    const product =fakeData.find(product => product.key===ProductKey);
    console.log(product);
    return (
        <div>
            <h1> {ProductKey} Coming Soon............</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;