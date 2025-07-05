import { FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  return (
    <div className="w-full min-h-[50vh] bg-gray-50 flex flex-col mb-20">
      {/* Main Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 py-6 px-4">
        Contact Our Team Today & Say Goodbye to Pests
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full px-4 md:px-16">
        {/* Left Part */}
        <div className="md:w-1/2 flex flex-col justify-start items-start bg-white p-6 md:p-10 overflow-y-auto">
          <h3 className="text-green-700 text-lg md:text-xl font-semibold mb-2">
            We are always ready to help you and answer your questions
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            We’re just a call or message away — let’s solve your pest problems quickly and hassle-free!
          </p>

          <div className="space-y-4 text-base text-gray-700">
            <p className="flex items-center gap-3 text-green-700 text-lg"><FaPhoneAlt /> <span className="text-gray-800">+971 123 4567</span></p>
            <p className="flex items-center gap-3 text-green-700 text-lg"><FaGlobe /> <span className="text-gray-800">www.accuratepestcontrol.ae</span></p>
            <p className="flex items-center gap-3 text-green-700 text-lg"><FaEnvelope /> <span className="text-gray-800">info@accuratepestcontrol.ae</span></p>

            {/* Location Icon with Line */}
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <FaMapMarkerAlt className="text-green-700 text-2xl" />
                <div className="w-px h-14 bg-green-700"></div> {/* Vertical line */}
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-gray-800">Head Office: Dubai, UAE</p>
                <p className="text-gray-800">Sharjah Branch: Sharjah, UAE</p>
                <p className="text-gray-800">Ajman Branch: Ajman, UAE</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6">
            <p className="text-base text-gray-800 mb-2">Follow Us:</p>
            <div className="flex space-x-4 text-green-700">
              <FaFacebook className="hover:text-green-800 cursor-pointer text-xl" />
              <FaTwitter className="hover:text-green-800 cursor-pointer text-xl" />
              <FaLinkedin className="hover:text-green-800 cursor-pointer text-xl" />
              <FaInstagram className="hover:text-green-800 cursor-pointer text-xl" />
            </div>
          </div>
        </div>

        {/* Right Part (Form) */}
        <div className="md:w-1/2 bg-gray-100 p-6 md:p-10">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">First Name</label>
              <input type="text" className="border border-gray-300 rounded p-2 bg-white" required />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Last Name</label>
              <input type="text" className="border border-gray-300 rounded p-2 bg-white" required />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Phone Number with Country Code</label>
              <PhoneInput
                country={'ae'}
                inputClass="!w-full !border !border-gray-300 !rounded !bg-white"
                containerClass="!w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Email</label>
              <input type="email" className="border border-gray-300 rounded p-2 bg-white" required />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Select Pest Concern</label>
              <select className="border border-gray-300 rounded p-2 bg-white" required>
                <option>Select Pest Concern</option>
                <option>Bed Bugs</option>
                <option>Termites</option>
                <option>Rodents</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Select Property Type</label>
              <select className="border border-gray-300 rounded p-2 bg-white" required>
                <option>Select Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Message</label>
              <textarea className="border border-gray-300 rounded p-2 h-24 resize-none bg-white" required></textarea>
            </div>

            <button type="submit" className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
