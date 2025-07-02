import Img from "/src/assets/Trust.jpg"; // Replace with your actual image path 

const TrustSec = () => {
  const stats = [
    { number: "1000+", label: "Happy Residential Clients" },
    { number: "500+", label: "Protected" },
    { number: "2000+", label: "Completed" },
    { number: "98%", label: "Customer Satisfaction Rate" },
  ];

  return (
    <div
      className="w-full h-[50vh] bg-cover bg-center flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 relative"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl">
        <p className="text-lg md:text-xl mb-8">
          Join thousands who trust us to keep their homes and businesses pest-free and spotless.
          <br />
          Fast response, eco-friendly solutions, and results you can count on — every time!
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center text-center px-4">
                <h3 className="text-green-400 text-2xl md:text-3xl font-bold mb-1">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base">{stat.label}</p>
              </div>
              {/* Divider (not after last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block h-12 w-px bg-green-400 opacity-50 mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSec;
