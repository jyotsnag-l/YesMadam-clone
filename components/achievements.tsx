import React from "react";
import { FaUserAlt, FaDownload, FaStar } from "react-icons/fa";
import { GiAce } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Achievements: React.FC = () => {
  const stats = [
    { icon: <FaUserAlt size={48} color="#ec4899" />, value: "7000+", label: "Professionals" },
    { icon: <FaDownload size={48} color="#ec4899" />, value: "6M+", label: "App Download" },
    { icon: <GiAce size={48} color="#ec4899" />, value: "8M+", label: "Bookings Completed" },
    { icon: <GoLocation size={48} color="#ec4899" />, value: "50+", label: "Cities in India" },
    { icon: <FaStar size={48} color="#ec4899" />, value: "4.8 ★", label: "India's Top Rated Beauty App" },
  ];

  return (
    <section id="milestones" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-16">Achievements so far</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-pink-100 rounded-full w-28 h-28 flex items-center justify-center mb-6 shadow-sm">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
