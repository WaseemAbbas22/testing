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

import ClientBox from "./ClientBox"; // Adjust path accordingly

const OurClients = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-72 3xl:px-40 4xl:px-9 flex flex-col md:flex-row items-center justify-center">
      {/* Left Side - Heading */}
      <div className="md:w-1/3 flex flex-col justify-center mb-8 md:mb-0 md:mr-10">
        <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-gray-800 text-left">
          Our Clients
        </h2>
        <p className="mt-2 text-sm md:text-base 2xl:text-2xl text-justify text-[#666666]">
          Recognized as one of Dubai's top pest control companies, we offer
          professional pest management services to customers in Dubai, Sharjah,
          and Ajman, guaranteeing trustworthy treatments, quick responses, and
          total satisfaction for residences, businesses and warehouses.
        </p>
      </div>

      {/* Right Side - Clients Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-4  w-full md:w-[70%]">
        <ClientBox
          logo={Client8}
          name="Pure Food Processing Industries L.L.C"
          border="border-r border-b border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-20 lg:h-24
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client7}
          name="Golden Grains General Trading"
          border="border-r border-b  border-l border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-20 xl:h-12
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-16
            object-contain
          "
        />

        <ClientBox
          logo={Client6}
          name="Boxx Storage"
          border="border-r border-b  border-l border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client5}
          name="Meridian PF General Trading"
          border="border-b  border-l border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client4}
          name="Three Star Printing Press"
          border="border-r border-b border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client10}
          name="Sama Alkhair Food and Beverages L.L.C"
          border="border-r border-b  border-l border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client3}
          name="IFM Investments L.L.C"
          border="border-r border-b  border-l border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client2}
          name="Golden Ready Mix"
          border="border-l border-b border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client1}
          name="Grand Barsha Department Store Warehouse"
          border="border-r border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
          "
        />

        <ClientBox
          logo={Client9}
          name="Gutmann PVB Plastic Sheets Manufacturing L.L.C"
          border="border-r border-black/10"
          logoSizeClasses="
            w-20 h-12
            sm:w-24 sm:h-14
            md:w-28 md:h-16
            lg:w-32 lg:h-20
            xl:w-36 xl:h-24
            2xl:w-40 2xl:h-28
            3xl:w-44 3xl:h-30
            4xl:w-60 4xl:h-12
            object-contain
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
