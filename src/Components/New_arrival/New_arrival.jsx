import React from 'react'
import './New_arrival.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const New_arrival = () => {
  return (
    <div className='New_arrival'>
      <h1>NEW ARRIVAL</h1>
      <hr/>
      <div className="new_arrival_item">
        {data_product.map((item,i)=>{
            return <Item Key={i} id ={item.id} name ={item.name} image ={item.image} new_price ={item.new_price} old_price ={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default New_arrival
