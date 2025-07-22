import { useState } from "react";
import Vector from "/src/assets/Home/VectorForm.png";
const Form = () => {
  const [countryCode, setCountryCode] = useState("+971"); // default UAE

  return (
    <div className="relative bg-green-600 py-10">
      {/* Vector Design */}
      <img
        src={Vector}
        className="absolute top-0 -right-0 h-full object-cover opacity-80 pointer-events-none overflow-hidden"
        alt="vector design"
      />
      <div className="bg-green-600 w-full h-[95vh] flex items-center justify-center px-4 sm:px-6  xl:px-8">
        {/* White container */}
        <div className="bg-white rounded-lg  shadow-lg w-full 2xl:max-w-[1750px] sm:max-w-lg md:max-w-2xl xl:max-w-4xl h-auto h-[85vh] flex flex-col p-4 sm:p-6 md:p-8 z-10">
          {/* Heading at top */}
          <h1 className="text-xl sm:text-2xl md:text-4xl 2xl:text-7xl font-semibold text-black-400 text-center mb-4 sm:mb-6 2xl:mt-16">
            Get in Touch
          </h1>

          {/* Form Inputs */}
          <div className="flex-grow flex flex-col justify-center">
            <form className="flex flex-col items-center text-sm w-full h-full 2xl:mt-8 2xl:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 2xl:gap-10 w-full ">
                {/* First Name */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="custom-textarea placeholder-gray-400 2xl:h-20 2xl:text-2xl rounded-xl "
                    type="text"
                    id="firstName"
                    placeholder="First Name "
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="custom-textarea placeholder-gray-400 2xl:h-20 2xl:text-2xl rounded-xl"
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>

                {/* Phone Number with Country Code */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <div className="flex mt-1 sm:mt-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="custom-textare 2xl:h-14 2xl:text-2xl rounded-xl"
                    >
                      <option value="+971">🇦🇪</option>
                      <option value="+92">🇵🇰</option>
                      <option value="+91">🇮🇳</option>
                      <option value="+1">🇺🇸</option>
                    </select>
                    <input
                      className="custom-textarea placeholder-gray-400 2xl:h-20 2xl:text-lg  rounded-xl"
                      type="tel"
                      id="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="custom-textarea placeholder-gray-400 2xl:h-20 2xl:text-2xl  rounded-xl"
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    required
                  />
                </div>

                {/* Select Pest Concern */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="pestConcern"
                  >
                    Select Pest Concern
                  </label>
                  <select
                    id="pestConcern"
                    className="custom-textarea placeholder-gray-400 2xl:h-20 2xl:text-2xl  rounded-xl"
                    required
                  >
                    <option value="">select----</option>
                    <option value="ants">Ants</option>
                    <option value="cockroaches">Cockroaches</option>
                    <option value="termites">Termites</option>
                    <option value="bedbugs">Bed Bugs</option>
                    <option value="rodents">Rodents</option>
                  </select>
                </div>

                {/* Select Priority Type */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="priorityType"
                  >
                    Select Priority Type
                  </label>
                  <select
                    id="priorityType"
                    className="custom-textarea placeholder-gray-400 2xl:h-20 2xl:text-2xl  rounded-xl"
                    required
                  >
                    <option value="">select----</option>
                    <option value="standard">Standard</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-3 sm:mt-4 2xl:mt-6 w-full">
                <label
                  className="text-black/70 font-bold text-xs 2xl:text-2xl"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="custom-textarea placeholder-gray-400 h-28 2xl:h-52 2xl:text-2xl rounded-xl"
                  id="message"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
            </form>
          </div>

          {/* Submit Button */}
          <div className="flex justify-left mt-2 sm:mt-4 2xl:mb-4 2xl:px-12">
            <button
              type="submit"
              className="text-[11px]  rounded-xl font-xs 2xl:text-xl bg-green-600 text-white h-8 w-[120px] sm:w-[130px] 2xl:w-[200px] 2xl:h-16 px-1 active:scale-95 transition hover:bg-green-700"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
