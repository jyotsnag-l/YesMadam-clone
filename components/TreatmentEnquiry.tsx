import React from "react";

const TreatmentEnquiry: React.FC = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hydra Facial Treatments */}
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img
              src="/hydra-facial.jpg" // replace with your actual image
              alt="Hydra Facial Treatments"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/95 via-white/70 to-transparent p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Have questions about <br />
                <span className="text-[#0F3557]">Hydra Facial Treatments?</span>
              </h3>
              <button className="bg-[#0f3c56] text-white px-5 py-2 rounded-md font-medium shadow-md hover:bg-[#0c2f44] transition mt-2 -mb-2">
                Request Call Back
            </button>

            </div>
          </div>

          {/* Laser Hair Reduction */}
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img
              src="/laser-hair.jpg" // replace with your actual image
              alt="Laser Hair Reduction"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/95 via-white/70 to-transparent p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Have questions about <br />
                <span className="text-[#7D2178]">Laser Hair Reduction?</span>
              </h3>
              <button className="bg-[#9b2c96] text-white px-5 py-2 rounded-md font-medium shadow-md hover:bg-[#0c2f44] transition mt-2 -mb-2">
                Request Call Back
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentEnquiry;
