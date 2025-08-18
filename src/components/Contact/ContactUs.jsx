import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import {
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactUs = () => {
  const [Phone, setPhone] = useState("");
  const [Pest_Concern, setPestConcern] = useState("");
  const [Property_Type, setPriorityType] = useState("");
  const { t } = useTranslation();

  const [Message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    formData.append("Phone", Phone); // Add phone manually

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
    <div className="w-[90%]  sm:w-[80%] mx-auto mt-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 sm:mb-8 3xl:text-[50px]">
        Contact Our Team Today & Say Goodbye to Pests
      </h2>

      {/* Two Columns */}
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Left - Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg">
          <h3 className="text-lg md:text-xl font-bold mb-2 3xl:text-[40px] max-w-[90%] 3xl:leading-tight">
            We are always ready to help you and answer your questions
          </h3>
          <p className="text-[#666666] text-xs mb-8  3xl:text-xl max-w-[75%]">
            We’re just a call or message away — let’s solve your pest problems
            quickly and hassle-free!
          </p>

          {/* Phone */}
          <div className="flex items-center gap-3 3xl:gap-6 mb-3">
            <div className="bg-darkgreen rounded-full p-2 3xl:p-3">
              <FaPhoneAlt className="text-white text-[14px] 3xl:text-[20px]" />
            </div>
            <span className="text-sm text-[#666666] 3xl:text-xl">
              +971 52 152 8725, +971 4 375 6435
            </span>
          </div>

          {/* Website */}
          <div className="flex items-center gap-3 3xl:gap-6 mb-3">
            <div className="bg-darkgreen rounded-full p-2 3xl:p-3">
              <FaGlobe className="text-white text-[14px] 3xl:text-[20px]" />
            </div>
            <span className="text-sm text-[#666666] 3xl:text-xl">
              www.accuratepestcontrol.ae
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3  3xl:gap-6 mb-3">
            <div className="bg-darkgreen rounded-full p-2 3xl:p-3">
              <FaEnvelope className="text-white text-[14px] 3xl:text-[20px]" />
            </div>
            <span className="text-sm text-[#666666] 3xl:text-xl">
              info@accuratepestcontrol.ae
            </span>
          </div>

          {/* Locations */}
          <div className="mt-2 w-full sm:max-w-[85%] space-y-4 3xl:space-y-8 relative">
            {/* Vertical line from first icon down to the last */}
            <div className="absolute left-[14px] 3xl:left-[21px] top-[25px] xl:top-[30px] 3xl:top-[40px] w-[2px] h-[calc(94%-40px)] xl:h-[calc(90%-40px)] 3xl:h-[calc(80%-40px)] bg-darkgreen"></div>

            {/* First address with icon */}
            <div className="flex items-start mb-3 relative z-10">
              <div className="bg-darkgreen rounded-full p-2 3xl:p-3 flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-[14px] 3xl:text-[20px]" />
              </div>
              <span className="ml-3 3xl:ml-6 text-[14px] 3xl:text-xl text-[#666666]">
                <strong>Head Office:</strong> Warehouse No.1, Plot No. 247-289,
                Al Qusais Industrial Area 4, Dubai – UAE
              </span>
            </div>

            {/* Second address with bullet */}
            <div className="flex items-start mb-3 relative z-10">
              <div className="bg-darkgreen rounded-full w-5 h-2 xl:w-4 xl:h-2 3xl:w-5 3xl:h-3 mt-2 ml-[11px] 3xl:ml-[16px]"></div>
              <span className="ml-6 3xl:ml-10 text-[14px] 3xl:text-xl text-[#666666]">
                <strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3 &
                4, Muweilah Commercial area, Sharjah – UAE
              </span>
            </div>

            {/* Third address with bullet */}
            <div className="flex items-start relative z-10">
              <div className="bg-darkgreen rounded-full w-4 h-2 xl:h-2 xl:w-3 3xl:w-5 3xl:h-3 mt-2 ml-[11px] 3xl:ml-[16px]"></div>
              <span className="ml-6 3xl:ml-10 text-[14px] 3xl:text-xl text-[#666666]">
                <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074,
                Eastern Sector, Al Zahya 1, Ajman – UAE
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="text-lg font-bold mb-2 3xl:text-xl">Follow Us:</p>
            <div className="flex gap-3">
              <div className="rounded-full bg-darkgreen p-3">
                <FaFacebookF className="text-white text-[20px]" />
              </div>
              <div className="rounded-full bg-darkgreen p-3">
                <FaTwitter className="text-white text-[20px]" />
              </div>
              <div className="rounded-full bg-darkgreen p-3">
                <FaInstagram className="text-white text-[20px]" />
              </div>
              <div className="rounded-full bg-darkgreen p-3">
                <FaYoutube className="text-white text-[20px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-2/4 bg-white p-6 border border-bggray rounded-xl xl:mx-20 3xl:px-10 ">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-3 3xl:space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Contact Us Form" />

            <div>
              <label className="text-xs text-black/70 font-semibold 3xl:text-lg">
                First Name
              </label>
              <input
                type="text"
                name="First_Name"
                placeholder="First Name"
                className="custom-form h-10 3xl:h-12 bg-bggray w-full 3xl:text-base"
                required
              />
            </div>

            <div>
              <label className="text-xs text-black/70 font-semibold 3xl:text-lg ">
                Last Name
              </label>
              <input
                type="text"
                name="Last_Name"
                placeholder="Last Name"
                className="custom-form h-10 3xl:h-12  bg-bggray w-full 3xl:text-base"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                className="text-black/70 font-semibold text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl"
                htmlFor="Phone"
              >
                {"Phone No"}
              </label>
              <div className="custom-textarea border-[#DEDEDE] rounded-md 2xl:rounded-lg text-xs  2xl:h-10 3xl:h-16 4xl:h-20">
                <PhoneInput
                  country={"ae"}
                  value={Phone}
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
                <input type="hidden" name="Phone" value={Phone} />
              </div>
            </div>

            <div>
              <label className="text-xs text-black/70 font-semibold 3xl:text-lg">
                E-mail
              </label>
              <input
                type="Email"
                name="Email"
                placeholder="E-mail"
                className="custom-form h-10 3xl:h-16 bg-bggray w-full 3xl:text-lg"
                required
              />
            </div>

            {/* Pest Concern */}
            <div className="relative">
              <label
                className="text-black/70 font-semibold text-xs 2xl:text-lg 4xl:text-2xl"
                htmlFor="Pest_Concern"
              >
                {t("Select Pest Concern")}
              </label>

              {/* Wrapper for custom arrow */}
              <div className="relative">
                <select
                  id="Pest_Concern"
                  name="Pest_Concern"
                  value={Pest_Concern}
                  onChange={(e) => setPestConcern(e.target.value)}
                  className="custom-textarea border-[#DEDEDE] text-[#B6B6B6] pl-2 2xl:pl-6 3xl:pl-4 2xl:h-10 3xl:h-16 4xl:h-20 text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl rounded-md 2xl:rounded-lg w-full
      appearance-none pr-8" // ✅ hides default arrow & gives space for custom icon
                >
                  <option value="">{t("select----") || "select----"}</option>
                  <option value="Termite">{t("Termite")}</option>
                  <option value="Fumigation">{t("Fumigation")}</option>
                  <option value="Disinfection ">{t("Disinfection ")}</option>
                  <option value="Thermal Fogger ">
                    {t("Thermal Fogger ")}
                  </option>
                </select>

                {/* ✅ Custom solid dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path d="M5 7l5 6 5-6H5z" />
                  </svg>
                </div>
              </div>

              <input type="hidden" name="Pest_Concern" value={Pest_Concern} />
            </div>

            {/* Priority */}
            <div className="relative">
              <label
                className="text-black/70 font-semibold text-xs 2xl:text-lg 4xl:text-2xl"
                htmlFor="Property_Type"
              >
                {t("Select Property Type")}
              </label>

              {/* Wrapper for select + icon */}
              <div className="relative">
                <select
                  id="Property_Type"
                  name="Property_Type"
                  value={Property_Type}
                  onChange={(e) => setPriorityType(e.target.value)}
                  className="custom-textarea border-[#DEDEDE] text-[#B6B6B6] pl-3 2xl:pl-6 3xl:pl-4 2xl:h-10 3xl:h-16 4xl:h-20 text-xs 2xl:text-base 3xl:text-lg 4xl:text-xl rounded-md 2xl:rounded-lg w-full
      appearance-none pr-8" // ✅ hides default arrow & adds space for custom icon
                >
                  <option value="">select----</option>
                  <option value="Commercial ">{t("Commercial ")}</option>
                  <option value="Residential">{t("Residential")}</option>
                </select>

                {/* ✅ Custom solid dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path d="M5 7l5 6 5-6H5z" />
                  </svg>
                </div>
              </div>

              <input type="hidden" name="Property_Type" value={Property_Type} />
            </div>

            <div>
              <label className="text-xs text-black/70 font-semibold 3xl:text-lg">
                Message
              </label>
              <textarea
                id="Message"
                name="Message"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message"
                className="custom-form h-20 3xl:h-32 bg-bggray w-full 3xl:text-lg"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-start mt-4 2xl:mb-2">
              <button
                type="submit"
                className="text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl bg-green-600 text-white rounded-md 2xl:rounded-lg h-8 w-[120px] sm:w-[100px] 2xl:w-[150px] 4xl:w-[180px] 4xl:h-16 2xl:h-12 2xl:mt-16 3xl:mt-2 4xl:mt-20 px-1 active:scale-95 transition hover:bg-green-700"
              >
                {t("Send Message")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
