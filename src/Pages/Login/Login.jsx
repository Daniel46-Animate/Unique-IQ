import React from 'react'
import './Login.css'
import { useState } from 'react';
// import { useNavigate } from 'react-router';
// import AuthForm from '../components/AuthForm';

const Login = () => {
   const [formData, setFormData] = useState({
    email: '',
    password: '',
   })

   const handleChange = (e)=> {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   }

  return (
    <div className='body'>
       <div class="login-container">
        <h1>SIGN IN</h1>
        <p class="tagline">Build skills for today, tomorrow, and beyond.<br/>Education to future-proof your career</p>
        
        <form  onSubmit={handleSubmit}  id="loginForm">
            <div class="input-group">
                <label for="email">Email Address</label>
                <input type="email" placeholder="Email Address" id="email" name="email"  value={formData.email} onChange={handleChange}  required/>
                <div class="error-message" id="email-error">Please enter a valid email address</div>
            </div>
            
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" name="password" value={formData.email} onChange={handleChange} required minlength="6"/>
                <div class="error-message" id="password-error">Password must be at least 6 characters</div>
            </div>
            
            <button type="submit" class="login-btn">SIGN IN</button>
        </form>
        
        <div class="footer">
            Don't have an account? <a href="/signup">Sign up</a><br/>
            <a href="/forgot-password">Forgot password?</a>
        </div>
    </div>

    </div>
  )
}

export default Login