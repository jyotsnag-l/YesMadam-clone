import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const reviews = [
  {
    name: "SHRADDHA KAPOOR",
    subtitle: "Trusts Our Salon Experts",
    img: "/celebrities/sk.jpg", // ✅ updated path
  },
  {
    name: "SHIVANGI JOSHI",
    subtitle: "On Her Finest Roll-On Waxing Experience YesMadam",
    img: "/celebrities/sjj.jpg", // ✅ updated path
  },
  {
    name: "KISHWER MERCHANT",
    subtitle: "On the Best Home Salon Offers",
    img: "/celebrities/ki.jpg", // ✅ updated path
  },
  {
    name: "SAKSHI SINDWANI",
    subtitle: "On Beauty Services at ₹6",
    img: "/celebrities/sakshi.jpg", // ✅ updated path
  },
];

const Reviews: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 → forward, -1 → backward

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + direction >= reviews.length || prev + direction < 0) {
          setDirection((d) => -d); // reverse direction
          return prev + direction * -1;
        }
        return prev + direction;
      });
    }, 3000); // every 3s
    return () => clearInterval(interval);
  }, [direction]);

  // Go to prev
  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Go to next
  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Celebrities Love Us
        </h2>

        {/* Carousel */}
        <div className="flex items-center justify-center relative">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Review Card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-hidden">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden shadow-md transition-transform duration-700 ${
                  i === index ? "scale-100 opacity-100" : "scale-95 opacity-50"
                }`}
              >
                {/* Image */}
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-full h-[350px] object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md">
                    <Play size={28} className="text-pink-600" />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-pink-700 via-pink-600/80 to-transparent p-4 text-white">
                  <h3 className="text-lg font-bold">{review.name}</h3>
                  <p className="text-sm">{review.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
