import React from 'react'
import './SignUp.css'
import Login from './Login.js'

function SignUp() {
  return (
    <div className='signUp-main'>
      <h1>Now, setup your account 🔐</h1>
      <div className="signUp-container">
        <form className='signUp-form' action="">

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Your Name</label>
            <input type="text" className="signUp-input" />
          </div>

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Email</label>
            <input type="email" className="signUp-input" />
          </div>

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Mobile number</label>
            {/* <div className="signUp-mob">
              <p>+91</p>
            </div> */}
              <input type="text" className="signUp-input" />
          </div>

          <div className="signUp-field">
            <label htmlFor="" className="signUp-label">Password</label>
            <input type="password" className="signUp-input" />
          </div>

          <button className='signUp-btn'>Create My Account</button>
          <a href="/login">I already have an account, Log In</a>
        </form>
      </div>
    </div>
  )
}
export default SignUp