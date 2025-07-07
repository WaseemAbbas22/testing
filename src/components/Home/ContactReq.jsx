import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Cir1 from "/src/assets/Home/image79.png";

const ContactRequest = () => {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ service, name, phone, email });
  };

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef.current]);

  return (
    <div
      className="relative flex flex-col items-center px-0 py-10 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Cir1})`,
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-white text-3xl font-semibold md:ml-[-595px] mb-6">Get a Free Inspection</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl"
        >
          {/* Inputs Container */}
          <div
            ref={containerRef}
            className="flex flex-col md:flex-row bg-white rounded shadow overflow-hidden w-full max-w-4xl"
          >
            {/* Dropdown */}
            <div className="flex-1 px-4 py-1">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-gray-800 text-base focus:outline-none h-12"
                required
              >
                <option value="">Select Service</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Termite Control">Termite Control</option>
                <option value="Cleaning">Cleaning</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-green-600 h-10"></div>

            {/* Name */}
            <div className="flex-1 px-4 py-1">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-gray-800 text-base focus:outline-none h-10"
                required
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-green-600 h-10"></div>

            {/* Phone Number */}
            <div className="flex-1 px-4 py-1">
              <PhoneInput
                country={"ae"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "1rem",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
                containerStyle={{ width: "100%" }}
                required
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-600 h-15"></div>

            {/* Email */}
            <div className="flex-1 px-4 py-1">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-gray-800 text-base focus:outline-none h-10"
                required
              />
            </div>
          </div>

          {/* Send Button */}
          <div
            className="mt-4 md:mt-0 md:ml-4"
            style={{ height: containerHeight || "auto" }}
          >
            <button
              type="submit"
              className="bg-green-600 text-white text-base font-semibold px-6 py-3 h-full rounded shadow hover:bg-green-600 transition w-full md:w-auto"
              style={{ height: containerHeight || "auto" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactRequest;
