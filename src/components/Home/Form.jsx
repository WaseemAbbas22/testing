import { useState } from "react";

const Form = () => {
  const [countryCode, setCountryCode] = useState("+971"); // default UAE

  return (
    <div className="bg-green-600 w-full py-12 px-6 md:px-16 lg:px-24 xl:px-32 flex justify-center">
      <form className="flex flex-col items-center text-sm bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        
        {/* Heading */}
        <p className="text-lg text-green-600 font-medium pb-2">Contact Us</p>
        <h1 className="text-4xl font-semibold text-slate-700 pb-4 text-center">Get in touch with us</h1>
        <p className="text-sm text-gray-500 text-center pb-10 max-w-xl">
          Let us know your concerns and our team will get back to you with the best eco-friendly pest solutions.
        </p>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* First Name */}
          <div>
            <label className="text-black/70" htmlFor="firstName">First Name</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300"
              type="text"
              id="firstName"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-black/70" htmlFor="lastName">Last Name</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300"
              type="text"
              id="lastName"
              required
            />
          </div>

          {/* Phone Number with Country Code */}
          <div>
            <label className="text-black/70" htmlFor="phone">Phone Number</label>
            <div className="flex mt-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="border border-gray-500/30 rounded-l h-12 px-2 bg-white focus:border-green-300"
              >
                <option value="+971">🇦🇪 +971</option>
                <option value="+92">🇵🇰 +92</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                className="h-12 p-2 w-full border-t border-b border-r border-gray-500/30 rounded-r outline-none focus:border-green-300"
                type="tel"
                id="phone"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-black/70" htmlFor="email">Email</label>
            <input
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300"
              type="email"
              id="email"
              required
            />
          </div>

          {/* Select Pest Concern */}
          <div>
            <label className="text-black/70" htmlFor="pestConcern">Select Pest Concern</label>
            <select
              id="pestConcern"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300 bg-white"
              required
            >
              <option value="">Select Concern</option>
              <option value="ants">Ants</option>
              <option value="cockroaches">Cockroaches</option>
              <option value="termites">Termites</option>
              <option value="bedbugs">Bed Bugs</option>
              <option value="rodents">Rodents</option>
              {/* Add more concerns as needed */}
            </select>
          </div>

          {/* Select Priority Type */}
          <div>
            <label className="text-black/70" htmlFor="priorityType">Select Priority Type</label>
            <select
              id="priorityType"
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-300 bg-white"
              required
            >
              <option value="">Select Priority</option>
              <option value="standard">Standard</option>
              <option value="urgent">Urgent</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>

        </div>

        {/* Message */}
        <div className="mt-6 w-full">
          <label className="text-black/70" htmlFor="message">Message</label>
          <textarea
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-green-300"
            id="message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 bg-green-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition hover:bg-green-700"
        >
          Send Message
        </button>

      </form>
    </div>
  );
};

export default Form;
