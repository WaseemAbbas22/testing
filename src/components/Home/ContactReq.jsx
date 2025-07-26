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
      <div className="relative w-[90%] mx-auto flex flex-col items-start 
      xl:w-[75%]  
      3xl:w-[75%] 
      4xl:w-[72%] ">
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
                className="w-full text-[#999999] text-xs focus:outline-none h-12  border-b border-[#D7D7D7] focus:outline-none
                md:border-0
                lg:h-10
                xl:text-sm xl:h-10
                2xl:h-20
                3xl:text-2xl
                4xl:text-2xl 4xl:ml-2"
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
            <div className="flex-1 px-4 py-3 4xl:py-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full 4xl:ml-4 text-[#999999] border-b border-[#D7D7D7] text-xs  focus:outline-none h-10 
                md:border-0
                lg:h-10 
                xl:h-10  xl:text-sm
                2xl:h-16
                3xl:h-20 focus:outline-none 3xl:text-2xl 
                4xl:text-2xl"

                required
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#999999] h-auto mt-2"></div>

            {/* Phone */}
            <div className="flex-1 px-4 py-3 4xl:py-5">
              <div className="h-10 lg:h-10 xl:h-10 2xl:h-16 3xl:h-20 w-full relative">
                <PhoneInput
                  country={"ae"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputClass="!w-full !h-full !pl-12 !text-[#999999] !bg-transparent !border-none focus:!outline-none text-xs 
                  xl:text-sm 
                  3xl:!text-xl 3xl:!ml-2 
                  4xl:text-2xl"
                  containerClass="!w-full !h-full !bg-transparent !flex !items-center !border-b !border-[#D7D7D7] md:border-none !outline-none"
                  buttonClass="!bg-transparent !border-none !h-full !flex !items-center"
                  dropdownStyle={{
                    maxHeight: "30vh",
                    overflowY: "auto",
                    border: "none",
                    boxShadow: "none",
                  }}
                  required
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#999999] h-auto mt-2"></div>

            {/* Email */}
            <div className="flex-1 px-4 py-1 4xl:py-3">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-[#999999] text-xs  focus:outline-none h-10
                lg:h-10
                xl:text-sm xl:h-14 
                2xl:h-20
                3xl:text-2xl  3xl:h-24 
                4xl:ml-4 4xl:text-2xl"
                required
              />
            </div>
          </div>

          {/* Send Button */}
          <div className="mt-4 w-full md:mt-0 md:ml-6 md:w-auto flex justify-left sm:ml-10">
            <button
              type="submit"
              className="bg-[#32A849] text-white text-sm font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition
              sm:text-base  sm:px-6 sm:rounded-lg
              md:text-lg md:px-8  
              xl:py-[17px]
              3xl:py-[36px] 3xl:px-16 3xl:text-2xl 
              4xl:px-16 4xl:px-14 4xl:py-11 4xl:text-[24px]   "
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
