import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart]=useState([]);
    const removeProduct = (productkey) =>{
        const cartNew = cart.filter(pd => pd.key !== productkey);
        setCart(cartNew);
        removeFromDatabaseCart(productkey);
    }

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);

        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key ===key);
            product.quantity = savedCart[key];
            return product;
        });
            setCart(cartProducts);
    },[])
    return (
        <div className="twin-container">
              <div className="product-container">
                {
                        cart.map(pd => <ReviewItem 
                            key={pd.key}
                            removeProduct = {removeProduct}
                            product={pd}></ReviewItem>)
                    }
              </div>
              <div className="cart-container">
                 <Cart cart={cart}></Cart>
              </div>
        </div>
    );
};

export default Review;