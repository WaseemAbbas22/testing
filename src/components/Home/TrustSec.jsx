import Img from "/src/assets/Home/trustsec.png"; // Replace with your actual image path

const TrustSec = () => {
  const stats = [
    { number: "1000+", label: "Happy Residential Clients" },
    { number: "500+", label: "Commercial Sites Protected" },
    { number: "800+", label: "Sanitization Jobs Completed" },
    { number: "99%", label: "Customer Satisfaction Rate" },
  ];

  return (
    <div
      className="w-full h-[45vh] bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 relative py-10 sm:py-12 md:py-16"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white w-full">
        <p className="text-center justify-center lg:ml-[300px] 2xl:ml-[600px] 3xl:ml-[300px] 4xl:ml-[500px] justify-center items-center text-xs sm:text-sm lg:text-xl 2xl:mb-12 px-2 max-w-[100%] 4xl:max-w-7xl 2xl:max-w-6xl lg:max-w-3xl 2xl:text-3xl 4xl:text-4xl font-xs">
          Our team are one of the most recognized pest control companies in
          Dubai, offering safe solutions and a history of satisfied customers in
          Sharjah and Ajman.
        </p>

        {/* Stats */}
        <div className="w-full flex justify-center mt-4  md:mt-12">
          <div className="w-[80%] grid grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-1"
              >
                {/* Stat Block */}
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-green-600 text-3xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl 4xl:text-7xl font-extrabold">
                    {stat.number}
                  </h3>
                  <p className="text-[18px] lg:mt-2 2xl:mt-6 sm:text-sm md:text-base w-40 lg:text-xl 2xl:text-3xl 4xl:text-4xl sm:w-48 2xl:w-80">
                    {stat.label}
                  </p>
                </div>

                {/* Divider Line except after last item */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block h-10 border-r border-gray-300 mx-4 4xl:mx-10"></div>
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
