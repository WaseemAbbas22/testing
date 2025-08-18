import { useState } from "react";

// ✅ Import all your logos
import Client1 from "@/assets/Home/Pure_Food.PNG";
import Client2 from "@/assets/Home/Al_Naboodah.png";
import Client3 from "@/assets/Home/Arenco_Real_Estate.png";
import Client4 from "@/assets/Home/AL_Nayli_Real_Estate.png";
import Client5 from "@/assets/Home/Emssa_Contracting.png";
import Client6 from "@/assets/Home/al_ansari_properties.png";
import Client7 from "@/assets/Home/Al_Serh_Al_Kabeer.png";
import Client8 from "@/assets/Home/FAKHRUDDIN_REAL_ESTATE.png";
import Client9 from "@/assets/Home/The_City_School.png";
import Client10 from "@/assets/Home/Sharjah_Amercian_School.png";
import Client11 from "@/assets/Home/Treppan_Hotel.jpg";
import Client12 from "@/assets/Home/Samaya_hotel.png";
import Client13 from "@/assets/Home/Medx_Pharmacy.png";
import Client14 from "@/assets/Home/culex.png";
import Client15 from "@/assets/Home/Time_Hotel.png";
import Client16 from "@/assets/Home/Mod_Dsys.png";
import Client17 from "@/assets/Home/Adventure_land_Logo.png";
import Client18 from "@/assets/Home/Habshan.png";
import Client19 from "@/assets/Home/Soul_Senses.png";
import Client20 from "@/assets/Home/Aster_DM.png";

import ClientBox from "./ClientBox"; // ✅ Reuse your ClientBox component

