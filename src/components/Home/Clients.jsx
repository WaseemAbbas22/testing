import Client1 from "/src/assets/Home/LogoClients1.png";
import Client2 from "/src/assets/Home/LogoClients2.png";
import Client3 from "/src/assets/Home/LogoClients3.png";
import Client4 from "/src/assets/Home/LogoClients4.png";
import Client5 from "/src/assets/Home/LogoClients5.png";
import Client6 from "/src/assets/Home/LogoClients6.png";
import Client7 from "/src/assets/Home/LogoClients7.png";
import Client8 from "/src/assets/Home/LogoClients8.png";
import Client9 from "/src/assets/Home/LogoClient9.png";
import Client10 from "/src/assets/Home/LogoClients10.png";
//import { useTranslation } from "/src/utils/translations";

import ClientBox from "./ClientBox"; // Adjust path accordingly

const OurClients = () => {
  //const { t } = useTranslation();
  return (
    <div
      className="w-full bg-white py-12 px-6  flex flex-col items-center justify-center
    md:px-16 md:flex-row
    lg:px-24 
    xl:px-20 xl:w-[85%] xl:ml-20 
    2xl:px-40 2xl:w-[94%]
    3xl:px-40 3xl:w-[92%]
    4xl:w-[75%]  4xl:h-[40vh]  4xl:justify-center 4xl:ml-80 4xl:px-2 4xl:-space-x-40 
          "
    >
      {/* Left Side - Heading */}
<div className="md:w-[60%] md:mr-10 flex flex-col justify-center mb-8 text-center md:text-left">
  <h2 className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl font-semibold text-gray-800">
    Our Valued Customers
  </h2>
  <p className="mt-2 mx-auto md:mx-0 w-[90%] text-justify   4xl:w-[80%] text-xs md:text-base xl:text-sm 2xl:text-base 3xl:text-lg  text-[#666666]">
    Recognized as one of Dubai's top pest control companies, we offer
    professional pest management services to customers in Dubai, Sharjah,
    and Ajman, guaranteeing trustworthy treatments, quick responses, and
    peace of mind.
  </p>
</div>


      {/* Right Side - Clients Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4  w-full md:w-[95%] ">
        <ClientBox
          logo={Client8}
          name="Pure Food Processing Industries L.L.C"
          border="border-r border-b border-black/10"
          logoSizeClasses="
            4xl:py-2
            w-20 h-6
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-20 lg:h-24
            xl:w-24 xl:h-6 
            2xl:w-32 2xl:h-10 2xl:mt-2
            3xl:w-40 3xl:h-12 3xl:mt-2 3xl:mb-1
            4xl:w-52 4xl:h-16
            
          "
        />

        <ClientBox
          logo={Client7}
          name="Golden Grains General Trading"
          border="border-r border-b  border-l border-black/10"
          logoSizeClasses="
          4xl:py-0 4xl:mb-2
            w-16 h-8
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-28 lg:h-20
            xl:w-20 xl:h-8
            2xl:w-24 2xl:h-12
            3xl:w-28 3xl:h-12 3xl:mt-2 3xl:mb-1
            4xl:w-36 4xl:h-14
            
          "
        />

        <ClientBox
          logo={Client6}
          name="Boxx Storage"
          border="md:border-r border-b  border-l border-black/10"
          logoSizeClasses="
            4xl:py-0 4xl:mb-2
            w-12 h-8
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-20 xl:h-10
            2xl:w-20 2xl:h-12
            3xl:w-28 3xl:h-12 3xl:mb-1 3xl:mt-2
            4xl:w-32 4xl:h-14
            
          "
        />

        <ClientBox
          logo={Client5}
          name="Meridian PF General Trading"
          border="border-b  border-r md:border-r-0 md:border-l border-black/10"
          logoSizeClasses="
            4xl:mb-2
            w-20 h-8 mt-2 mb-2
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-20 xl:h-8
            2xl:w-16 2xl:h-8
            3xl:w-32 3xl:h-12
            4xl:w-40 4xl:h-14
          
          "
        />

        <ClientBox
          logo={Client4}
          name="Three Star Printing Press"
          border="border-r border-b border-black/10"
          logoSizeClasses="
          4xl:mt-6 4xl:mb-4
            w-16 h-6 mt-4 mb-2
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-24 xl:h-8
            2xl:w-28 2xl:h-10
            3xl:w-32 3xl:h-12 3xl:mb-4
            4xl:w-44 4xl:h-12
            
          "
        />

        <ClientBox
          logo={Client10}
          name="Sama Alkhair Food and Beverages L.L.C"
          border="md:border-r border-b  border-l border-black/10"
          logoSizeClasses="
          4xl:mt-8 4xl:mb-4
          xl:mt-2
            w-20 h-4 mt-4
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-24 xl:h-6 xl:mt-4 xl:mb-2
            2xl:w-28 2xl:h-7 2xl:mt-7
            3xl:w-32 3xl:h-8 3xl:mt-4 3xl:mb-2
            4xl:w-44 4xl:h-10
            "
        />

        <ClientBox
          logo={Client3}
          name="IFM Investments L.L.C"
          border="border-r border-b  md:border-l border-black/10"
          logoSizeClasses="
          4xl:mt-4 4xl:mb-2
            w-10 h-10 mt-2 mb-2
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-12 xl:h-12
            2xl:w-12 2xl:h-12
            3xl:w-16 3xl:h-16 
            4xl:w-16 4xl:h-16
            "
        />

        <ClientBox
          logo={Client2}
          name="Golden Ready Mix"
          border="border-l border-b border-black/10"
          logoSizeClasses="
          4xl:mt-1 4xl:mb-2
            w-20 h-10 mt-2 mb-2
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-20 xl:h-12
            2xl:w-20 2xl:h-12
            3xl:w-32 3xl:h-16
            4xl:w-32 4xl:h-20
            "
        />
        {/* Empty div for spacing */}
        <div className="hidden md:block"></div>

        <ClientBox
          logo={Client1}
          name="Grand Barsha Department Store Warehouse"
          border="md:border-r border-l border-b md:border-b-0 border-black/10"
          logoSizeClasses="
          4xl:mt-4 4xl:mb-2
            w-16 h-12 mt-2
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-20 xl:h-12
            2xl:w-20 2xl:h-14
            3xl:w-44 3xl:h-30
            4xl:w-36 4xl:h-20
          "
        />
{/* Empty div for spacing */}
        <div className="md:hidden md:block"></div>

        <ClientBox
          logo={Client9}
          name="Gutmann PVB Plastic Sheets Manufacturing L.L.C"
          border="border-r border-l  md:border-r border-black/10"
          logoSizeClasses="
          4xl:mt-16
          xl:mt-8
          4xl:mb-4
            w-24 h-4 mt-4 mb-2
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-28 xl:h-4
            2xl:w-28 2xl:h-4 2xl:mt-10
            3xl:w-44 3xl:h-8  3xl:mt-12 3xl:mb-4
            4xl:w-56 4xl:h-6
          "
        />
      </div>

      {/* Bottom Dots - Only in Mobile */}
      <div className="flex justify-center mt-6 space-x-2 md:hidden">
        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default OurClients;
