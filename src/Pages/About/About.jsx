import React from 'react';
import './About.css';
import Unique from '../../assets/Unique IQ.png'

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <a href='/'>
            <img src={Unique} alt='logo' />
          </a>
        </div>
        <div className="nav-links">
          <a href="/Preview">Course Categories</a>
          <a href="/about">About Us</a>
          <a href="/login">Log In</a>
          <a href="/signup" className="signup-btn">Sign up</a>
        </div>
        <button className="mobile-menu-btn">☰</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Discover the creativity in you.</h1>
        <div className="hero-text">
          <p>
            Mauris suspendisse ut urna faucibus aenean nisi blandit mauris, erat. Nunc lorem vel odio viverra quam.
            Turpis sed sit dictum habitant dignissim quam suscipit vitae. Enim sollicitudin risus interdum etiam
            volutpat pellentesque non. Tellus vestibulum nisi, vitae, nullam pellentesque vel.
          </p>
          <p>
            Mauris suspendisse ut urna faucibus aenean nisi blandit mauris, erat. Nunc lorem vel odio viverra quam.
            Turpis sed sit dictum habitant dignissim quam suscipit vitae. Enim sollicitudin risus interdum etiam
            volutpat pellentesque non. Tellus vestibulum nisi, vitae, nullam pellentesque vel.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>At UniqelQ, We Inspire students to:</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <h3>To be Creative</h3>
            <p>Tellus vestibulum nisi, vitae, nullam pellentesque vel</p>
          </div>
          <div className="mission-card">
            <h3>To be Creative</h3>
            <p>Tellus vestibulum nisi, vitae, nullam pellentesque vel</p>
          </div>
          <div className="mission-card">
            <h3>To be Creative</h3>
            <p>Tellus vestibulum nisi, vitae, nullam pellentesque vel</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Be whom you desire to be with us today</h2>
        <p>
          Turpis sed sit dictum habitant dignissim quam suscipit vitae. Enim sollicitudin risus interdum etiam
        </p>
        <button className="explore-btn">Explore Courses</button>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Our Tutors And Mentors Come From Leading Companies</h2>
        <div className="company-logos">
          <span>Google</span>
          <span>Andela</span>
          <span>Intella®</span>
          <span>Flutterwave®</span>
          <span>paystack</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3>The UniquelQ</h3>
            <h4>About Us</h4>
            <p>The UniquelQ is the first of its kind in Africa. An organisation that leverages best in class teachers.</p>
            <h4>Contact Us</h4>
            <p>+2349080031275</p>
            <p>gptastercl@gmail.com</p>
            <p>2a Ibara housing estate hub, Abebkata Open state</p>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h4>Information</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Log In</a></li>
                <li><a href="/story">Our Story</a></li>
                <li><a href="/register">Register</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Learning</h4>
              <ul>
                <li><a href="/courses">Course</a></li>
                <li><a href="/spatibus">Spatibus</a></li>
                <li><a href="/pricing">Pricing</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Helpful Links</h4>
              <ul>
                <li><a href="/support">Customer Support</a></li>
                <li><a href="/login">Log In</a></li>
                <li><a href="/story">Our Story</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Subscribe</h4>
              <p>New per land</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;