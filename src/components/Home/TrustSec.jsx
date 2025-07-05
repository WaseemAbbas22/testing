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
      className="w-full h-[50vh] bg-cover bg-center flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 relative"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl">
        <p className="text-sm md:text-sm mb-8">
          Join thousands who trust us to keep their homes and businesses pest-free and spotless.
          <br />
          Fast response, eco-friendly solutions, and results you can count on — every time!
        </p>

        {/* Stats with 70% width */}
        <div className="w-[70%] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4">
                <h3 className="text-green-600 text-2xl md:text-3xl font-bold mb-1">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSec;
