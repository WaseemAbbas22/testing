import {FaEnvelope,FaGlobe, FaPhoneAlt,FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  return (
    <div className="w-full min-h-[50vh] bg-gray-50 flex flex-col mb-20">
      {/* Content */}
      <div className="flex flex-col md:flex-row w-full ml-36">
        {/* Left Part */}
        <div className="md:w-1/2 flex flex-col justify-start items-start bg-white p-2 md:py-12">
          <h3 className="text-lg md:text-xl font-bold mb-2">
            We are always ready to help you and answer your questions
          </h3>
          <p className="text-[#666666] text-xs md:text-xs mb-8">
            We’re just a call or message away — let’s solve your pest problems quickly and hassle-free!
          </p>
          {/* Contact Info */}
          <div className="text-xs flex flex-col gap-3 md:mt-2 space-y-1">

            <div className="flex items-center gap-3">
              <div className="bg-darkgreen rounded-full p-2">
                <FaPhoneAlt className="text-white text-[14px]" />
              </div>
              <span className='text-sm font-xs text-[#666666]'>+971 52 152 8725, +971 4 375 6435</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-darkgreen rounded-full p-2">
                <FaGlobe className="text-white text-[14px]" />
              </div>
              <span className='text-sm font-xs text-[#666666]'>www.accuratepestcontrol.ae</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-darkgreen rounded-full p-2">
                <FaEnvelope className="text-white text-[14px]" />
              </div>
              <span className='text-sm font-xs text-[#666666]'>info@accuratepestcontrol.ae</span>
            </div>


            
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute top-3 left-3.5 w-px font-bold h-[calc(80%-8px)] bg-darkgreen "></div>

                {/* Locations */}
                <div className="space-y-3">
                  {/* Head Office */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-darkgreen rounded-full p-2 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white text-[14px]" />
                      </div>
                    </div>
                    <span className="ml-3  w-[300px] text-[14px] leading-relaxed pb-2 border-b justify-text border-white">
                      <strong>Head Office:</strong> Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai – UAE
                    </span>
                  </div>

                  {/* Sharjah Branch */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-darkgreen rounded-full p-1 mt-2 ml-[10.5px]"></div>
                    </div>
                    <span className="ml-5 w-[300px] text-[14px] leading-relaxed pb-2 border-b border-[#FFFFFF]">
                      <strong>Sharjah Branch:</strong> Building No. 3702, Shop No 3 & 4, Muweilah Commercial area, Sharjah – UAE
                    </span>
                  </div>

                  {/* Ajman Branch */}
                  <div className="flex items-start relative">
                    <div className="relative z-10">
                      <div className="bg-darkgreen rounded-full w-2 h-2 mt-2.5 ml-[10.5px]"></div>
                    </div>
                    <span className="ml-5  w-[300px] text-[14px] leading-relaxed">
                      <strong>Ajman Branch:</strong> Shop No. 1, Plot No. 3074,  Eastern Sector, Al Zahya 1, Ajman – UAE
                    </span>
                  </div>
                </div>
              </div>
            

            {/* Social Icons */}
            <div className="">
              <p className="mt-10 text-lg font-bold mb-2">Follow Us:</p>
              <div className="flex justify-center md:justify-start gap-3">
                          <div className=" rounded-full bg-darkgreen p-2">
                            <FaFacebookF className=" text-white text-[14px]" />
                          </div>
                          <div className=" rounded-full bg-darkgreen p-2">
                            <FaTwitter className=" text-white text-[14px]" />
                          </div>
                          <div className=" rounded-full bg-darkgreen p-2">
                            <FaInstagram className="text-white text-[14px]" />
                          </div>
                          <div className=" rounded-full bg-darkgreen p-2">
                            <FaYoutube className="text-white  text-[14px]" />
                          </div>
                        </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ContactUs;
