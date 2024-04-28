import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Liquor Studio Logo(big).png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterst_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
   
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            

            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_social">
            <div className="footer_container">
                    <img src={instagram_icon} alt="" />
            </div>
            <div className="footer_container">
                <img src={pinterst_icon} alt="" />
            </div>
            <div className="footer_container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>
                Copyright @ 2024- All Right Resevered.
            </p>

        </div>
      
    </div>
  )
}

export default Footer
