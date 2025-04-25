import React from "react";
import "./Homepage.css";
import Man from "../../assets/man.png";

const Homepage = () => {

  const courses = [
    { title: "Artificial Intelligence" },
    { title: "Age & HR Development" },
    { title: "Training & Business" },
    { title: "Data & Analytics" },
    { title: "Programming" },
    { title: "More" },
  ];

  const featuredCourses = [
    { title: "The Creative Journey", author: "Ogungbemi Tobi", price: "$30"},
    { title: "Introduction to Personal Benefits", author:"Ogungbemi Tobi", price: "$30" },
    {
      title: "Brand Identity and Strategy in Business",
      author: "Ogungbemi Tobi", price: "$30"
    },
  ];

  const testimonials = [
    {
      name: "Mary",
      text: "The following is a life haven't been taught by many of us. It's a great way to learn about how to improve the skills and experience of people who have learned their experiences.",
    },
    { name: "Mary", text: "Testimonial text here..." },
    { name: "Mary", text: "Another testimonial text..." },
  ];

  const partners = ["Google", "Andeia", "Intel88"];

  return (
    <div className="body">

    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/categories">Course Categories</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/login">Log in</a></li>
        <li><a href="/signup" className="signup-btn">Sign up</a></li>
      </ul>
    </nav>

      <section className="hero">
        <div className="hero-words">
          <h1>You Can Start Learning At Any Age!</h1>
          <p>
            Our courses are designed to provide training levels as an estimated
            land to the end point as possible
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Search For Course</button>
            <button className="secondary-btn">Browse Courses</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={Man} alt="Hero"/>
        </div>
      </section>

      <section className="course-categories">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {courses.map((course, index) => (
            <div key={index} className="category-card">
              <h3>{course.title}</h3>
              <span>{course.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="featured-grid">
          {featuredCourses.map((course, index) => (
            <div key={index} className="featured-card">
              <h3>{course.title}</h3>
              <p>{course.author}</p>
              <span>$30</span>
            </div>
          ))}
        </div>
      </section>

      <section className="value-proposition">
        <h2>Utilizing your time and resources for creativity</h2>
        <p>Egazian defined this: all transport model musicians technique</p>
        <h3>Build_Create, Innovate with our top notch courses online</h3>
        <p>Egazian defined this: all transport model musicians technique</p>
        <button className="primary-btn">Explore Courses</button>
      </section>

      <section className="testimonials">
        <h2>What Our Students Have To Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="avatar">{testimonial.name.charAt(0)}</div>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partners">
        <h2>Our Tutors And Mentors Come From Leading Companies</h2>
        <div className="partner-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              {partner}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
