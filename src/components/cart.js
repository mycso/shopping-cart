import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import formatMoney from "../lib/formatMoney";
import CartItem from "./cartItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
  } from '@fortawesome/free-solid-svg-icons';

const Cart = ({props}) => {
    const { showCart, cartItems, showHideCart } = useContext(CartContext);

    return  (
        <>
            {showCart && (
                <>
                    <div className="cart-wrapper">
                        <div style={{textAlign: 'left'}}>
                            <span 
                            style={{cursor: 'pointer', float: 'right'}} 
                            aria-hidden="true"
                            onClick={showHideCart}
                            ><FontAwesomeIcon icon={faTimes} />
                            </span>
                            <div className="cart-innerWrapper">
                                {cartItems.length === 0 ? (
                                    <h4>Cart is Empty</h4>) : (
                                    <ul>
                                        {cartItems.map(item => (
                                            <CartItem key={ Math.random().toString(36).substr(2, 9) } item={item} />
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="cart-cartTotal">
                                <div>
                                    Cart Total
                                </div>
                                <div></div>
                                <div className="ml-3">
                                    {formatMoney(cartItems.reduce((amount, item) => item.price + amount, 0))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </>
            )}
        </>
    );
};

export default Cart;