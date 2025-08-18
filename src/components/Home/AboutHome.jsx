import Circle1 from "@/assets/Home/cir1.webp";
import Circle2 from "@/assets/Home/cir2.webp";
import man from "@/assets/Home/man.webp";
import Vector from "@/assets/Home/brightVector.webp";

const AboutHome = () => {
  return (
    <div className="bg-[#F0F0F0] md:w-full md:h-[75vh] xl:h-[80vh] 2xl:h-[65vh] 3xl:h-[75vh]  flex items-center justify-center py-10">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[85%] px-4 2xl:space-x-2 4xl:w-[75%] 2xl:gap-10">
        {/* Left Side Div */}
        <div className="flex justify-center items-center w-full">
          {/* Green Container */}
          <div className="relative rounded-2xl flex justify-center items-end shadow-lg bg-darkgreen xl:w-[60%]  lg:h-[65vh] xl:h-[64vh] 2xl:h-[55vh] 3xl:h-[53vh] 4xl:h-[55vh] overflow-visible">
            <div className="relative w-full flex justify-center items-center">
              {/* Vector Image (Behind) */}
              <img
                src={Vector}
                alt="Background Vector"
                className="absolute z-10 w-[95%]  lg:h-[70vh] 2xl:h-[80vh] 3xl:h-[90%] 4xl:h-[100vh] object-contain"
              />

              {/* Man Image (Front) */}
              <img
                src={man}
                alt="About Us"
                className="z-10 w-[80%]  object-contain drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
              />
            </div>

            {/* Bottom Left Circle */}
            <img
              src={Circle2}
              alt="Bottom Left"
              className="absolute z-20 rounded-full border-2 border-white shadow-md w-[35%]  md:w-[40%] xl:w-[32%] 3xl:w-[35%] 4xl:w-[36%] bottom-[3%] lg:bottom-[5%]  left-[-15%] xl:left-[-15%] 3xl:left-[-20%] object-cover"
            />

            {/* Top Right Circle */}
            <img
              src={Circle1}
              alt="Top Right"
              className="absolute z-20 rounded-full border-2 border-white shadow-md  w-[35%] md:w-[40%] xl:w-[32%] 3xl:w-[35%] 4xl:w-[36%] top-[2%] right-[-15%] xl:right-[-15%] 3xl:right-[-15%] object-contain"
            />
          </div>
        </div>

        {/* Right Side Div */}
        <div className="w-full 4xl:space-y-6 3xl:space-y-4 xl:space-y-4 2xl:space-y-4 xl:pr-20 2xl:pr-24 3xl:pr-40 mt-2">
          {/* Small Text */}
          <p className="text-[#32A849] text-[14px] font-semibold text-left md:text-left 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            About Us
          </p>

          {/* Heading */}
          <h2 className="text-[24px] lg:text-4xl xl:text-4xl 2xl:text-[42px] 3xl:text-[43px] 4xl:text-[55px] 4xl:max-w-3xl font-bold text-black/90 leading-tight 2xl:leading-tight 3xl:leading-tight text-left">
            Dubai Municipality Pest Control, Approved Experts for Local Pest
            Issues
          </h2>

          {/* Paragraphs */}
          <p className="text-[#666666] text-[11px] lg:text-base text-justify xl:text-xs 2xl:text-[17px] 3xl:text-lg 4xl:text-2xl text-left xl:leading-snug 3xl:leading-snug ">
            Our most significant area of expertise is Dubai Municipality Pest
            Control, and we offer completely compliant services with local
            government regulations. Controlling common insects in Dubai for
            decades, including cockroaches, ants and mosquitoes, we personalise
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
