import Img from "@/assets/Home/trustsec.webp";
import lineDivider from "@/assets/Home/Divider.webp";
import React from "react";

const TrustSec = () => {
  const stats = [
    { number: "1000+", label: "Happy Residential Clients" },
    { number: "500+", label: "Commercial Sites Protected" },
    { number: "800+", label: "Sanitization Jobs Completed" },
    { number: "99%", label: "Customer Satisfaction Rate" },
  ];

  return (
    <div
      className="w-full min-h-[40vh] bg-cover bg-center flex flex-col items-center justify-center relative px-4 "
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 sm:opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white w-full">
        {/* Description */}
        <p className="text-sm text-white/85 sm:text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-[24px] max-w-[100%] sm:max-w-[48%] mx-auto font-xxs px-2">
          Our team is one of the most recognized pest control companies in
          Dubai, offering safe solutions and a history of satisfied customers in
          Sharjah and Ajman.
        </p>

        {/* Stats Section */}
        <div className="w-full flex justify-center mt-6 md:mt-6">
          <div className="w-[88%] flex flex-col sm:flex-row sm:justify-between sm:items-center sm:gap-6 relative">
            {/* Mobile View (2 columns + divider) */}
            <div className="flex flex-row justify-center items-start w-full sm:hidden">
              {/* First Column */}
              <div className="flex flex-col items-center w-1/2 gap-4">
                {stats
                  .slice(0, Math.ceil(stats.length / 2))
                  .map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center w-full 3xl:mt-4"
                    >
                      <h3 className="text-green-600 text-3xl sm:text-4xl md:text-4xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold font-poppins">
                        {stat.number}
                      </h3>
                      <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 3xl:mt-2 max-w-[90%]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Divider Image */}
              <div className="flex justify-center items-center px-2">
                <img src={lineDivider} alt="Divider" className="h-32 w-auto" />
              </div>

              {/* Second Column */}
              <div className="flex flex-col items-center w-1/2 gap-4">
                {stats.slice(Math.ceil(stats.length / 2)).map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center w-full 3xl:mt-4"
                  >
                    <h3 className="text-green-600 text-3xl sm:text-4xl md:text-4xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-semibold font-poppins">
                      {stat.number}
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 3xl:mt-2 max-w-[90%]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet/Desktop View */}
            <div className="hidden sm:flex w-[80%] justify-between justify-center items-center mx-auto ">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  {/* Stat Block */}
                  <div className="flex flex-col items-center justify-center  text-center w-full sm:w-auto 3xl:mt-4">
                    <h3 className="text-green-600 text-3xl sm:text-4xl md:text-4xl lg:text-3xl 2xl:text-4xl 3xl:text-[47px] font-bold font-poppins">
                      {stat.number}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base xl:text-[17px] 2xl:text-xl 3xl:text-[25px] 3xl:mt-3 max-w-[90%]">
                      {stat.label}
                    </p>
                  </div>

                  {/* Divider (Only show between items, not after last one) */}
                  {index !== stats.length - 1 && (
                    <div className="hidden sm:flex justify-center items-center px-4 2xl:px-8">
                      <img
                        src={lineDivider}
                        alt="Divider"
                        className="h-10 xl:h-28 2xl:h-36 w-auto"
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSec;
