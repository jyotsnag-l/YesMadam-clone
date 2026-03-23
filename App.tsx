import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Achievements from "./components/achievements";
import Services from "./components/Services";
import TreatmentEnquiry from "./components/TreatmentEnquiry";
import Explore from "./components/Explore"; 
import MediaCoverage from "./components/MediaCoverage"; 
import Reviews from "./components/Reviews"; // Celebrity Reviews Carousel
import Testimonials from "./components/Testimonials"; // ⭐ Customer Reviews
import AppDownload from "./components/AppDownload"; // ✅ App Download Section
import Footer from "./components/Footer"; // ✅ New Footer Section

const App: React.FC = () => {
  return (
    <div>
      {/* ✅ Navbar */}
      <Header />

      {/* ✅ Hero Section */}
      <Hero />

      {/* ✅ Milestones / Achievements Section */}
      <Achievements />

      {/* ✅ Services Section */}
      <Services />

      {/* ✅ Treatment Enquiry Section */}
      <TreatmentEnquiry />

      {/* ✅ Explore Section */}
      <Explore />

      {/* ✅ Media Coverage Section */}
      <MediaCoverage />

      {/* ✅ Celebrity Reviews Section */}
      <Reviews />

      {/* ✅ Customer Testimonials Section */}
      <Testimonials />

      {/* ✅ App Download Section */}
      <AppDownload />

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
