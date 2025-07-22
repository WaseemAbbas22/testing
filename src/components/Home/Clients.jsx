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

import ClientBox from "./ClientBox"; // Adjust path

const OurClients = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col bg-white py-12 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-72">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
        
        {/* Left Side - Centered Heading */}
<div className=" md:w-1/4 flex flex-col justify-center mb-8 ">
  <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-gray-800 text-left">
    Our Clients
  </h2>

  <p className="mt-2 text-sm md:text-base 2xl:text-2xl text-gray-600 text-left ">
    Recognized as one of Dubai's top pest control companies, we offer professional pest management services to customers in Dubai, Sharjah, and Ajman, guaranteeing trustworthy treatments, quick responses, and total satisfaction for residences, businesses and warehouses.
  </p>
</div>
        {/* Right Side - Clients Grid */}
        <div className="md:w-[550px] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 2xl:w-[1600px]">

          <ClientBox logo={Client8} name="Meridian PF General Trading" border="border-b border-r border-black/30" />
          <ClientBox logo={Client7} name="IFM Investments L.L.C" border="border-b border-r border-black/30  " />
          <ClientBox logo={Client6} name="Boxx Storage" border="border-b border-r border-black/30 " />
          <ClientBox logo={Client5} name="Meridian PF General Trading" border="border-b border-black/30 " />
          <ClientBox logo={Client4} name="Three Star Printing Press" border="border-b border-r border-black/30 " />
          <ClientBox logo={Client10} name="Sama Alkhair Food and Beverages L.L.C" border="border-b border-r border-black/30 " />
          <ClientBox logo={Client3} name="IFM Investments L.L.C" border="border-b border-r border-black/30 " />
          <ClientBox logo={Client2} name="Golden Ready Mix" border="border-b border-black/30 " />
          
          <ClientBox logo={Client1} name="Pure Food Processing Industries L.L.C" border=" border-r border-black/30 " />
          <ClientBox logo={Client9} name="Gutmann PVB Plastic Sheets Manufacturing L.L.C" border=" border-r border-black/30 " />

        </div>
      </div>

      {/* Optional: Dots at bottom */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default OurClients;
