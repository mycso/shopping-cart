import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShoppingCart,
  } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../context/cart/CartContext';

const Header = (props) => {

    const { cartItems, showHideCart } = useContext(CartContext);

    return (
        <div className="main-header col">
            <div className="logo"><img src="/images/vitl_logo.svg" /></div>
            <span onClick={showHideCart}><FontAwesomeIcon icon={faShoppingCart} /></span>
            {cartItems.length > 0 && 
                <div className="item_count"><span>{cartItems.length}</span></div>
            }
        </div>
    );
};

export default Header;