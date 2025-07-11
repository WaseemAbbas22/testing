//import { FaSearch, FaFingerprint, FaSprayCan, FaShieldAlt } from "react-icons/fa";
import InspectionImg from '/src/assets/Home/process1.png';
import IdentificationImg from '/src/assets/Home/process2.png';
import ApplicationImg from '/src/assets/Home/process3.png';
import SafetyCheckImg from '/src/assets/Home/process4.png';


const Process = () => {
  const steps = [
  { img: InspectionImg, title: "Inspection" },
  { img: IdentificationImg, title: "Identification" },
  { img: ApplicationImg, title: "Application" },
  { img: SafetyCheckImg, title: "Safety Check" },
];


  return (
    <div className="w-full bg-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-16 relative">

      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
        Domestic & Commercial Clients
      </h2>

      {/* Subheading */}
      <h3 className="text-xl md:text-3xl font-bold text-center text-gray mb-10">
        - 4 Step Promise
      </h3>

      {/* Steps Grid Container with relative to position the line */}
      <div className="relative w-full max-w-[1200px] mb-10">

        {/* Green Dotted Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full border-t-2 border-dotted border-darkgreen z-0"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[25px] relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-lg border border-[#E0E0E0] shadow-md flex flex-col items-center justify-center py-10 px-4 relative hover:shadow-lg hover:border-green-600 transition"
            >
              {/* Number Box (Left Upper Corner) */}
              <div className="absolute top-0 left-0 bg-green-600 text-white rounded-ee-3xl rounded-ss-md w-10 h-10 flex items-center justify-center text-2xl italic font-semibold">
                {index + 1}
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="h-14 w-14 mb-4" // adjust height and width as you prefer
                />
                <h3 className="text-lg font-semibold text-gray-600">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
      );
};

      export default Process;
