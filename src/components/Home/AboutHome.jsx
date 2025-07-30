import Circle1 from "/src/assets/Home/cir1.png";
import Circle2 from "/src/assets/Home/cir2.png";
import man from "/src/assets/Home/man.png";

const AboutHome = () => {
  return (
    <div className="bg-[#F0F0F0] md:w-full md:h-[75vh] xl:h-[80vh] 2xl:h-[65vh] 3xl:h-[75vh]  flex items-center justify-center py-10">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[85%] px-4 2xl:space-x-2 4xl:w-[75%] 2xl:gap-10">
        {/* Left Side Div */}
        <div className="flex justify-center items-center w-full">
          {/* Green Container */}
          <div className="relative rounded-2xl flex justify-center items-end shadow-lg bg-gradient-to-t from-[#32A849] via-white to-[#32A849] xl:w-[60%] 3xl:w-[60%] lg:h-[65vh] xl:h-[64vh] 2xl:h-[55vh] 3xl:h-[60vh] 4xl:h-[56vh] overflow-visible">
            {/* Man Image with light white drop shadow */}
            <img
              src={man}
              alt="About Us"
              className="z-10 w-[90%] lg:h-[60vh] 2xl:h-[50vh] 3xl:h-[54vh] 4xl:h-[52vh] object-contain"
              style={{
                filter: "drop-shadow(0px 4px 10px rgba(250, 247, 248, 0.73))",
              }}
            />

            {/* Bottom Left Circle */}
            <img
              src={Circle2}
              alt="Bottom Left"
              className="absolute z-20 rounded-full border-2 border-white shadow-md w-[35%]  md:w-[30%] xl:w-[32%] 3xl:w-[35%] 4xl:w-[36%] bottom-[5%]  left-[-15%] xl:left-[-15%] 3xl:left-[-20%] object-cover"
            />

            {/* Top Right Circle */}
            <img
              src={Circle1}
              alt="Top Right"
              className="absolute z-20 rounded-full border-2 border-white shadow-md  w-[35%] md:w-[40%] xl:w-[32%] 3xl:w-[30%] 4xl:w-[36%] top-[2%] right-[-15%] xl:right-[-15%] 3xl:right-[-15%] object-contain"
            />
          </div>
        </div>

        {/* Right Side Div */}
        <div className="w-full 4xl:space-y-10 3xl:space-y-4 xl:space-y-4 2xl:space-y-4 xl:pr-20 2xl:pr-24 3xl:pr-40 mt-2">
          {/* Small Text */}
          <p className="text-[#32A849] text-[14px] font-semibold text-left md:text-left 2xl:text-xl 3xl:text-2xl">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-[24px] lg:text-4xl xl:text-4xl 2xl:text-[42px] 3xl:text-[43px] 4xl:max-w-2xl font-bold text-black/90 leading-tight 2xl:leading-tight 3xl:leading-tight text-left">
            Dubai Municipality Pest Control – Approved Experts for Local Pest
            Issues
          </h2>

          {/* Paragraphs */}
          <p className="text-[#666666] text-[11px] lg:text-base text-justify xl:text-xs 2xl:text-[17px] 3xl:text-lg text-left xl:leading-snug 3xl:leading-snug ">
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
            <button className="bg-[#32A849] text-white text-[11px] 2xl:text-base 3xl:text-base font-medium px-6 xl:mt-0 mt-2 py-2.5 rounded-md 2xl:rounded-lg shadow hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
