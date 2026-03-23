import React from "react";

const Explore: React.FC = () => {
  return (
    <section className="bg-[#fff5f5] text-center py-16">
      {/* ✅ Heading */}
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-sky-600">yes</span>
        <span className="text-pink-600">madam</span>
        <span className="text-black"> Salon</span>
      </h2>

      {/* ✅ Description */}
      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        It has always been you inviting us to your house. It is time for us to
        invite you to our place. Visit our first-ever smart-tech unisex salons
        in Delhi-NCR and get a luxurious pampering experience. From Hair Wash,
        Hair Spa & Makeup to Advance LED Facials, Spa and Steam Bath everything
        is available at the most affordable prices at a smart-salon near you
      </p>

      {/* ✅ Button (hover only, no redirect yet) */}
      <button className="bg-teal-800 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-teal-700 transition duration-300">
        EXPLORE NOW
      </button>

      {/* ✅ Video Section */}
      <div className="mt-12 flex justify-center">
        <video
          src="/videoes/Explore.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-3xl rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Explore;
