import React from 'react'
import './Item.css'

const items = (props) => {
  return (
    <div className='item'>
      <img src={props.image}/>
      <p>
        {props.name}
      </p>
      <div className="item_prices">
        <div className="item_price_new">
        Rs. {props.new_price}/-
        </div>
        <div className="item_price_old">
        Rs. {props.old_price}/-

        </div>
      </div>
      
    </div>
  )
}

export default items
