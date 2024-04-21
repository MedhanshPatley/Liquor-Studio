import React, { useState } from 'react'
import loginsigup_img from '../Components/Assets/loginsignup.jpg'
import './CSS/LoginSignUp.css'


const LoginSignUp = () => {
  const[state,setState] =useState("Login");
  const[formData, setFormData] =useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }

  const login = async()=>{
    console.log('Login Function Executed',formData);
    let reaponseData;
    await fetch('http://localhost:4000/login',{
      method:'Post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',

      },
      body:JSON.stringify(formData),
 
    }).then((response)=>response.json()).then((data)=>reaponseData=data)

    if(reaponseData.success){
      localStorage.setItem('auth-token',reaponseData.token);
      window.location.replace('/');
    }
    else{
      alert(reaponseData.error);
    }
    
  }

  const signup = async()=>{
    console.log('Sign Up Function Executed',formData);
    let reaponseData;
    await fetch('http://localhost:4000/signup',{
      method:'Post',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',

      },
      body:JSON.stringify(formData),
 
    }).then((response)=>response.json()).then((data)=>reaponseData=data)

    if(reaponseData.success){
      localStorage.setItem('auth-token',reaponseData.token);
      window.location.replace('/');
    }
    else{
      alert(reaponseData.error);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup_img">
        <img src={loginsigup_img} alt="" />
      </div>
      <div className="loginsignup_container">
        <p className='signup'>{state}</p>
          <div className="loginsignup_fields">
            <div className="names">
              {state==='Sign Up'?<input name ='firstname'value ={formData.firstname} onChange={changeHandler}type="text" placeholder='First Name'className='firstname' />:<></>}
             {state==="Sign Up"?<input name ="lastname" value ={formData.lastname} onChange={changeHandler}type="text" placeholder='Last Name' className='lastname' />:<></>} 
            </div>
            <div className="email-pass">
              <input name="email" value ={formData.email} onChange={changeHandler} type="text" placeholder='Email' className='email'/>
              <input name ="password" value={formData.password} onChange={changeHandler}type="text" placeholder='Password' className='password' />
            </div>
          </div>
        <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
       
        <div className="ask">
        {state==='Sign Up'?<p className="loginsignup-login">
            Already have an account? <span onClick={()=>{setState('Login')}}>Login here</span>
          </p>:<p className="loginsignup-login">
            Create an account? <span onClick={()=>{setState('Sign Up')}}>Click here</span>
          </p>}
          
          
        </div>
        
      </div>
    </div>
  )
}

export default LoginSignUp
