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
    {
      logo: Client1,
      main: "Pure Food Processing Industries LLC",
      subs: ["GGFT", "Golden Green General Trading"]
    },
    {
      logo: Client2,
      main: "Three Star Printing Press",
      subs: ["hidubai", "Seven Albion Food and Beverages LLC", "JPM InvestmentWeek LLC"]
    },
    {
      logo: Client3,
      main: "GUITMANN PVB",
      subs: []
    },
    {
      logo: Client4,
      main: "ABC Industries",
      subs: ["SubBrand A", "SubBrand B"]
    },
    {
      logo: Client5,
      main: "XYZ Holdings",
      subs: []
    },
    {
      logo: Client6,
      main: "Horizon Traders",
      subs: ["Horizon Foods"]
    },
    {
      logo: Client7,
      main: "Global Ventures",
      subs: ["Venture A", "Venture B", "Venture C"]
    },
    {
      logo: Client8,
      main: "Quick Logistics",
      subs: []
    },
    {
      logo: Client9,
      main: "Urban Developers",
      subs: ["Urban Living", "Urban Commercial"]
    },
  ];

  return (
    <div className="w-full flex flex-col bg-white py-12 px-6 md:px-16 lg:px-24 xl:px-32">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif text-center mb-2">
        Our Clients
      </h2>
      <hr className="border-gray-400 mb-8 w-24 mx-auto" />

      {/* Client Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col border-b pb-4">
            
            {/* Main Name with Logo */}
            <div className="flex items-center mb-2">
              {client.logo && (
                <img
                  src={client.logo}
                  alt={`${client.main} logo`}
                  className="w-10 h-10 object-contain mr-3"
                />
              )}
              <h3 className="text-lg font-bold text-gray-800">{client.main}</h3>
            </div>

            {/* Sub Entities */}
            <div className="pl-12 space-y-1">
              {client.subs.map((sub, subIndex) => (
                <p key={subIndex} className="text-sm text-gray-600">{sub}</p>
              ))}
            </div>

            {/* Horizontal line between entries */}
            {index < clients.length - 1 && <hr className="mt-4 border-gray-300" />}

          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