const OurClients = () => {
  const [page, setPage] = useState(1); // ✅ Page state (1 = first 10 logos, 2 = second 10 logos)

  return (
    <div
      className="w-full bg-white py-16 px-6 flex flex-col items-center justify-center
      md:px-16 md:flex-row
      lg:px-24 
      xl:px-20 xl:w-[85%] xl:ml-20 
      2xl:px-40 2xl:w-[94%]
      3xl:px-40 3xl:w-[92%]
      4xl:w-[75%]  4xl:h-[40vh]  4xl:justify-center 4xl:ml-80 4xl:px-2 4xl:-space-x-40"
    >
      {/* ✅ Left Side - Heading */}
      <div className="md:w-[60%] md:mr-10 flex flex-col justify-center mb-8 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl font-semibold text-black/80">
          Our Valued Customers
        </h2>
        <p
          className="mt-2 mx-auto md:mx-0 w-[83%] text-justify  
          leading-tight text-xs md:text-base xl:text-xs 2xl:text-base 3xl:text-lg  
          text-[#666666] xl:leading-tight 3xl:leading-tight"
        >
          Recognised as one of Dubai's top pest control companies, we offer
          professional pest management services to customers in Dubai, Sharjah,
          and Ajman, guaranteeing trustworthy treatments, quick responses, and
          total satisfaction for residences, businesses and warehouses.
        </p>
      </div>

      {/* ✅ Right Side - Clients Grid */}
      <div className="grid grid-col space-y-10 w-full md:w-[95%]">
        {/* ✅ Page 1 - Clients 1 to 10 */}
        {page === 1 && (
          <div className="grid grid-cols-3 md:grid-cols-4">
            <ClientBox
              logo={Client1}
              name=""
              border="border-b border-black/10"
              logoSizeClasses=" w-20 h-5 mt-3 mb-1 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-20 lg:h-24 
              xl:w-28 xl:h-7 xl:mt-2 xl:mb-1 
              2xl:w-32 2xl:h-10 2xl:mt-2 
              3xl:w-44 3xl:h-12 3xl:mt-[72px]
              4xl:w-52 4xl:h-16 "
            />{" "}
            <ClientBox
              logo={Client7}
              name=""
              border="border-b  md:border-l border-black/10"
              logoSizeClasses=" 4xl:mt-4 4xl:mb-2 
              w-10 h-10 mt-2 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-12 xl:h-12 
              2xl:w-12 2xl:h-12 
              3xl:w-28 3xl:h-28 
              4xl:w-16 4xl:h-16 "
            />{" "}
            
            <ClientBox
              logo={Client3}
              name=""
              border="border-b md:border-r md:border-l border-black/10"
              logoSizeClasses=" 4xl:py-0 4xl:mb-2 
              w-12 h-8 mb-1 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-20 xl:h-10 
              2xl:w-20 2xl:h-12 
              3xl:w-28 3xl:h-24  3xl:mt-[26px]
              4xl:w-32 4xl:h-14 "
            />{" "}
            <ClientBox
              logo={Client4}
              name=""
              border="border-b md:border-r md:border-r-0 border-black/10"
              logoSizeClasses=" 4xl:mb-2 
              w-20 h-8 mt-2 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-24 xl:h-8 xl:mt-0 xl:mb-2 
              2xl:w-16 2xl:h-8 
              3xl:w-40 3xl:h-20 3xl:mt-[44px] 
              4xl:w-40 4xl:h-14 "
            />{" "}
            <ClientBox
              logo={Client5}
              name=""
              border="border-b border-l border-r md:border-l-0 md:border-r-0 border-black/10"
              logoSizeClasses=" w-20 h-6 mt-4 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-28 xl:h-8 xl:mt-6 xl:mb-2 
              2xl:w-28 2xl:h-10 
              3xl:w-52 3xl:h-20  3xl:mt-[24px]
              4xl:w-44 4xl:h-12 4xl:mt-6 4xl:mb-4 "
            />{" "}
            <ClientBox
              logo={Client6}
              name=""
              border="border-b md:border-l border-black/10"
              logoSizeClasses=" 4xl:mt-8 4xl:mb-4 
              xl:mt-2 
              w-24 h-5 mt-5 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-28 xl:h-6 xl:mt-8 xl:mb-2 
              2xl:w-28 2xl:h-7 2xl:mt-7 
              3xl:w-48 3xl:h-12 3xl:mt-[50px] 
              4xl:w-44 4xl:h-10 "
            />{" "}
            <ClientBox
              logo={Client2}
              name=""
              border=" border-b md:border-r border-l border-r  border-black/10"
              logoSizeClasses=" 4xl:py-0 4xl:mb-2 
              w-20 h-8 mb-1 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-28 lg:h-20 
              xl:w-20 xl:h-8 xl:mt-1 xl:mb-1 
              2xl:w-24 2xl:h-12 
              3xl:w-60 3xl:h-16 3xl:mt-[28px]
              4xl:w-36 4xl:h-14 "
            />
            
            <ClientBox
              logo={Client8}
              name=""
              border="border-b border-l md:border-l-0 border-r md:border-r-0 border-black/10"
              logoSizeClasses=" 4xl:mt-1 4xl:mb-2 
              w-20 h-10 mt-2 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-20 xl:h-12 
              2xl:w-20 2xl:h-12 
              3xl:w-48 3xl:h-12 3xl:mt-[54px]
              4xl:w-32 4xl:h-20 "
            />{" "}
            {/* Empty div for spacing */}{" "}
            <div className="hidden md:block"></div>{" "}
            <ClientBox
              logo={Client9}
              name=""
              border="md:border-l border-b md:border-b-0 border-black/10"
              logoSizeClasses=" 4xl:mt-4 4xl:mb-2 
              w-16 h-12 mt-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-20 xl:h-12 
              2xl:w-20 2xl:h-14 
              3xl:w-36 3xl:h-28 3xl:mt-5
              4xl:w-36 4xl:h-20 "
            />{" "}
            {/* Empty div for spacing */}{" "}
            <div className="md:hidden md:block"></div>{" "}
            <ClientBox
              logo={Client10}
              name=""
              border="border-r border-l md:border-r border-black/10"
              logoSizeClasses=" 4xl:mt-16 xl:mt-8 4xl:mb-4 
              w-24 h-3 mt-4 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-28 xl:h-4 
              2xl:w-28 2xl:h-4 2xl:mt-10 
              3xl:w-40 3xl:h-28 3xl:mt-5
              4xl:w-56 4xl:h-6 "
            />
          </div>
        )}

        {/* ✅ Page 2 - Clients 11 to 20 */}
        {page === 2 && (
          <div className="grid grid-cols-3 md:grid-cols-4">
            <ClientBox
              logo={Client11}
              name=""
              border="border-b border-black/10"
              logoSizeClasses=" w-20 h-5 mt-3 mb-1 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-20 lg:h-24 
              xl:w-28 xl:h-7 
              xl:mt-2 xl:mb-1 
              2xl:w-32 2xl:h-10 2xl:mt-2 
              3xl:w-14 3xl:h-16 3xl:mt-0
              4xl:w-52 4xl:h-16 "
            />{" "}
            <ClientBox
              logo={Client12}
              name=""
              border=" border-b border-l border-r md:border-r-0 border-black/10"
              logoSizeClasses=" 4xl:py-0 4xl:mb-2 
              w-20 h-8 mb-1 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-28 lg:h-20 
              xl:w-20 xl:h-8 xl:mt-1 xl:mb-1 
              2xl:w-24 2xl:h-12 
              3xl:w-24 3xl:h-[68px] 3xl:mt-0 
              4xl:w-36 4xl:h-14 "
            />{" "}
            <ClientBox
              logo={Client13}
              name=""
              border="border-b md:border-r md:border-l border-black/10"
              logoSizeClasses=" 4xl:py-0 4xl:mb-2 
              w-12 h-8 mb-1 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-20 xl:h-10 
              2xl:w-20 2xl:h-12 
              3xl:w-28 3xl:h-12 3xl:mt-5 
              4xl:w-32 4xl:h-14 "
            />{" "}
            <ClientBox
              logo={Client14}
              name=""
              border="border-b md:border-r md:border-r-0 border-black/10"
              logoSizeClasses=" 4xl:mb-2 
              w-20 h-8 mt-2 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-24 xl:h-8 xl:mt-0 xl:mb-2 
              2xl:w-16 2xl:h-8 
              3xl:w-32 3xl:h-16  
              4xl:w-40 4xl:h-14 "
            />{" "}
            <ClientBox
              logo={Client15}
              name=""
              border="border-b border-l border-r md:border-l-0 md:border-r-0 border-black/10"
              logoSizeClasses=" w-20 h-6 mt-4 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-28 xl:h-8 xl:mt-6 xl:mb-2 
              2xl:w-28 2xl:h-10 
              3xl:w-14 3xl:h-12 
              4xl:w-44 4xl:h-12 4xl:mt-6 4xl:mb-4 "
            />{" "}
            <ClientBox
              logo={Client16}
              name=""
              border="border-b md:border-l border-black/10"
              logoSizeClasses=" 4xl:mt-8 4xl:mb-4 
              w-24 h-5 mt-5 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-28 xl:h-6 xl:mt-8 xl:mb-2 
              2xl:w-28 2xl:h-7 2xl:mt-7 
              3xl:w-48 3xl:h-12 3xl:mt-8
              4xl:w-44 4xl:h-10 "
            />{" "}
            <ClientBox
              logo={Client17}
              name=""
              border="border-b md:border-r md:border-l border-black/10"
              logoSizeClasses=" 4xl:mt-4 4xl:mb-2 
              w-10 h-10 mt-2 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-12 xl:h-12 
              2xl:w-12 2xl:h-12 
              3xl:w-32 3xl:h-16 
              4xl:w-16 4xl:h-16 "
            />{" "}
            <ClientBox
              logo={Client18}
              name=""
              border="border-b border-l md:border-l-0 border-r md:border-r-0 border-black/10"
              logoSizeClasses=" 4xl:mt-1 4xl:mb-2 
              w-20 h-10 mt-2 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-20 xl:h-12 
              2xl:w-20 2xl:h-12 
              3xl:w-40 3xl:h-12 3xl:mt-6 
              4xl:w-32 4xl:h-20 "
            />{" "}
            {/* Empty div for spacing */}{" "}
            <div className="hidden md:block"></div>{" "}
            <ClientBox
              logo={Client19}
              name=""
              border="md:border-l border-b md:border-b-0 border-black/10"
              logoSizeClasses=" 4xl:mt-4 4xl:mb-2 
              w-16 h-12 mt-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-20 xl:h-12 
              2xl:w-20 2xl:h-14 
              3xl:w-36 3xl:h-20 3xl:mt-4
              4xl:w-36 4xl:h-20 "
            />{" "}
            {/* Empty div for spacing */}{" "}
            <div className="md:hidden md:block"></div>{" "}
            <ClientBox
              logo={Client20}
              name=""
              border="border-r border-l md:border-r border-black/10"
              logoSizeClasses="w-24 h-3 mt-4 mb-2 
              sm:w-24 sm:h-14 
              md:w-28 md:h-16 
              lg:w-32 lg:h-20 
              xl:w-28 xl:h-4 xl:mt-8 
              2xl:w-28 2xl:h-4 2xl:mt-10 
              3xl:w-24 3xl:h-20 3xl:mt-4  
              4xl:w-56 4xl:h-6 4xl:mb-4 4xl:mt-16 "
            />
          </div>
        )}

        {/* ✅ Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span
            onClick={() => setPage(1)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              page === 1 ? "bg-green-600" : "bg-black/30"
            }`}
          ></span>
          <span
            onClick={() => setPage(2)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              page === 2 ? "bg-green-600" : "bg-black/30"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
