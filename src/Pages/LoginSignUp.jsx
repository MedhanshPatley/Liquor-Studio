import React from 'react'
import loginsigup_img from '../Components/Assets/loginsignup.jpg'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup_img">
        <img src={loginsigup_img} alt="" />
      </div>
      <div className="loginsignup_container">
        <p className='signup'>SignUp</p>
          <div className="loginsignup_fields">
            <div className="names">
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
            </div>
            <div className="email-pass">
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Password' />
            </div>
          </div>
        <button>Create Account</button>
        <div className="ask">
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default LoginSignUp
