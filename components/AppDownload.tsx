import React from "react";
import "./AppDownload.css";

const AppDownload: React.FC = () => {
  return (
    <section className="app-download">
      <div className="content">
        {/* Left side image */}
        <div className="left">
          <img src="/teampiic/team.jpg" alt="Team" className="team-image" />
        </div>

        {/* Right side text */}
        <div className="right">
          <h2>Get the Yes Madam App</h2>
          <p>We will send you a link. Open it on your phone to download app.</p>

          {/* Mobile Number Form */}
          <div className="form">
            <span className="prefix">+91</span>
            <input type="text" placeholder="Enter Mobile Number" />
            <button>Share App Link</button>
          </div>

          {/* Store Links */}
          <p className="download-text">Download the app from</p>
          <div className="store-links">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/applogos/playstore.jpg" alt="Play Store" />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/applogos/applestore.jpg" alt="App Store" />
            </a>
          </div>

          {/* Extra Link */}
          <p className="small-text">
            Or you can also access our services at{" "}
            <a
              href="https://www.yesmadam.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.yesmadam.com
            </a>{" "}
            from your mobile phone
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
