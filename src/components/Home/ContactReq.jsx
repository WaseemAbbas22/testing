import { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Cir1 from "/src/assets/Home/image79.webp";

const ContactReq = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // Removed unused isSubmitting state
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsSubmitting(true); // Removed unused isSubmitting

    const formData = new FormData(formRef.current);

    try {
      await fetch("https://formsubmit.co/dde8afb3bc99d85ee4bdf6b0e0052631", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );
      setName("");
      setEmail("");
      setPhone("");
      setService("");
    } catch (error) {
      console.error("Form submit error:", error);
    } finally {
      // setTimeout(() => setIsSubmitting(false), 2500); // Removed unused isSubmitting
    }
  };

  return (
    <div
      className="
        relative sm:h-[30vh] flex flex-col md:flex-row items-center justify-center px-0 py-10 w-full bg-cover bg-center bg-no-repeat
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
        <h2 className="text-white text-3xl font-semibold text-left lg:text-4xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
          Get a Free Inspection
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col md:flex-row space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Free Inspection Request"
          />

          {/* Inputs Container */}
          <div
            className="
              flex flex-col bg-white rounded-lg shadow w-full
              md:flex-row  md:h-[60px] 2xl:h-[70px] 4xl:h-[85px]
            "
          >
            {/* Dropdown */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-4 sm:py-0">
              <select
                value={service}
                 name="service" // ✅ REQUIRED
                onChange={(e) => setService(e.target.value)}
                className="w-full text-[#999999] text-xs 3xl:text-lg 4xl:text-2xl focus:outline-none border-b border-[#D7D7D7] md:border-0 h-[38px]"
                required
              >
                <option value="">General Pest Concern</option>
                <option value="Termite">Termite</option>
                <option value="Fumigation">Fumigation</option>
                <option value="disinfection">disinfection</option>
                <option value="Thermal Fogger">Thermal Fogger</option>
                <option value="Cleaning">Cleaning</option>
              </select>
              {/* Filled gray-500 triangle arrow */}
                <div className="absolute inset-y-0 right-3 top-[34px] flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-black/50"
                  >
                    <path d="M5 7l5 6 5-6H5z" />
                  </svg>
                </div>

            </div>

            {/* Divider */}
            <div className="hidden md:block w-0.5 bg-[#CCCCCC] h-auto mt-2 mb-2 2xl:mt-2 2xl:mb-4 3xl:mt-3 3xl:mb-3"></div>

            {/* Name */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-3 2xl:py-2 4xl:py-5">
              <input
                type="text"
                placeholder="Your Name"
                name="name" // ✅ REQUIRED
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-[38px] 4xl:ml-4 text-[#999999] border-b border-[#D7D7D7] text-xs focus:outline-none 
    md:border-0
    xl:text-sm 3xl:text-lg 4xl:text-2xl"
                required
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-0.5 bg-[#CCCCCC] h-auto mt-2 mb-2 2xl:mt-4 2xl:mb-4 3xl:mt-3 3xl:mb-3"></div>

            {/* Phone */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-3 2xl:py-2 4xl:py-5">
              <div className="w-full relative">
                <PhoneInput
                  country={"ae"}
                  name="phone" // ✅ REQUIRED
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
                <input type="hidden" name="phone" value={phone} />

              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-0.5 bg-[#CCCCCC] h-auto mt-2 mb-2 2xl:mt-4 2xl:mb-4 3xl:mt-3 3xl:mb-3 "></div>

            {/* Email */}
            <div className="flex-1 h-full flex items-center justify-center px-4 py-3 2xl:py-2 4xl:py-5">
              <input
                type="email"
                placeholder="Email"
                name="email" // ✅ REQUIRED
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[38px] 4xl:ml-4 text-[#999999] text-xs focus:outline-none 
    md:border-0
    xl:text-sm 3xl:text-lg 4xl:text-2xl"
                required
              />
            </div>
          </div>

          {/* Send Button */}

          <button
            type="submit"
            className="bg-[#32A849] text-white text-sm font-semibold px-8 py-5 h-full rounded shadow 
    hover:bg-green-700 transition duration-300
    sm:text-sm sm:px-10 sm:rounded-md  sm:ml-4
    xl:text-sm 3xl:text-lg 4xl:text-xl"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactReq;
