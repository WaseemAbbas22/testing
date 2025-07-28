import Img from "/src/assets/Home/trustsec.png";

const TrustSec = () => {
  const stats = [
    { number: "1000+", label: "Happy Residential Clients" },
    { number: "500+", label: "Commercial Sites Protected" },
    { number: "800+", label: "Sanitization Jobs Completed" },
    { number: "99%", label: "Customer Satisfaction Rate" },
  ];

  return (
    <div
      className="w-full min-h-[45vh] bg-cover bg-center flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-16 lg:px-24 2xl:px-32 3xl:px-40 py-10 sm:py-12 md:py-16"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white w-full max-w-screen-xl">
        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base lg:text-xl 2xl:text-3xl 3xl:text-4xl max-w-4xl mx-auto font-medium px-2">
          Our team is one of the most recognized pest control companies in Dubai,
          offering safe solutions and a history of satisfied customers in Sharjah and Ajman.
        </p>

        {/* Stats Section */}
        <div className="w-full flex justify-center mt-6 md:mt-12">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:gap-6 lg:flex lg:justify-between w-full max-w-5xl px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full"
              >
                {/* Stat Block */}
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-green-600 text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold">
                    {stat.number}
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl mt-2 max-w-[180px] sm:max-w-[200px] 2xl:max-w-xs">
                    {stat.label}
                  </p>
                </div>

                {/* Divider (only show between items on larger screens) */}
                {index !== stats.length - 1 && (
                  <div className="hidden lg:block h-10 border-r border-gray-400 mx-4 2xl:mx-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSec;
