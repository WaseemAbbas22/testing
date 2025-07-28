// src/components/Home/Form.jsx
import { useState } from "react";
import Vector from "/src/assets/Home/VectorForm.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from '../../utils/translations'; // Correct import path

const Form = () => {
  const [phone, setPhone] = useState("");
  const { t, currentLanguage } = useTranslation();

  return (
    <div className="relative bg-green-600 py-10">
      {/* Vector Design */}
      <img
        src={Vector}
        className="absolute top-0 -right-0 h-full object-cover opacity-80 pointer-events-none overflow-hidden"
        alt="vector design"
      />
      <div className="bg-[#33A92F80] w-full 4xl:h-[90vh] h-[115vh] flex items-center justify-center px-4 sm:px-6 xl:px-8">
        {/* White container */}
        <div className="bg-white border border-[#D6D6D6] rounded-2xl shadow-lg w-[80%] h-[95%] flex flex-col p-4 sm:p-6 z-10">
          {/* Heading at top */}
          <h1 className="text-xl sm:text-2xl md:text-4xl 2xl:text-6xl 3xl:text-7xl font-semibold text-black-400 text-center mb-4 sm:mb-6 2xl:mt-12">
            {t('getInTouch')}
          </h1>

          {/* Form Inputs */}
          <div className="flex-grow flex flex-col justify-center">
            <form className="flex flex-col items-center text-sm w-full h-full 2xl:mt-4 2xl:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 2xl:gap-10 w-full">
                {/* First Name */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="firstName"
                  >
                    {t('firstName')}
                  </label>
                  <input
                    className="custom-textarea border-[#DEDEDE] placeholder-gray-100 pl-4 2xl:pl-6 2xl:h-16 3xl:h-20 2xl:text-xl 3xl:text-2xl rounded-lg 2xl:rounded-xl"
                    type="text"
                    id="firstName"
                    placeholder={t('firstName')}
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="lastName"
                  >
                    {t('lastName')}
                  </label>
                  <input
                    className="custom-textarea border-[#DEDEDE] placeholder-gray-400 pl-4 2xl:pl-6 2xl:h-16 3xl:h-20 2xl:text-xl 3xl:text-2xl rounded-xl"
                    type="text"
                    id="lastName"
                    placeholder={t('lastName')}
                    required
                  />
                </div>

                {/* Phone Number with Country Code */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="phone"
                  >
                    {t('phoneNo')}
                  </label>
                  <div className="custom-textarea border-[#DEDEDE] placeholder-gray-400 pl-4 2xl:pl-6 2xl:h-16 3xl:h-20 2xl:text-2xl rounded-xl p-0 overflow-hidden">
                    <PhoneInput
                      country={"ae"}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      dropdownStyle={{
                        maxHeight: "30vh",
                        overflowY: "auto",
                        border: "none",
                        boxShadow: "none",
                      }}
                      inputStyle={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        background: "transparent",
                        width: "100%",
                        paddingLeft: "48px",
                        height: "100%",
                        fontSize: "inherit",
                        color: "#999999",
                      }}
                      buttonStyle={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        background: "transparent",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                      containerStyle={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        background: "transparent",
                        width: "100%",
                        height: "100%",
                        padding: "0",
                        margin: "0",
                      }}
                      inputClass="
                        text-[#999999]  
                        text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 4xl:!text-2xl 4xl:!ml-2
                        placeholder-gray-400
                      "
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="email"
                  >
                    {t('email')}
                  </label>
                  <input
                    className="custom-textarea border-[#DEDEDE] placeholder-gray-400 pl-4 2xl:pl-6 2xl:h-16 3xl:h-20 2xl:text-xl 3xl:text-2xl rounded-xl"
                    type="email"
                    id="email"
                    placeholder={t('email')}
                    required
                  />
                </div>

                {/* Select Pest Concern */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="pestConcern"
                  >
                    {t('selectPestConcern')}
                  </label>
                  <select
                    id="pestConcern"
                    className="custom-textarea border-[#DEDEDE] text-[#B6B6B6] pl-4 2xl:pl-6 2xl:h-16 3xl:h-20 2xl:text-xl 3xl:text-2xl rounded-xl"
                    required
                  >
                    <option value="">select----</option>
                    <option value="ants">{t('ants')}</option>
                    <option value="cockroaches">{t('cockroaches')}</option>
                    <option value="termites">{t('termites')}</option>
                    <option value="bedbugs">{t('bedbugs')}</option>
                    <option value="rodents">{t('rodents')}</option>
                  </select>
                </div>

                {/* Select Priority Type */}
                <div>
                  <label
                    className="text-black/70 font-bold text-xs 2xl:text-2xl"
                    htmlFor="priorityType"
                  >
                    {t('selectPriorityType')}
                  </label>
                  <select
                    id="priorityType"
                    className="custom-textarea border-[#DEDEDE] text-[#B6B6B6] pl-4 2xl:pl-6 2xl:h-16 3xl:h-20 2xl:text-xl 3xl:text-2xl rounded-xl"
                    required
                  >
                    <option value="">select----</option>
                    <option value="standard">{t('standard')}</option>
                    <option value="urgent">{t('urgent')}</option>
                    <option value="emergency">{t('emergency')}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-3 sm:mt-4 2xl:mt-6 w-full">
                <label
                  className="text-black/70 font-bold text-xs 2xl:text-2xl"
                  htmlFor="message"
                >
                  {t('message')}
                </label>
                <textarea
                  className="custom-textarea border-[#DEDEDE] text-[#B6B6B6] pl-4 2xl:pl-6 4xl:py-6 h-28 2xl:h-52 2xl:text-xl 3xl:text-2xl rounded-xl"
                  id="message"
                  placeholder={t('writeYourMessage')}
                  required
                ></textarea>
              </div>
            </form>
          </div>

          {/* Submit Button */}
          <div className="flex justify-left mt-2 sm:mt-4 2xl:mb-4 2xl:px-12">
            <button
              type="submit"
              className="text-[11px] rounded-xl font-xs 2xl:text-xl bg-green-600 text-white h-8 w-[120px] sm:w-[130px] 2xl:w-[200px] 2xl:h-16 px-1 active:scale-95 transition hover:bg-green-700"
            >
              {t('sendMessage')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;