import React from 'react'
import { useState } from 'react';
import"./Navbar.css"
import logo from '../Assets/Liquor Studio Logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {

  const[menu,setmenu] = useState('Home');

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src ={logo} alt =""/>
      </div>
        <ul className="nav-menu">
          <li onClick={()=>{setmenu('Home')}}>Home{menu==='Home'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('Whiskey')}}>Whiskey{menu==='Whiskey'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('Wine')}}>Wine{menu==='Wine'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('Vodka')}}>Vodka{menu==='Vodka'?<hr/>:<></>}</li>
          
        </ul>
        <div className="nav-login-cart">
          <button>
            Login
          </button>
          <img src ={cart_icon} alt =""/>
          <div className="nav-cart-count">
            0
          </div>
        </div>
    </div>
      
    
  )
}

export default Navbar
