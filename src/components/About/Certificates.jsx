import React from 'react';
import Cert1 from "/src/assets/About/certificate1.png";
import Cert2 from "/src/assets/About/certificate2.png";
import Cert3 from "/src/assets/About/certificate3.png";

const Certificates = () => {
  return (
    <div className="w-full sm:w-[90%] mx-auto min-h-[50vh] bg-gray-100 flex flex-col items-center justify-between pt-6">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl font-bold text-black/90 text-center mb-8 sm:mb-10 md:mb-12 xl:mb-8 2xl:mb-10 3xl:mb-12">
        Our Official Licenses & Certifications
      </h2>

      {/* Certificates Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4  w-full mb-8 sm:mb-10 md:mb-12">
        {[Cert1, Cert2, Cert3].map((cert, index) => (
          <div
            key={index}
            className="border-[6px] border-green-600 xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl p-2 sm:p-3 md:p-4 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-44 2xl:h-56 3xl:h-64 w-auto object-contain mx-auto rounded-md"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-darkgreen text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xs 2xl:text-sm 3xl:text-sm font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 xl:py-2 xl:px-5 2xl:py-2 2xl:px-5 3xl:py-2 3xl:px-6 2xl:rounded-md rounded 3xl:rounded-md shadow hover:bg-green-700 transition-colors duration-300 mb-4">
        View All
      </button>
      
    </div>
  );
};

export default Certificates;