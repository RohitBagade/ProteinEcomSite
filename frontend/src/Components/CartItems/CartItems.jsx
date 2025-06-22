import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cancel.png'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {

    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);


    return (
    <div className='cartitems'>
        <h1>Your Cart</h1>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                    <div key={e.id} className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                        <img className='remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                    </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Enter promo code" />
                        <button>APPLY</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems