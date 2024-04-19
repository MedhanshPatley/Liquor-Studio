import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from'../Components/Item/Item'

const Category = (props) => {
  const {all_product} =useContext(ShopContext)
  return (
    <div className='shop_cateory'>
      <img className='shopcategory_banner'src={props.banner} alt="" />
      <div className="shopcategory_product">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item Key={i} id ={item.id} name ={item.name} image ={item.image} new_price ={item.new_price} old_price ={item.old_price}/>
          }
          else{
            return null;
          }


        })}
      </div>
      
        
    </div>
  )
}

export default Category
