import Company6 from "@/assets/Home/NPMA.webp";
import Company8 from "@/assets/Home/HACCP.webp";
import Company1 from "@/assets/Home/DM.webp";
import Company3 from "@/assets/Home/Ajman.webp";
import Company2 from "@/assets/Home/SCM.webp";
import Company5 from "@/assets/Home/MCCE.webp";
import Company4 from "@/assets/Home/Food.webp";
import Company7 from "@/assets/Home/BPCA.webp";

const Branches = () => {
  return (
    <div className="w-full md:h-[65vh] 2xl:h-[60vh] bg-white flex flex-col items-center py-10 md:py-[5vh] ">
      {/* Heading */}
      <h2 className="text-2xl md:text-xl 2xl:text-5xl 3xl:text-5xl lg:text-[32px] font-bold text-center text-black/80 md:mb-[2vh]">
        We pride ourselves in holding
      </h2>

      {/* Subtext */}
      <p className="text-center text-black/45 text-gray text-xs lg:text-md 2xl:text-xl 3xl:text-lg max-w-[90%] xl:max-w-[35%] 3xl:max-w-[37%]">
        We offer certified pest control Sharjah Municipality, licensed by Dubai,
        Ajman, Foodwatch, NPMA, HACCP, and the Ministry of Climate Change &
        Environment.
      </p>

      {/* Boxes Grid */}
      <div className="flex flex-col-2 items-center space-y-4 w-[75%] 2xl:space-y-6  mx-auto 3xl:mb-6 lg:mt-4">
        {/* Upper Line with 4 Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4 lg:gap-x-4  2xl:gap-10 3xl:gap-8  w-full 2xl:px-12 ">
          <div className="h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray border border-[#DEDEDE] flex justify-center items-center">
            <img
              src={Company1}
              alt="Company 1"
              className="h-4 xl:h-6 2xl:h-12 3xl:h-8 object-contain"
            />
          </div>
          <div className="border border-[#DEDEDE] h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
            <img
              src={Company2}
              alt="Company 2"
              className="h-8 lg:h-20 2xl:h-28 xl:h-12 2xl:h-[8vh] 3xl:h-16 object-contain"
            />
          </div>
          <div className="border border-[#DEDEDE] h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
            <img
              src={Company3}
              alt="Company 3"
              className="h-12 2xl:h-12 lg:h-8 xl:h-16 2xl:h-7 3xl:h-20  4xl:h-10 object-contain"
            />
          </div>
          <div className="border border-[#DEDEDE] h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
            <img
              src={Company4}
              alt="Company 4"
              className="h-8 2xl:h-20 lg:h-24 xl:h-12 3xl:h-16 4xl:h-28  object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-2 mb-4 md:mb-0 md:mt-0 items-center 2xl:space-y-6 w-[75%] md:w-[75%] mx-auto">
        {/* Lower Line with 3 Boxes - Responsive for Mobile */}
        <div className="w-full">
          {/* For Mobile: 2 boxes in first row */}
          <div className="grid grid-cols-2 gap-2 mb-2 md:hidden">
            <div className="border border-[#DEDEDE] h-[10vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company5}
                alt="Company 5"
                className="h-16 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[10vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company6}
                alt="Company 6"
                className="h-8 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[10vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company7}
                alt="Company 7"
                className="h-12 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[10vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company8}
                alt="Company 7"
                className="h-12 object-contain"
              />
            </div>
          </div>

          {/* For Mobile: 1 box centered in second row */}
          {/* <div className="flex justify-center md:hidden">
            <div className="border border-[#DEDEDE] h-[10vh] w-[calc(50%-0.5rem)] rounded-lg bg-bggray flex justify-center items-center gap-12">
              <img
                src={Company7}
                alt="Company 7"
                className="h-8 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[10vh] w-[calc(50%-0.5rem)] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company7}
                alt="Company 7"
                className="h-8 object-contain"
              />
            </div>
          </div> */}

          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 lg:gap-x-4 2xl:gap-10 3xl:gap-8 w-full 2xl:px-12">
            <div className="h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray border border-[#DEDEDE] flex justify-center items-center">
              <img
                src={Company5}
                alt="Company 1"
                className="h-7 lg:h-24 2xl:h-12 3xl:h-28 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company7}
                alt="Company 2"
                className="h-12 lg:h-20 2xl:h-28 xl:h-16 2xl:h-[8vh] 3xl:h-20 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company6}
                alt="Company 3"
                className="h-4 2xl:h-12 lg:h-8 xl:h-10 2xl:h-7 3xl:h-14 4xl:h-10 object-contain"
              />
            </div>
            <div className="border border-[#DEDEDE] h-[10vh] lg:h-[15vh] 2xl:h-[12vh] rounded-lg bg-bggray flex justify-center items-center">
              <img
                src={Company8}
                alt="Company 4"
                className="h-12 2xl:h-20 lg:h-24 xl:h-16 3xl:h-20 4xl:h-28 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
