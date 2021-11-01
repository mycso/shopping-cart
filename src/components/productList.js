import React, { useContext } from 'react';
import formatMoney from '../lib/formatMoney';
import CartContext from '../context/cart/CartContext';

const ProductList = ({ product, cartTul }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-item">
            <div className="image-holder">
                <img src="/images/lemon-slice.jpg" />
            </div>
            <p>{product.name}</p>
            <p>{formatMoney(product.price)}</p>
            <div className="d-flex justify-content-center">
                {product.nutrients.map((product, index) => (
                    <>
                    <p key={index.id} className="px-3 font-weight-normal"> {product.amount} mcg</p>
                    </>
                ))}
            </div>
            <button disabled={cartTul > 1600} className="btn btn-warning circle-btn" onClick={() => addToCart(product)}>Add To Basket</button>
        </div>
    );
};

export default ProductList;