import { useState } from "react";
import Vector from "@/assets/Home/VectorForm.webp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "../../utils/translations";
import { useRef } from "react";

const Form = () => {
  const [phone, setPhone] = useState("");
  const [pestConcern, setPestConcern] = useState("");
  const [priorityType, setPriorityType] = useState("");
  const { t } = useTranslation();

  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    formData.append("phone", phone); // Add phone manually

    try {
      await fetch("https://formsubmit.co/dde8afb3bc99d85ee4bdf6b0e0052631", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      // Optionally reset fields
      formRef.current.reset();
      setPhone("");
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="relative bg-green-600 py-6 md:h-[120vh] 2xl:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Vector */}
      <img
        src={Vector}
        alt="vector design"
        className="absolute top-0 right-0 h-full object-cover opacity-80 pointer-events-none"
      />

      {/* Container */}
      <div className="relative bg-[#33A92F80] w-full h-full flex items-center justify-center px-4 sm:px-6 xl:px-8">
        <div className="bg-white border border-[#D6D6D6] rounded-2xl shadow-lg sm:w-[70%] h-[96%] flex flex-col px-4 sm:px-10 py-6 sm:py-4 z-10 overflow-y-auto">
          {/* Heading */}
          <h1 className="text-center text-black/80 font-bold text-xl sm:text-2xl md:text-4xl 2xl:text-5xl text-black mb-4 3xl:mb-0 3xl:mt-2 2xl:mb-0 2xl:mt-4 4xl:mb-12 4xl:mt-8 4xl:text-6xl">
            {t("getInTouch")}
          </h1>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col justify-center flex-grow w-full 2xl:space-y-4 4xl:space-y-16 3xl:space-y-6 px-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Help Out Form Landing Page"
            />

            {/* Grid Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-x-8 3xl:gap-x-12   w-full">
              {/* First Name */}
              <div>
                <label
                  className="text-black/70 font-semibold text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl "
                  htmlFor="firstName"
                >
                  {t("firstName")}
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName" // ✅ REQUIRED
                  placeholder={t("firstName")}
                  className="custom-textarea border-[#DEDEDE] placeholder-gray-100 pl-3 mt-2 2xl:pl-6 3xl:pl-4 2xl:h-10 3xl:h-16 4xl:h-20 text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl rounded-md 2xl:rounded-lg w-full"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  className="text-black/70 font-semibold text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl"
                  htmlFor="lastName"
                >
                  {t("lastName")}
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName" // ✅ REQUIRED
                  placeholder={t("lastName")}
                  className="custom-textarea border-[#DEDEDE] placeholder-gray-400 pl-3 mt-2 2xl:pl-6 3xl:pl-4 2xl:h-10 3xl:h-16 4xl:h-20 text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl rounded-md 2xl:rounded-lg w-full"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="text-black/70 font-semibold text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl"
                  htmlFor="phone"
                >
                  {t("phoneNo")}
                </label>
                <div className="custom-textarea border-[#DEDEDE] rounded-md 2xl:rounded-lg text-xs mt-2  2xl:h-10 3xl:h-16 4xl:h-20">
                  <PhoneInput
                    country={"ae"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    containerStyle={{
                      width: "100%",
                      height: "100%",
                      background: "transparent",
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      background: "transparent",
                      paddingLeft: "48px",
                      fontSize: "inherit",
                      color: "#999999",
                    }}
                    buttonStyle={{
                      background: "transparent",
                      border: "none",
                      height: "100%",
                    }}
                    dropdownStyle={{
                      maxHeight: "30vh",
                      overflowY: "auto",
                    }}
                    inputClass="text-[#999999]  text-xs  2xl:text-base 3xl:text-lg"
                    required
                  />
                  <input type="hidden" name="phone" value={phone} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  className="text-black/70 font-semibold text-xs 3xl:text-lg 2xl:text-base 4xl:text-2xl"
                  htmlFor="email"
                >
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email" // ✅ REQUIRED
                  placeholder={t("email")}
                  className="custom-textarea border-[#DEDEDE] mt-2 placeholder-gray-400 pl-3 2xl:pl-6 3xl:pl-4 2xl:h-10 3xl:h-16 4xl:h-20 text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl rounded-md 2xl:rounded-lg w-full"
                  required
                />
              </div>

              {/* Pest Concern */}
              <div className="relative">
                <label
                  className="text-black/70 font-semibold text-xs 2xl:text-lg 4xl:text-2xl"
                  htmlFor="pestConcern"
                >
                  {t("selectPestConcern")}
                </label>

                <select
                  id="pestConcern"
                  name="pestConcern"
                  value={pestConcern}
                  onChange={(e) => setPestConcern(e.target.value)}
                  className="appearance-none custom-textarea border-[#DEDEDE] mt-2 text-[#B6B6B6] 
               pl-2 pr-8 2xl:pl-6 3xl:pl-4 2xl:h-10 3xl:h-16 4xl:h-20 
               text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl 
               rounded-md 2xl:rounded-lg w-full"
                >
                  <option value="" disabled>{t("select---")}</option> 
                  <option value="General Pest Control" >General Pest Control</option>
                  <option value="Termite">{t("Termite")}</option>
                  <option value="Fumigation">{t("Fumigation")}</option>
                  <option value="disinfection">{t("Disinfection")}</option>
                  <option value="Thermal Fogger">{t("Thermal Fogger")}</option>
                  <option value="Cleaning">{t("Cleaning")}</option>
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

                <input type="hidden" name="pestConcern" value={pestConcern} />
              </div>

              {/* Priority */}
              <div className="relative">
                <label
                  className="text-black/70 font-semibold text-xs 2xl:text-lg 4xl:text-2xl"
                  htmlFor="priorityType"
                >
                  {t("Select Property Type")}
                </label>

                <select
                  id="priorityType"
                  name="priorityType"
                  value={priorityType}
                  onChange={(e) => setPriorityType(e.target.value)}
                  className="appearance-none custom-textarea border-[#DEDEDE] mt-2 text-[#B6B6B6] 
               pl-3 pr-8 2xl:pl-6 3xl:pl-4 2xl:h-10 3xl:h-16 4xl:h-20 
               text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl 
               rounded-md 2xl:rounded-lg w-full"
                >
                  <option value="" disabled >select----</option>
                  <option value="residential">{t("Residential")}</option>
                  <option value="commercial">{t("Commercial")}</option>
                  </select>

                {/* Filled black triangle arrow */}
                <div className="absolute inset-y-0  right-3 top-6 flex items-center pointer-events-none mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-black/50"
                  >
                    <path d="M5 7l5 6 5-6H5z" />
                  </svg>
                </div>

                <input type="hidden" name="priorityType" value={priorityType} />
              </div>
            </div>

            {/* Message Box */}
            <div className=" w-full">
              <label
                className="text-black/70 font-semibold text-xs 2xl:text-lg 4xl:text-2xl"
                htmlFor="message"
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("writeYourMessage")}
                className="custom-textarea border-[#DEDEDE] text-[#B6B6B6] mt-2 pl-4 2xl:pl-6 3xl:pl-4 4xl:py-6 h-28 2xl:h-40 3xl:h-48 4xl:h-56 text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl rounded-md 2xl:rounded-lg w-full"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-start mt-2 2xl:mb-0">
              <button
                type="submit"
                className="text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl bg-green-600 text-white rounded-md 2xl:rounded-lg h-8 w-[120px] sm:w-[100px] 2xl:w-[150px] 4xl:w-[180px] 4xl:h-16 2xl:h-12 2xl:mt-16 3xl:mt-0 4xl:mt-20 px-1 active:scale-95 transition hover:bg-green-700"
              >
                {t("sendMessage")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
