import React from 'react';
import './Preview.css';

const Preview = () => {
  return (
    <div className="course-page">
      {/* Header Section */}
      <header className="course-header">
        <h1>Branding : Introduction to Personal Branding</h1>
        <div className="overview">Q&A</div>
      </header>

      {/* Main Content */}
      <main>
        {/* Announcement/About Section */}
        <section className="announcement">
          <h2>ABOUT THIS COURSE</h2>
          <p>Spark your skills in Branding! Go from a blank worksheet to pivot tables in 36 minutes. Great for interview prep.</p>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <h3>By the numbers</h3>
          <ul>
            <li>Skill level: Beginner Level</li>
            <li>Lectures: 14</li>
            <li>Students: 32473</li>
            <li>Video: 21–45m total mins</li>
            <li>Languages: English</li>
            <li>Captions: Yes</li>
          </ul>
        </section>

        {/* Certification Section */}
        <section className="certification">
          <h3>Certification</h3>
          <p>Get Uniqe IQ certificate by completing entire course.</p>
          <button className="download-btn">Download Certificate</button>
        </section>

        {/* Description Section */}
        <section className="description">
          <h3>Description</h3>
          <p>Augue volutpat in varikes est rhoncus quis viverea amet ipsum. Lectus sed met heridiret ut, purus urra, est incidunt sit pharetra volutpat. Donec amet, arcu dui sapien. Ac nam tortor sed et lectus vel viverea ultrices.</p>
          
          <h4>What You will learn</h4>
          <ul>
            <li>Create a value proposition for a brand: How it can be positioned and mapped.</li>
            <li>Develop a complete creative pitch.</li>
            <li>Examine Branding activities through the lens of Customer Experience.</li>
            <li>Learn how to produce meaningful and engaging content.</li>
          </ul>
        </section>

        {/* Instructor Section */}
        <section className="instructor">
          <h3>Qgungbemi Tobi</h3>
          <p>A world class developer and musician</p>
          <p>In quis cursus massa eu. Felientesque ac visamus enim viverea sapien ridicula. Nunc, cosiedentat at suspensibles venenades portum ridiculus aenean bibendum. Commodo sempre a nesus sapien at ruatus id integer viverea. Omnes et quizzend hac blandit faucibus gravida.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>The UniqueIQ is the first of its kind in Africa. An organization that leverages best in class students.</p>
          </div>
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li>Home</li>
              <li>Legal In</li>
              <li>Our Story</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Learning</h4>
            <ul>
              <li>Course</li>
              <li>StaffBox</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Helpful Links</h4>
            <ul>
              <li>Customer Support</li>
              <li>Legal In</li>
              <li>Our Story</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Subscribe</h4>
            <ul>
              <li>[Best method]</li>
              <li>[Successful]</li>
            </ul>
          </div>
        </div>

        <div className="contact-info">
          <h4>Contact Us</h4>
          <ul>
            <li>s249080281375</li>
            <li>grauamind@gmail.com</li>
            <li>2, Black housing center kuto, Alkohaza Ogun state.</li>
          </ul>
        </div>

        <div className="stats-bar">
          <span>1,000</span>
          <span>500</span>
          <span>Beginner level Students Projects</span>
        </div>
      </footer>
    </div>
  );
};

export default Preview;
