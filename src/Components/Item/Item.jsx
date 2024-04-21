import React, { useContext } from 'react'
import './Item.css'
import { ShopContext } from '../../Context/ShopContext'


const Items = (props) => {
  const {addToCart} = useContext(ShopContext);

  return (
    <div className='item'>
      <img src={props.image}/>
      <p className='item_name'>
        {props.name}
      </p>
      <div className="item_prices">
        <div className="item_price_new">
        Rs.{props.new_price}/-
        </div>
        <div className="item_price_old">
        Rs.{props.old_price}/- 
        </div>
      </div>
      <button className="Add_to_cart" onClick={()=>{addToCart(props.id)}} >Add to cart</button>
      
    </div>
  )
}

export default Items
