import React, { useState } from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  const [email, setEmail] = useState('user@example.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to your backend
    console.log('Form submitted');
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="account-settings-container">
      <div className="settings-header">
        <h1>SETTINGS</h1>
        <div className="profile-section">
          <h2>View profile</h2>
          <h3>Account</h3>
          <div className="account-links">
            <a href="#">Payment History</a>
            <a href="#">Notification</a>
          </div>
        </div>
      </div>

      <div className="account-form-container">
        <h2>Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Enter new password</label>
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Re-enter password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="save-button">
            Save changes
          </button>
          {saveSuccess && <div className="success-message">Changes saved successfully!</div>}
        </form>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">TheUniqueIQ</div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>About Us</h4>
              <p>The UniqueIQ is the first of its kind in Africa. An organisation that leverages best in class teachers.</p>
            </div>
            
            <div className="footer-column">
              <h4>Information</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Register</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Learning</h4>
              <ul>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Syllabus</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Helpful Links</h4>
              <ul>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Our Story</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Subscribe</h4>
              <div className="subscribe-form">
                <input type="email" placeholder="Enter your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>+2349080281275</p>
            <p>grazacteer@gmail.com</p>
            <p>2a Ibara housing estate kuto, Abeokuta</p>
            <p>Ogun state</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccountSettings;