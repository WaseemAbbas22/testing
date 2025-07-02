import { FaSearch, FaFingerprint, FaSprayCan, FaShieldAlt } from "react-icons/fa";

const Process = () => {
  const steps = [
    { icon: <FaSearch size={40} />, title: "Inspection" },
    { icon: <FaFingerprint size={40} />, title: "Identification" },
    { icon: <FaSprayCan size={40} />, title: "Application" },
    { icon: <FaShieldAlt size={40} />, title: "Safety Check" },
  ];

  return (
    <div className="w-full h-[50vh] bg-white flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32">

      {/* Main Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-serif">
        Domestic & Commercial Clients
      </h2>

      {/* Subheading */}
      <h3 className="text-xl md:text-2xl text-center text-gray-700 mb-10">
        - 4 Step Promise
      </h3>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center py-6 px-4 relative hover:shadow-lg transition"
          >
            {/* Number Box (Left Upper Corner) */}
            <div className="absolute top-2 left-2 bg-green-600 text-white rounded-md w-6 h-6 flex items-center justify-center text-xs font-bold">
              {index + 1}
            </div>

            <div className="text-green-600 mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Process;
