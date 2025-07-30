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
      <div
        className="relative w-[90%] mx-auto flex flex-col items-start 
      md:w-[70%]"
      >
        <h2 className="text-white text-3xl font-semibold mb-6 text-left lg:text-4xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
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
              md:flex-row  md:h-[60px] 2xl:h-[70px] 
            "
          >
            {/* Dropdown */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-4 sm:py-0">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-[#999999] text-xs focus:outline-none border-b border-[#D7D7D7] md:border-0 h-[38px]"
                required
              >
                <option value="">Select Pest Concern</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Termite Control">Termite Control</option>
                <option value="Cleaning">Cleaning</option>
              </select>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-0.5 bg-[#CCCCCC] h-auto mt-2 mb-2 2xl:mt-4 2xl:mb-4 3xl:mt-6 3xl:mb-6"></div>

            {/* Name */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-3 2xl:py-2 4xl:py-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[38px] 4xl:ml-4 text-[#999999] border-b border-[#D7D7D7] text-xs focus:outline-none 
    md:border-0
    xl:text-sm"
                required
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-0.5 bg-[#CCCCCC] h-auto mt-2 mb-2 2xl:mt-4 2xl:mb-4 3xl:mt-6 3xl:mb-6"></div>

            {/* Phone */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-3 2xl:py-2 4xl:py-5">
              <div className="w-full relative">
                <PhoneInput
                  country={"ae"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputClass="!w-full !h-[38px] !text-[#999999] !bg-transparent !border-none focus:!outline-none text-xs 
      xl:text-sm 
      3xl:!text-xl 3xl:!ml-2 
      4xl:text-2xl"
                  containerClass="!w-full !bg-transparent !flex !items-center !border-b !border-[#D7D7D7] md:border-none !outline-none"
                  buttonClass="!bg-transparent !border-none !h-full !flex !items-center"
                  dropdownStyle={{
                    overflowY: "auto",
                    border: "none",
                    boxShadow: "none",
                  }}
                  required
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-0.5 bg-[#CCCCCC] h-auto mt-2 mb-2 2xl:mt-4 2xl:mb-4 3xl:mt-6 3xl:mb-6 "></div>

            {/* Name */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-3 2xl:py-2 4xl:py-5">
              <input
                type="text"
                placeholder="Email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[38px] 4xl:ml-4 text-[#999999] text-xs focus:outline-none 
    md:border-0
    xl:text-sm"
                required
              />
            </div>
          </div>

          {/* Send Button */}
          <div className="flex items-center justify-start px-4 py-3 2xl:py-2 4xl:py-5 md:py-0 md:h-[60px] 2xl:h-[86px]">
            <button
              type="submit"
              className="bg-[#32A849] text-white text-sm font-semibold px-8 py-4 h-full rounded shadow 
    hover:bg-green-700 transition duration-300
    sm:text-sm sm:px-10 sm:rounded-lg 
    xl:text-sm 3xl:text-lg 4xl:text-xl"
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
