import React, { useContext } from 'react'
import { useState } from 'react';
import"./Navbar.css"
import logo from '../Assets/Liquor Studio Logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {

  const[menu,setmenu] = useState('Home');
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src ={logo} alt =""/>
      </div>
        <ul className="nav-menu">
          <li onClick={()=>{setmenu('Home')}}><Link style={{textDecoration:"none", color: "white"}} to ='/'>Home</Link>{menu==='Home'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('Whiskey')}}><Link style={{textDecoration:"none", color: "white"}} to ='/whiskey'>Whiskey</Link>{menu==='Whiskey'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('Wine')}}><Link style={{textDecoration:"none", color: "white"}} to ='/wines'>Wine</Link>{menu==='Wine'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('Vodka')}}><Link style={{textDecoration:"none",color: "white"}} to ='/vodka'>Vodka</Link>{menu==='Vodka'?<hr/>:<></>}</li>
          
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
          <Link to ="/login"><button>Login</button></Link>
          }
          
          <Link to ='/cart'><img src ={cart_icon} alt =""/></Link>
          <div className="nav-cart-count">
            {getTotalCartItems()}
          </div>
        </div>
    </div>
      
    
  )
}

export default Navbar
