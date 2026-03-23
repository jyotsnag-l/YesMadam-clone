import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const testimonials = [
  {
    name: "Afreen Hussain",
    review:
      "Experience with Yes Madam was really good. The beautician was very professional and her hands worked like magic. Massage and body polishing was relaxing and satisfying. Hair spa was also very good.",
  },
  {
    name: "Srishti K",
    review:
      "I booked Yes Madam for waxing and facial. The beautician was polite and skilled. The products felt premium, and the hygiene was top-notch. Definitely recommend them!",
  },
  {
    name: "Ritika Sharma",
    review:
      "Amazing service! Booked a pedicure and manicure at home, and the expert brought everything required. Affordable pricing too 💖",
  },
  {
    name: "Megha Verma",
    review:
      "Tried Yes Madam for a full body massage, and it was heavenly. The therapist was punctual and professional. Worth every penny! ⭐",
  },
  {
    name: "Kavya Singh",
    review:
      "The bridal makeup service was absolutely stunning. I felt like a princess 👑 Highly recommend Yes Madam for weddings!",
  },
  {
    name: "Anjali Mehta",
    review:
      "Superb home salon service! Booked facial + cleanup and was impressed with their punctuality, professionalism, and service quality.",
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + direction >= testimonials.length) {
          setDirection(-1);
          return prev - 1;
        }
        if (prev + direction < 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [direction]);

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) =>
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - Text + Overall rating */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Love from our <br /> customers
          </h2>
          <div className="flex items-center space-x-3 text-4xl font-bold text-black">
            <span className="text-6xl">⭐</span>
            <span>4.5</span>
          </div>
          <p className="text-gray-600 mb-6 text-2xl">49.6K reviews</p>

          <p className="font-medium text-black mb-3 text-lg">Let's Get Social 💗</p>
          <div className="flex space-x-6 text-3xl text-gray-700">
            <span className="cursor-pointer hover:text-pink-500 transition"><FaFacebook size={32} /></span>
            <span className="cursor-pointer hover:text-pink-500 transition"><FaInstagram size={32} /></span>
            <span className="cursor-pointer hover:text-pink-500 transition"><FaXTwitter size={32} /></span>
            <span className="cursor-pointer hover:text-pink-500 transition"><FaLinkedin size={32} /></span>
          </div>
        </div>

        {/* RIGHT SIDE - Carousel */}
        <div className="relative">
          {/* Review Card */}
          <div className="bg-white rounded-xl shadow-md p-6 h-64 flex flex-col justify-between transition-all duration-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonials[index].name}
              </h3>
              <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 text-sm">
                {testimonials[index].review}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-200 text-black hover:bg-pink-300 transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-200 text-black hover:bg-pink-300 transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Index */}
          <p className="text-center text-sm text-gray-500 mt-3">
            {index + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
