import PestCard from "../Pests/PestCard";

const PestGrid = () => {
  return (
    <div className="w-full bg-bggray px-4 md:px-8 lg:px-12 2xl:px-24 3xl:px-36 4xl:px-48">
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-6 md:py-16 text-center">
        {/* Heading */}
        <h2 className="text-black/80 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-5xl font-bold">
          Our Services
        </h2>

        {/* Description */}
        <p className="text-black/60 text-sm md:text-base lg:text-sm 2xl:text-lg 3xl:text-lg mt-2 mb-6 md:mb-8 lg:mb-8 2xl:mb-10 sm:max-w-[35%]">
        Protect your space with our trusted pest control services - fast, effective and approved by Dubai Municipality standards.
        </p>

        {/* Pest Cards Grid */}
        <div className=" w-[85%]  grid grid-cols-1 sm:grid-cols-4 gap-4">
          <PestCard pestName="ANTS" className="hidden md:block" />
          <PestCard pestName="COCKROACHES" />
          <PestCard pestName="BED BUGS" />
          <PestCard pestName="RODENTS" />
          <PestCard pestName="FLIES" className="hidden md:block" />
          <PestCard pestName="MOSQUITOES" />
          <PestCard pestName="SPIDERS" />
          <PestCard pestName="TERMITES" />
        </div>

        {/* View More Button */}
        <button className="bg-green-600 text-white text-sm 2xl:text-lg mt-6 2xl:mt-12 font-semibold px-6 py-2 md:px-6 md:py-2 rounded shadow hover:bg-green-700 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default PestGrid;
