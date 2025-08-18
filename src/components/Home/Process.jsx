//import { FaSearch, FaFingerprint, FaSprayCan, FaShieldAlt } from "react-icons/fa";
import InspectionImg from "@/assets/Home/process1.webp";
import IdentificationImg from "@/assets/Home/process2.webp";
import ApplicationImg from "@/assets/Home/process3.webp";
import SafetyCheckImg from "@/assets/Home/process4.webp";

const Process = () => {
  const steps = [
    { img: InspectionImg, title: "Inspection" },
    { img: ApplicationImg, title: "Identification" },
    { img: IdentificationImg, title: "Application" },
    { img: SafetyCheckImg, title: "Safety Check" },
  ];

  return (
    <div className="w-full lg:h-[70vh] 2xl:h-[60vh] 3xl:h-[62vh] 4xl:h-[55vh] bg-white flex flex-col items-center justify-center px-6  py-12 relative">
      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-black/80 lg:text-[50px] xl:text-4xl 2xl:text-5xl 3xl:text-[50px] 4xl:text-7xl">
        Domestic & Commercial Clients
      </h2>

      {/* Subheading */}
      <h3 className="text-2xl md:text-3xl font-bold text-center text-black/80 2xl:mb-16 lg:mb-12 lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl 4xl:text-7xl mb-4 md:mb-0">
        4 step promise
      </h3>

      {/* Steps Grid Container with relative to position the line */}
      <div className="relative w-full md:w-[80%]  mx-auto mb-10 justify-center">
        {/* Green Dotted Line */}
        <div
          className="
    block
    absolute
    left-1/2
    transform
    -translate-x-1/2
    top-0
    h-full
    border-l-2
    border-dashed
    border-darkgreen
    z-0

    md:left-1/2
    md:top-1/2
    md:w-[90%]
    md:h-0
    md:border-l-0
    md:border-t-2
  "
        ></div>

        {/* Steps Grid */}
        <div
          className="
    grid 
    grid-cols-1 
    md:grid-cols-4 
    gap-4 md:gap-8 lg:gap-0 
    relative z-10 w-full justify-items-center
  "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
          bg-[#F5F5F5] rounded-lg border border-[#E0E0E0] shadow-md 
          flex flex-col items-center justify-center 
          relative hover:shadow-lg hover:border-green-600 transition
          w-[260px] md:w-[200px] lg:w-[250px] xl:w-[220px] 2xl:w-[270px] 3xl:w-[300px] 4xl:w-[350px]
          h-[220px] md:h-[250px] lg:h-[210px] xl:h-[180px] 2xl:h-[230px] 3xl:h-[250px] 4xl:h-[300px]
        "
            >
              {/* Number Box (Left Upper Corner) */}
              <div
                className="
          absolute top-0 left-0 bg-green-600 text-white 
          rounded-ee-[30px] rounded-ss-lg w-16 h-16 xl:w-12 xl:h-12  2xl:h-16 2xl:w-14 2xl:text-4xl 4xl:w-16
          flex items-center justify-center text-2xl italic font-semibold
        "
              >
                {index + 1}
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-16 w-16 mb-4
                  md:h-16 md:w-16 
                  lg:h-20 lg:w-20 
                  xl:h-14 xl:w-14 
                  2xl:h-16 2xl:w-16 2xl:ml-4
                  3xl:h-20 3xl:w-20
                  4xl:h-24 4xl:w-24  "
                />
                <h3 className="text-2xl md:text-lg lg:text-xl 2xl:text-3xl 2xl:mt-2 3xl:text-3xl 3xl:mt-2  font-base text-black/60 text-center">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
