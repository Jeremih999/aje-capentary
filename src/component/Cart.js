import React from "react";
import cartItems from "../cartItems";
import { BsCartFill } from "react-icons/bs";

const Cart = () => {
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <div className="cart-items_container">
                <ul>
                    {cartItems.map((item) => (
                        <li>
                            <div className="cart-item">
                                <div className="cart-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div>
                                {item.name}
                                </div>
                                <div>
                                {item.price}
                                </div>
                                <div className="cart-inc">
                                    <button>-</button>
                                    <h3>2</h3>
                                    <button>+</button>
                                </div>
                                <button>X</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="cart-total">
                    <h1>Total Items in your cart</h1>
                    <h3>23</h3>
                </div>
                <button className="checkout-btn">Checkout Now <BsCartFill /></button>
            </div>
        </div>
    )
}

export default Cart
