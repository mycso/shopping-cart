import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import formatMoney from '../lib/formatMoney';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
  } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({item}) => {

    const { removeItem } = useContext(CartContext);

    return (
       <li className="cartItem-item">
            <div className="image-holder">
                <img src="/images/lemon-slice.jpg" />
            </div>
            <p>{item.name}</p>
            <p>{formatMoney(item.price)}</p>
            <button className="cartItem-button btn btn-danger" onClick={() => removeItem(item.name)}><FontAwesomeIcon icon={faTimes} /></button>
       </li>
    );
};

export default CartItem;