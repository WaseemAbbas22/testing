import Circle1 from "/src/assets/Home/cir1.png";
import Circle2 from "/src/assets/Home/cir2.png";
import man from "/src/assets/Home/man.png";

const AboutHome = () => {
  return (
    <div className="bg-[#F0F0F0] md:w-full md:h-[80vh]  flex items-center justify-center py-10">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[80%] px-4 2xl:space-x-16">
        {/* Left Side Div */}
        <div className="flex justify-center items-center w-full">
          {/* Green Container */}
          <div className="relative rounded-2xl flex justify-center  shadow-lg bg-[#32A849] w-[65%] lg:h-[65vh] 2xl:h-[63vh]">
            {/* Man Image with light white drop shadow */}
            <img
              src={man}
              alt="About Us"
              className="z-10 w-[90%] lg:mt-8 2xl:mt-0 lg:h-[60vh] 2xl:h-[65vh] object-contain"
              style={{
                filter: "drop-shadow(0px 4px 10px rgba(250, 247, 248, 0.73))",
              }}
            />

            {/* Bottom Left Circle */}
            <img
              src={Circle2}
              alt="Bottom Left"
              className="absolute rounded-full border-2 border-white shadow-md md:w-[30%] bottom-4 left-[-15%] object-cover"
            />

            {/* Top Right Circle */}
            <img
              src={Circle1}
              alt="Top Right"
              className="absolute rounded-full border-2 border-white shadow-md md:w-[30%] top-4 right-[-15%]  object-contain"
            />
          </div>
        </div>

        {/* Right Side Div */}
        <div className="w-full md:space-y-6">
          {/* Small Text */}
          <p className="text-[#32A849] text-[14px] font-semibold text-left md:text-left 2xl:text-2xl">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-[28px] lg:text-4xl 2xl:text-7xl font-semibold text-gray-800 leading-tight text-left md:text-left">
            Dubai Municipality Pest Control – Approved Experts for Local Pest
            Issues
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 text-[12px] lg:text-base 2xl:text-2xl text-left md:text-left">
            Our most significant area of expertise is Dubai Municipality Pest
            Control, and we offer completely compliant services with local
            government regulations. Controlling common insects in Dubai for
            decades, including cockroaches, ants and mosquitoes, we personalize
            our pest control techniques to the local climate and regulations.
            Our staff follows strict regulations to ensure that every treatment
            is safe, effective, and ready for an inspection. Since we are
            familiar with the behaviour and breeding patterns of insects in
            Dubai, whether they are for residential or commercial locations, we
            can offer long-lasting solutions utilising certified Dubai
            Municipality Pest Control methods.
          </p>

          {/* Button */}
          <div className="flex justify-left md:justify-start">
            <button className="bg-[#32A849] text-white text-[11px] 2xl:text-2xl font-medium px-5 py-2.5 rounded shadow hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
