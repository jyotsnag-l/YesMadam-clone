import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center">
      {/* Background Video / Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        {/* Logo */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bringing <span className="text-pink-500">Salon Expertise</span> to
          Your Doorstep <br />
          While Changing the Lives of Service Professionals
        </h1>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Download Yes Madam
          </a>
          <a
            href="#"
            className="border border-white px-6 py-3 rounded-full font-medium hover:bg-pink-500 hover:border-pink-500 hover:text-white transition"
          >
            Register as a Professional
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
