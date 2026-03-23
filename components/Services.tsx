import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Services We Offer
        </h2>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/image1.jpg"
              alt="Female Salon at Home"
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Female Salon at Home
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide a range of beauty services at the comfort of your home.
              From waxing, facials, clean-ups and mani-pedi to body polishing and
              even hair spa, you name it we have it.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/image2.jpg"
              alt="Female Spa at Home"
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Female Spa at Home
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Whether you want to de-stress yourself or get a pain-relieving
              body massage we have everything in the bucket for you. We also
              cater to elderly, new moms, kids & period pain.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="/image3.jpg"
              alt="Female Hydra & Laser Treatments"
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Female Hydra & Laser Treatments
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our Hydra Facials at Home give instant results with a healthy
              glow, while at-home Laser Treatments are great for hair reduction,
              pigmentation correction, and rejuvenation.
            </p>
          </div>
        </div>

        {/* Sub Categories */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
          {/* Male Grooming */}
          <div className="text-center">
            <img
              src="/image4.jpg"
              alt="Male Grooming"
              className="w-28 h-28 mx-auto rounded-xl object-cover shadow-md"
            />
            <h4 className="mt-3 text-sm md:text-base font-medium text-gray-900">
              Male Grooming
            </h4>
          </div>

          {/* Male Spa */}
          <div className="text-center">
            <img
              src="/image5.jpg"
              alt="Male Spa"
              className="w-28 h-28 mx-auto rounded-xl object-cover shadow-md"
            />
            <h4 className="mt-3 text-sm md:text-base font-medium text-gray-900">
              Male Spa
            </h4>
          </div>

          {/* Hair Services */}
          <div className="text-center">
            <img
              src="/image6.jpg"
              alt="Hair Services"
              className="w-28 h-28 mx-auto rounded-xl object-cover shadow-md"
            />
            <h4 className="mt-3 text-sm md:text-base font-medium text-gray-900">
              Hair Services
            </h4>
          </div>

          {/* Makeup at Home */}
          <div className="text-center">
            <img
              src="/image7.jpg"
              alt="Makeup at Home"
              className="w-28 h-28 mx-auto rounded-xl object-cover shadow-md"
            />
            <h4 className="mt-3 text-sm md:text-base font-medium text-gray-900">
              Makeup at Home
            </h4>
          </div>

          {/* Pre Bridal */}
          <div className="text-center">
            <img
              src="/image8.jpg"
              alt="Pre Bridal"
              className="w-28 h-28 mx-auto rounded-xl object-cover shadow-md"
            />
            <h4 className="mt-3 text-sm md:text-base font-medium text-gray-900">
              Pre Bridal
            </h4>
          </div>

          {/* Mehendi at Home */}
          <div className="text-center">
            <img
              src="/image9.jpg"
              alt="Mehendi at Home"
              className="w-28 h-28 mx-auto rounded-xl object-cover shadow-md"
            />
            <h4 className="mt-3 text-sm md:text-base font-medium text-gray-900">
              Mehendi at Home
            </h4>
          </div>
        </div>

        {/* Download App Section */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-4 bg-black text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:opacity-90 transition">
            Download Yes Madam App
            <img src="/playstore.png" alt="Play Store" className="w-6 h-6" />
            <img src="/applestore.png" alt="App Store" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
