import React from 'react';
import Cert1 from "/src/assets/About/certificate1.png";
import Cert2 from "/src/assets/About/certificate2.png";
import Cert3 from "/src/assets/About/certificate3.png";

const Certificates = () => {
  return (
    <div className="w-full sm:w-[90%] mx-auto min-h-[50vh] bg-gray-100 flex flex-col items-center justify-between">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-800 text-center mb-8 sm:mb-10 md:mb-12">
        Our Official Certificates
      </h2>

      {/* Certificates Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6  w-full mb-8 sm:mb-10 md:mb-12">
        {[Cert1, Cert2, Cert3].map((cert, index) => (
          <div
            key={index}
            className="border-8 border-green-600 rounded-lg p-2 sm:p-3 md:p-4 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-64 w-auto object-contain mx-auto rounded-md"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded shadow hover:bg-green-700 transition-colors duration-300 mb-4">
        View All
      </button>
      
    </div>
  );
};

export default Certificates;