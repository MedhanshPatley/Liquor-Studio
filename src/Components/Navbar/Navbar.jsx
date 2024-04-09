import React from 'react'
import"./Navbar.css"
import logo from '../Assets/Liquor Studio Logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src ={logo} alt =""/>
      </div>
        <ul className="nav-menu">
          <li>Home <hr/></li>
          <li>Category</li>
          
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
