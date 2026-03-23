import React from "react";

const MediaCoverage: React.FC = () => {
  const mediaImages = [
    { src: "/mediacover1/mc1.jpg", alt: "Shraddha Kapoor Yes Madam" },
    { src: "/mediacover1/mc2.jpg", alt: "Shark Tank India Funding" },
  ];

  return (
    <section id="media-coverage" className="bg-[#fdf6ee] py-16 px-6">
      {/* ✅ Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
          MEDIA COVERAGES
        </h2>
        <div className="mt-2 flex justify-center">
          <div className="w-20 h-1 bg-pink-500 rounded"></div>
        </div>
      </div>

      {/* ✅ Grid Layout for 2 images */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {mediaImages.map((img, index) => (
          <div
            key={index}
            className="bg-[#fdf6ee] shadow-md rounded-lg overflow-hidden flex justify-center items-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaCoverage;
