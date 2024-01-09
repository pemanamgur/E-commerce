import React from 'react'
import  './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-feilds'>
          <input type='text' placeholder='Your name'/>
          <input type='email' placeholder='Your email'/>
          <input type='pasword' placeholder='Your password'/>
        </div>
        <button>continue</button>
         <p className='loginsignup-login'>Already have an account <span>login here</span></p>
        <div className='loginsingup-agree'>
           <input type='checkbox' name='' id='' />
            <p>By continuing ,  I agree all terms  and conditons</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
