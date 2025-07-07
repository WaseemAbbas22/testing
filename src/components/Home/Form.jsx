import { useState } from "react";

const Form = () => {
  const [countryCode, setCountryCode] = useState("+971"); // default UAE

  return (
    <div className="bg-green-600 w-full min-h-[120vh] flex items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32">
      
      {/* White container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[600px] flex flex-col p-6 md:p-10">

        {/* Heading at top */}
        <h1 className="text-2xl md:text-4xl font-semibold text-black-400 text-center mb-6">
          Get in Touch
        </h1>

        {/* Form Inputs */}
        <div className="flex-grow flex flex-col justify-center">
          <form className="flex flex-col items-center text-sm w-full h-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              
              {/* First Name */}
              <div>
                <label className="text-black/70 font-bold text-xs" htmlFor="firstName">First Name</label>
                <input
                  className="h-10 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300 bg-[#F2F2F2] placeholder-gray-400"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="text-black/70 font-bold text-xs" htmlFor="lastName">Last Name</label>
                <input
                  className="h-10 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300 bg-[#F2F2F2] placeholder-gray-400"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>

              {/* Phone Number with Country Code */}
              <div>
                <label className="text-black/70 font-bold text-xs" htmlFor="phone">Phone Number</label>
                <div className="flex mt-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="border border-gray-500/30 rounded-l h-10 px-2 bg-[#F2F2F2] focus:border-green-300"
                  >
                    <option value="+971">🇦🇪</option>
                    <option value="+92">🇵🇰</option>
                    <option value="+91">🇮🇳</option>
                    <option value="+1">🇺🇸</option>
                  </select>
                  <input
                    className="h-10 p-2 w-full border-t border-b border-r border-gray-500/30 rounded-r outline-none focus:border-green-300 bg-[#F2F2F2] placeholder-gray-400"
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-black/70 font-bold text-xs" htmlFor="email">Email</label>
                <input
                  className="h-10 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300 bg-[#F2F2F2] placeholder-gray-400"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  required
                />
              </div>

              {/* Select Pest Concern */}
              <div>
                <label className="text-black/70 font-bold text-xs" htmlFor="pestConcern">Select Pest Concern</label>
                <select
                  id="pestConcern"
                  className="h-10 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300 bg-[#F2F2F2] text-gray-700"
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
                <label className="text-black/70 font-bold text-xs" htmlFor="priorityType">Select Priority Type</label>
                <select
                  id="priorityType"
                  className="h-10 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300 bg-[#F2F2F2] text-gray-700"
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
            <div className="mt-4 w-full">
              <label className="text-black/70 font-bold text-xs" htmlFor="message">Message</label>
              <textarea
                className="w-full mt-2 p-2 h-20 border border-gray-500/30 rounded resize-none outline-none focus:border-green-300 bg-[#F2F2F2] placeholder-gray-400"
                id="message"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

          </form>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-1">
          <button
            type="submit"
            className="text-[11px] font-xs bg-green-600 text-white h-8 w-[130px] px-1 rounded active:scale-95 transition hover:bg-green-700"
          >
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
};

export default Form;
