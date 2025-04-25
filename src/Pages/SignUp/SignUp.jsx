import React from 'react';
// import { useNavigate } from 'react-router';
import { useState } from 'react'
import './SignUp.css';


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="body">
        
    <div class="container" id="container">
        <div class="form-container">
            <div class="header">
                <h1>Create your account</h1>
                <p class="subtitle">Build skills for today, tomorrow, and beyond.</p>
                <p class="subtitle">Education to future-proof your career</p>
            </div>
            
            <form onSubmit={handleSubmit} id="signup-form">
                <div class="form-group">
                    <div class="name">
                    <input type="text" id="first-name" placeholder="First Name"  name="first-name"  
            onChange={handleChange} required/>
                    <input type="text" id="last-name" placeholder="Last Name" name="last-name"  
            onChange={handleChange} required/>
                    </div>
                </div>
                
                <div class="form-group">
                    <input type="email" id="email" placeholder="Email address"  name="email"   value={formData.email}
            onChange={handleChange} required/>
                </div>
                
                <div class="form-group">
                    <div>
                    <input type="password" id="password" placeholder="Password" name="password"   value={formData.password}
            onChange={handleChange} required/>
                    <input type="password" id="confirm-password" placeholder="Confirm Password" name="confirm-password"  
             required/>
                    </div>
                </div>
                
                <div class="terms">
                    <p>By clicking Sign Up, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</p>
                </div>
                
                <button type="submit" class="signup-btn">SIGN UP</button>
            </form>
            
            <div class="login-link">
                <p>Already have an account? <a href="#">Sign In</a></p>
            </div>
        </div>

    </div>

    </div>
  );
};

export default SignUp;
