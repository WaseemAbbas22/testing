import PestCard from "../Pests/PestCard";

const PestGrid = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-8 sm:px-6 md:px-10 lg:px-20 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-2">
        Our Services
      </h2>

      <p className="text-gray-600 text-xs sm:text-sm mb-6 max-w-2xl mx-auto">
        We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4  mb-8">
        <PestCard pestName="ANTS" />
        <PestCard pestName="COCKROACHES" />
        <PestCard pestName="RED BUGS" />
        <PestCard pestName="RODENTS" />
        <PestCard pestName="FLIES" />
        <PestCard pestName="MOSQUITOES" />
        <PestCard pestName="SPIDERS" />
        <PestCard pestName="TERMITES" />
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition">
        View More
      </button>
    </div>
  );
};

export default PestGrid;
