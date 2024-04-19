import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}  = useContext(ShopContext);
  return (
    
    <div className='cartitems'>
        <div className='cartitem_format_main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                <div className="cartitem_format cartitem_format_main">
                    <img src={e.image} alt="" className='carticon_product_icon' />
                    <p>{e.name}</p>
                    <p>Rs.{e.new_price}</p>
                    <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                    <p>Rs.{e.new_price*cartItems[e.id]}</p>
                    <img className='cartitem_remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>

            }
            return null
        })}
        <div className="cartitems_down">
            <div className="cartitems_total">
                <p>Cart Total</p>
                <div>
                    <div className="cartitems_total_item">
                        <p>SubTotal</p>
                        <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems_total_item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems_total_item">
                        <p>Total</p>
                        <p>Rs.{getTotalCartAmount()}</p>
                    </div>
                    <button className='checkout'>Procced to Checkout</button>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CartItems
