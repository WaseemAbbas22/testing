import heroImg from "../../assets/Blogs/FreeIns.webp";

const FreeInspection = () => {
  return (
    <div
      className="bg-cover bg-center rounded-lg shadow text-white mt-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-0"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 bg-black bg-opacity-70 mb-2 rounded-lg">
        <div className="bg-opacity-80 px-2 py-2 rounded-t">
          <h3 className="text-base sm:text-lg 3xl:text-2xl md:text-xl font-semibold">
            Get a Free Inspection
          </h3>
        </div>

        {/* ✅ Form starts */}
        <form
          action="https://formsubmit.co/dde8afb3bc99d85ee4bdf6b0e0052631"
          method="POST"
          className="space-y-3 sm:space-y-4"
        >
          {/* hidden fields like in ContactReq */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Free Inspection Request"
          />

          <div className="relative w-[70%] md:w-full">
            <select
              name="service"
              required
              className="appearance-none border px-3 3xl:px-6 py-2 rounded w-full text-xs sm:text-sm 3xl:text-lg text-[#C1C1C1] h-8 sm:h-9 md:h-10 3xl:h-14 pr-8"
            >
              <option value="">General Pest Concern</option>
              <option value="Termite">Termite</option>
              <option value="Fumigation">Fumigation</option>
              <option value="disinfection">Disinfection</option>
              <option value="Thermal Fogger">Thermal Fogger</option>
              <option value="Cleaning">Cleaning</option>
            </select>

            {/* ✅ Custom filled dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path d="M5 7l5 6 5-6H5z" />
              </svg>
            </div>
          </div>

          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="border text-xs sm:text-sm 3xl:text-lg px-3 3xl:px-6 py-2 rounded w-full text-[#C1C1C1] h-8 sm:h-9 md:h-10 3xl:h-14"
          />

          <input
            type="text"
            name="Phone"
            placeholder="Number"
            required
            className="border px-3 3xl:px-6 text-xs sm:text-sm 3xl:text-lg py-2 rounded w-full text-[#C1C1C1] h-8 sm:h-9 md:h-10 3xl:h-14"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="border px-3 3xl:px-6 text-xs sm:text-sm 3xl:text-lg py-2 rounded w-full text-[#C1C1C1] h-8 sm:h-9 md:h-10 3xl:h-14"
          />

          <button
            type="submit"
            className="bg-[#32A849] text-white px-1 sm:px-2 md:px-4 py-1 sm:py-2 md:py-2 rounded w-full text-xs 3xl:text-xl sm:text-sm md:text-xs 3xl:h-14"
          >
            Send
          </button>
        </form>
        {/* ✅ Form ends */}
      </div>
    </div>
  );
};

export default FreeInspection;
