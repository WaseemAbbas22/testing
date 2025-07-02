import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
      className="flex flex-col justify-center items-center text-center bg-cover bg-center px-6 py-12"
      style={{
        backgroundImage: "url('https://yourdomain.com/your-bg-image.jpg')",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "darken",
      }}
    >
      <h2 className="text-white text-3xl font-bold mb-6">Get a free inspection</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl"
      >
        {/* Inputs Container */}
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row bg-white rounded shadow overflow-hidden w-full max-w-3xl"
        >
          {/* Dropdown */}
          <div className="flex-1 px-4 py-3">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full text-gray-800 text-base focus:outline-none"
              required
            >
              <option value="">Select Service</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Termite Control">Termite Control</option>
              <option value="Cleaning">Cleaning</option>
            </select>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-green-600 h-12"></div>

          {/* Name */}
          <div className="flex-1 px-4 py-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-gray-800 text-base focus:outline-none"
              required
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-green-600 h-12"></div>

          {/* Phone Number with country flag */}
          <div className="flex-1 px-4 py-3">
            <PhoneInput
              country={"ae"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "100%",
                height: "48px",
                fontSize: "1rem",
              }}
              containerStyle={{ width: "100%" }}
              required
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-green-600 h-12"></div>

          {/* Email */}
          <div className="flex-1 px-4 py-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-gray-800 text-base focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Send Button Outside Inputs Container */}
        <div
          className="mt-4 md:mt-0 md:ml-4"
          style={{ height: containerHeight || "auto" }}
        >
          <button
            type="submit"
            className="bg-gray-600 text-white text-base font-semibold px-6 py-3 h-full rounded shadow hover:bg-green-600 transition w-full md:w-auto"
            style={{ height: containerHeight || "auto" }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactRequest;
