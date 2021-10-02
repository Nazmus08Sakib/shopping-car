import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first10 = fakeData.splice(0,10);
    const [products, setProducts]=useState(first10);
    const [cart, setCart]=useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        
        const previousCart = productKey.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        });
        setCart(previousCart);
    },[])


    const handleAddProduct =(product)=>{
        const toBeAddedkey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedkey);
        let count = 1;
        let newCart;
        if(sameProduct){
             count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !==toBeAddedkey);
            newCart =[...others, sameProduct];
        }else{
            product.quantity = 1;
            newCart =[...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className='twin-container'>
            <div className='product-container'>
                <ul>
                    {
                        products.map(pd =><Product 
                            key={pd.key}
                            handleAddProduct ={handleAddProduct}
                            product={pd}
                            ></Product>)
                        
                    }
                </ul>
            </div>
            <div className ='cart-container' >
                    <Cart cart={cart}></Cart>

            </div>
    
          
        
        </div>
            
            
    );
};

export default Shop;