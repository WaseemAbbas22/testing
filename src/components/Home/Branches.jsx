import Company1 from "/src/assets/Home/company1.png";
import Company2 from "/src/assets/Home/company2.png";
import Company3 from "/src/assets/Home/company3.png";
import Company4 from "/src/assets/Home/company4.png";
import Company5 from "/src/assets/Home/company5.png";
import Company6 from "/src/assets/Home/company6.png";
import Company7 from "/src/assets/Home/company7.png";

const Branches = () => {
  return (
    <div className="w-full md:h-[60vh] bg-white flex flex-col items-center lg:mt-12 2xl:space-y-10 2xl:py-20">
      {/* Heading */}
      <h2 className="text-2xl 2xl:text-7xl lg:text-[40px] font-bold text-center text-black/80 xl:mb-4">
        We pride ourselves in holding
      </h2>

      {/* Subtext */}
      <p className="text-center text-black/50 text-gray lg:mb-1 text-sm max-w-xs lg:text-md 2xl:text-2xl lg:max-w-2xl 2xl:max-w-5xl">
        We offer certified pest control Sharjah Municipality, licensed by Dubai, Ajman, Foodwatch, NPMA, HACCP, and the Ministry of Climate Change & Environment.
      </p>

      {/* Boxes Grid */}
      <div className="flex flex-col-2 items-center space-y-8 w-[80%] 2xl:space-y-6 md:w-[75%] mx-auto lg:mb-6 lg:mt-4">
        {/* Upper Line with 4 Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4 lg:gap-x-12 2xl:gap-20  w-full 2xl:px-12">
          <div className="h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray border border-[#DEDEDE] flex justify-center items-center">
            <img
              src={Company5}
              alt="Company 1"
              className="h-8 lg:h-12 2xl:h-20 3xl:h-16 object-contain"
            />
          </div>
          <div className="border border-[#DEDEDE] h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
            <img
              src={Company4}
              alt="Company 2"
              className="h-12 lg:h-20 2xl:h-28 xl:h-16 3xl:h-28 object-contain"
            />
          </div>
          <div className="border border-[#DEDEDE] h-[12vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
            <img
              src={Company3}
              alt="Company 3"
              className="h-5 2xl:h-12 lg:h-8 xl:h-6 3xl:h-8  4xl:h-10 object-contain"
            />
          </div>
          <div className="border border-[#DEDEDE] h-[12vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
            <img
              src={Company2}
              alt="Company 4"
              className="h-12 2xl:h-32 lg:h-24 xl:h-20 3xl:h-24 4xl:h-28  object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-2 mb-2 md:mb-0 md:mt-0 items-center 2xl:space-y-6 w-[80%] md:w-[60%] mx-auto">
        {/* Lower Line with 3 Boxes - Responsive for Mobile */}
        <div className="w-full">
          {/* For Mobile: 2 boxes in first row */}
          <div className="grid grid-cols-2 gap-4 mb-4 md:hidden">
            <div className="border border-[#DEDEDE] h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company1}
                alt="Company 5"
                className="h-10 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company6}
                alt="Company 6"
                className="h-20 object-contain"
              />
            </div>
          </div>
          
          {/* For Mobile: 1 box centered in second row */}
          <div className="flex justify-center md:hidden">
            <div className="border border-[#DEDEDE] h-[12vh] w-[calc(50%-0.5rem)] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company7}
                alt="Company 7"
                className="h-8 object-contain"
              />
            </div>
          </div>

          {/* For MD and above: Original 3-column layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-16 md:w-full">
            <div className="border border-[#DEDEDE] h-[1vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company1}
                alt="Company 5"
                className="h-2 2xl:h-20 lg:h-16 xl:h-12 3xl:h-16 4xl:h-20 object-contain"
              />
            </div>
            <div className="h-16 border border-[#DEDEDE] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company6}
                alt="Company 6"
                className="h-20 2xl:h-40 lg:h-24 xl:h-24 3xl:h-36 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company7}
                alt="Company 7"
                className="h-16 2xl:h-24 lg:h-16 xl:h-12 3xl:h-20 4xl:h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;