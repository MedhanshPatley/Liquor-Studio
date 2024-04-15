import React from 'react'
import './Item.css'


const items = (props) => {
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
      <button className='Add_to_cart'>Add to cart</button>
      
    </div>
  )
}

export default items
