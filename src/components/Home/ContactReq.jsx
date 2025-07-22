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
      className="
        relative 2xl:h-[35vh] flex flex-col items-center px-0 py-10 w-full bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `url(${Cir1})`,
        backgroundSize: "cover",
      }}
      // Mobile View: flex-col, px-0
      // Tab View: same as Mobile
      // Laptop View: same as Mobile
      // Desktop View: same as Mobile
      // Big Screen View: same as Mobile
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content */}
      <div
        className="
          relative z-10 w-full flex flex-col items-center
        "
        // Mobile View: w-full, centered
        // Tab View: same
        // Laptop View: same
        // Desktop View: same
        // Big Screen View: same
      >
        <h2
          className="
            text-white text-3xl font-semibold mb-6
            lg:ml-[-750px] 2xl:text-6xl
          "
          // Mobile View: text-center, no margin-left
          // Tab View: same as Mobile
          // Laptop View: md:ml-[-630px]
          // Desktop View: same as Laptop
          // Big Screen View: same as Laptop
        >
          Get a Free Inspection
        </h2>

        <form
          onSubmit={handleSubmit}
          className="
            flex flex-col items-center justify-center w-full lg:max-w-5xl
            md:flex-row
          "
          // Mobile View: flex-col
          // Tab View: same
          // Laptop View: md:flex-row
          // Desktop View: same as Laptop
          // Big Screen View: same as Laptop
        >
          {/* Inputs Container */}
          <div
            ref={containerRef}
            className="
              flex flex-col bg-white rounded shadow w-[90%] md:w-full max-w-4xl
              md:flex-row
            "
            // Mobile View: flex-col, w-full
            // Tab View: same as Mobile
            // Laptop View: md:flex-row
            // Desktop View: same as Laptop
            // Big Screen View: same as Laptop
          >
            {/* Dropdown */}
            <div
              className="
                flex-1 px-4 py-1
              "
              // All Screens: flex-1, px-4, py-1
            >
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="
                  w-full text-[#999999] text-xs focus:outline-none h-12
                "
                required
              >
                <option value="">Select Pest Concern</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Termite Control">Termite Control</option>
                <option value="Cleaning">Cleaning</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#999999] h-10 mt-2"></div>

            {/* Name */}
            <div
              className="
                flex-1 px-4 py-2
              "
              // All Screens: flex-1, px-4, py-2
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full text-[#999999] text-xs focus:outline-none h-10
                "
                required
              />
            </div>

            {/* Divider */}
            <div
              className="
                hidden md:block w-px bg-[#999999] h-10 mt-2
              "
              // Same as previous divider
            ></div>

            {/* Phone Number */}
            <div
              className="
                flex-1 px-4 py-2 text-xs text-[#999999]
              "
              // All Screens: flex-1, px-4, py-2
            >
              <PhoneInput
                country={"ae"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                dropdownStyle={{
                  maxHeight: "50vh",
                  overflowY: "auto",
                }}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "12px",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                }}
                buttonStyle={{
                  border: "none",
                  background: "transparent",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                }}
                containerStyle={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                required
              />
            </div>

            {/* Divider */}
            <div
              className="
                hidden md:block w-px bg-[#999999] h-10 mt-2
              "
              // Same as previous dividers
            ></div>

            {/* Email */}
            <div
              className="
                flex-1 px-4 py-2
              "
              // All Screens: flex-1, px-4, py-2
            >
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full text-[#999999] text-xs focus:outline-none h-10
                "
                required
              />
            </div>
          </div>

          {/* Send Button */}
          <div
            className="
              mt-4 w-full md:mt-0 md:ml-4 md:w-auto flex justify-left ml-10
            "
            // style={{ height: containerHeight || "auto" }}
            // Mobile View: mt-4, w-full
            // Tab View: same
            // Laptop View: md:mt-0, md:ml-4, md:w-auto
            // Desktop View: same as Laptop
            // Big Screen View: same as Laptop
          >
            <button
              type="submit"
              className="bg-green-600 text-white 
    text-sm sm:text-base md:text-lg
    font-semibold
    px-4 sm:px-6 md:px-8
    py-2 md:py-3
    rounded shadow
    hover:bg-green-700 transition
  "
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
