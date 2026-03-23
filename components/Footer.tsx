import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const cities = [
    "Agra","Ahmedabad","Aligarh","Amritsar","Bareilly","Bengaluru","Bhagalpur","Bhopal","Bhubaneswar",
    "Chandigarh","Cuttack","Dehradun","Delhi","Faridabad","GandhiNagar","Ghaziabad","Gorakhpur",
    "Greater Noida","Gurugram","Gwalior","Haridwar","Haldwani","Hyderabad","Indore","Jabalpur","Jaipur",
    "Jammu","Jhansi","Kanpur","Lucknow","Ludhiana","Meerut","Mohali","Moradabad","Mumbai","Mysuru",
    "Nagpur","Noida","Patna","Panchkula","Prayagraj","Pune","Raipur","Roorkee","Rudrapur","Srinagar",
    "Tirupati","Ujjain","Varanasi","Vijayawada","Zirakpur","New Delhi"
  ];

  return (
    <footer className="footer">
      {/* ✅ Section Heading aligned left */}
      <h2 className="footer-heading">More About Yes Madam Services</h2>

      {/* ✅ Brand Line with Flag Emoji */}
      <p className="brand-line">
        100% Purely Bhartiya Brand <span role="img" aria-label="India">🇮🇳</span>
      </p>
      <h3 className="city-heading">We Are Live In 50+ Cities</h3>

      {/* ✅ Cities with "|" separators */}
      <div className="city-list">
        {cities.map((city, index) => (
          <span key={index}>
            {city}
            {index < cities.length - 1 && " | "}
          </span>
        ))}
      </div>

      <hr />

      {/* ✅ Footer Bottom */}
      <div className="footer-bottom">
        <div className="about">
          <h4>About <span className="logo-text">yes<span className="pink">madam</span></span></h4>
          <p>
            Yes Madam is India’s Prominent Salon at Home, launched in 2016 and currently
            functioning in 50+ cities in India. Our commitment is to deliver quality salon and
            wellness services at home with top-level professionals & excellent leading products.
          </p>
        </div>

        <div className="links">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Yes Madam Salon</li>
            <li>Corporate Wellness</li>
            <li>Register as a Professional</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="contact">
          <h4>Facing issues? Reach us out at:</h4>
          <p>Contact Us</p>
          <p>support@yesmadam.com</p>
        </div>

        {/* ✅ Mobile App Section */}
        <div className="apps">
          <h4>Experience the Yes Madam Mobile App</h4>
          <div className="app-buttons">
            <img src="/applogos/playstore.jpg" alt="Google Play" />
            <img src="/applogos/applestore.jpg" alt="App Store" />
          </div>
          <p>Show some love 💗 on social media</p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p><left>Copyright 2017-2024 @YesMadam | Powered by: Notion Online Solutions Private Limited</left>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
