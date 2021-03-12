import React, { useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const[products,setProuducts] = useState(first10)
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(product => product.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key,count);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                
                    {
                        products.map( product => <Product
                            key={product.key}
                            ShowAddToCart={true} 
                            handleAddProduct ={handleAddProduct}
                            product={product}> 
                            </Product>)
                    }
                
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;