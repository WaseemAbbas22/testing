import heroImg from "../../assets/Blogs/FreeIns.png";

const FreeInspection = () => {
  return (
    <div
      className="bg-cover bg-center rounded-lg shadow text-white mt-5 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 bg-black bg-opacity-70 rounded-lg">

        <div className="bg-opacity-80 px-2 py-2 rounded-t">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Get a Free Inspection</h3>
        </div>

        <select className="border px-3 py-2 rounded w-full text-xs sm:text-sm text-gray-400 h-8 sm:h-9 md:h-10">
          <option>Select Pest Concern</option>
          <option>Ants</option>
          <option>Cockroaches</option>
          <option>Termites</option>
        </select>

        <input
          type="text"
          placeholder="Name"
          className="border text-xs sm:text-sm px-3 py-2 rounded w-full text-black h-8 sm:h-9 md:h-10"
        />

        <input
          type="text"
          placeholder="Number"
          className="border px-3 text-xs sm:text-sm py-2 rounded w-full text-black h-8 sm:h-9 md:h-10"
        />

        <input
          type="email"
          placeholder="Email"
          className="border px-3 text-xs sm:text-sm py-2 rounded w-full text-black h-8 sm:h-9 md:h-10"
        />

        <button className="bg-[#32A849] text-white px-1 sm:px-2 md:px-4 py-1 sm:py-2 md:py-1 rounded w-full text-xs sm:text-sm md:text-xs">
          Send
        </button>
      </div>
    </div>
  );
};

export default FreeInspection;
