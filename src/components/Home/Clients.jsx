import Client1 from "/src/assets/Home/LogoClients1.png";
import Client2 from "/src/assets/Home/LogoClients2.png";
import Client3 from "/src/assets/Home/LogoClients3.png";
import Client4 from "/src/assets/Home/LogoClients4.png";
import Client5 from "/src/assets/Home/LogoClients5.png";
import Client6 from "/src/assets/Home/LogoClients6.png";
import Client7 from "/src/assets/Home/LogoClients7.png";
import Client8 from "/src/assets/Home/LogoClients8.png";
import Client9 from "/src/assets/Home/LogoClient9.png";

const OurClients = () => {
  const clients = [
    { logo: Client1, main: "Pure Food Processing Industries L.L.C" },
    { logo: Client2, main: "Three Star Printing Press" },
    { logo: Client3, main: "Gutmann PVB Plastic Sheets Manufacturing L.L.C" },
    { logo: Client4, main: "Golden Grains General Trading" },
    { logo: Client5, main: "hidubai Sama Alkhair Food and Beverages L.L.C" },
    { logo: Client6, main: "Boxx Storage" },
    { logo: Client7, main: "IFM Investments L.L.C" },
    { logo: Client8, main: "Meridian PF General Trading" },
    { logo: Client9, main: "Golden Ready Mix" },
  ];

  return (
    <div className="w-full flex flex-col bg-white py-12 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
        
        {/* Left Side - Centered Heading */}
        <div className="md:w-1/4 flex items-center justify-center mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ">
            Our Clients
          </h2>
          <p></p>
        </div>

        {/* Right Side - Clients Grid with Thin Lines */}
        <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 divide-x divide-y divide-black divide-opacity-10">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 py-6"
            >
              <img
                src={client.logo}
                alt={client.main}
                className="w-20 h-12 object-contain mb-2"
              />
              <p className="text-sm text-gray-800">{client.main}</p>
            </div>
          ))}
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
