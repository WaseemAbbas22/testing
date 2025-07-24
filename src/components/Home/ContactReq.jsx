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
  const [pcontainerHeight, setContainerHeight] = useState(0);

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
        relative sm:h-[30vh] flex flex-col items-center justify-center px-0 py-10 w-full bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `url(${Cir1})`,
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative w-[90%] xl:w-[75%] 3xl:w-[75%] 4xl:w-[72%] mx-auto flex flex-col items-start">
        <h2 className="text-white text-3xl font-semibold mb-6 text-left lg:text-4xl xl:text-3xl 2xl:text-6xl">
          Get a Free Inspection
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full md:flex-row"
        >
          {/* Inputs Container */}
          <div
            ref={containerRef}
            className="
              flex flex-col bg-white rounded-lg shadow w-full
              md:flex-row
            "
          >
            {/* Dropdown */}
            <div className="flex-1 px-4 py-3 ">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full 4xl:ml-2 text-[#999999] text-xs xl:text-sm 3xl:text-2xl 4xl:text-2xl focus:outline-none h-12 lg:h-10 xl:h-10 2xl:h-20 border-b border-[#D7D7D7] focus:outline-none md:border-0"
                required
              >
                <option value="">Select Pest Concern</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Termite Control">Termite Control</option>
                <option value="Cleaning">Cleaning</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#999999] h-auto mt-2"></div>

            {/* Name */}
            <div className="flex-1 px-4 py-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full 4xl:ml-4 text-[#999999] text-xs xl:text-sm 3xl:text-2xl 4xl:text-2xl focus:outline-none h-10 lg:h-10 xl:h-10 2xl:h-16 border-b border-[#D7D7D7] focus:outline-none md:border-0"
                required
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#999999] h-auto mt-2"></div>

            {/* Phone Number */}
            <div className="flex-1 w-[25%] px-4 py-2 text-sm xl:text-xl 3xl:text-2xl 4xl:text-4xl text-[#999999] ">
              <PhoneInput
                country={"ae"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                dropdownStyle={{
                  maxHeight: "50vh",
                  overflowY: "auto",
                }}
                inputClass="
    w-full
    h-[70px] text-[24px]
    flex items-center

    lg:h-[60px] lg:text-[20px]
    md:h-[50px] md:text-[18px]
    sm:h-[45px] sm:text-[16px]
  "
    
                containerClass="
    w-full flex items-center
    border-transperant outline-none shadow-none
    focus:outline-none focus:ring-0
  "
                required
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#999999] h-auto mt-2"></div>

            {/* Email */}
            <div className="flex-1 px-4 py-2">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-[#999999] text-xs 4xl:ml-4 xl:text-sm 3xl:text-2xl 4xl:text-2xl focus:outline-none h-10 lg:h-10 xl:h-10 2xl:h-20 "
                required
              />
            </div>
          </div>

          {/* Send Button */}
          <div className="mt-4 w-full md:mt-0 md:ml-6 md:w-auto flex justify-left sm:ml-10">
            <button
              type="submit"
              className="bg-[#32A849] text-white text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-6 md:px-8 py-2 xl:py-4 3xl:py-8 4xl:px-10 4xl:px-14 4xl:text-[24px] rounded sm:rounded-lg shadow hover:bg-green-700 transition"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactRequest;
