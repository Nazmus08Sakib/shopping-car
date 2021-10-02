import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    console.log(product);
    return (
        <div>
            <h1>Product detail {productkey} comming sooon!!!!</h1>
        </div>
    );
};

export default ProductDetail;