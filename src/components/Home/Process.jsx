//import { FaSearch, FaFingerprint, FaSprayCan, FaShieldAlt } from "react-icons/fa";
import InspectionImg from "/src/assets/Home/process1.png";
import IdentificationImg from "/src/assets/Home/process2.png";
import ApplicationImg from "/src/assets/Home/process3.png";
import SafetyCheckImg from "/src/assets/Home/process4.png";

const Process = () => {
  const steps = [
    { img: InspectionImg, title: "Inspection" },
    { img: ApplicationImg, title: "Identification" },
    { img: IdentificationImg, title: "Application" },
    { img: SafetyCheckImg, title: "Safety Check" },
  ];

  return (
    <div className="w-full lg:h-[70vh] 2xl:h-[60vh] bg-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  py-12 relative">
      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 lg:text-[50px] 2xl:text-7xl">
        Domestic & Commercial Clients
      </h2>

      {/* Subheading */}
      <h3 className="text-xl md:text-3xl font-bold text-center text-gray 2xl:mb-16 lg:mb-12 lg:text-5xl 2xl:text-7xl">
        - 4 step promise
      </h3>

      {/* Steps Grid Container with relative to position the line */}
      <div className="relative w-full max-w-[85%] mb-10 mx-auto">
        {/* Green Dotted Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-[90%] border-t-2 border-dotted border-darkgreen z-0"></div>

        {/* Steps Grid */}
        <div
          className="
    grid 
    grid-cols-1 
    md:grid-cols-4 
    gap-4 md:gap-8 lg:gap-10 
    relative z-10
  "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
          bg-[#F5F5F5] rounded-lg border border-[#E0E0E0] shadow-md 
          flex flex-col items-center justify-center 
          relative hover:shadow-lg hover:border-green-600 transition
          lg:w-[100%] 2xl:w-[100%] md:w-[200px] lg:w-[250px] 2xl:w-[400px]
          h-[200px] md:h-[250px] lg:h-[210px] 2xl:h-[320px]
        "
            >
              {/* Number Box (Left Upper Corner) */}
              <div
                className="
          absolute top-0 left-0 bg-green-600 text-white 
          rounded-ee-3xl rounded-ss-md w-10 h-10  2xl:h-20 2xl:w-20 2xl:text-5xl
          flex items-center justify-center text-2xl italic font-semibold
        "
              >
                {index + 1}
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 2xl:h-28 2xl:w-28 2xl:ml-8 mb-4"
                />
                <h3 className="text-base md:text-lg lg:text-xl 2xl:text-4xl 2xl:mt-6 font-base text-black/60 text-center">
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
