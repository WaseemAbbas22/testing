import Pic1 from "/src/assets/Home/step1.png";
import Pic2 from "/src/assets/Home/step2.png";
import Pic3 from "/src/assets/Home/step3.png";

const KeepSteps = () => {
  const cards = [
    {
      img: Pic1,
      title: "Pest Control Tips, Insights & Expert Advice",
      description: "Stay informed with the latest pest prevention tips, seasonal advice, and expert insights from our certified technicians.",
    },
    {
      img: Pic2,
      title: "Expert Tips from UAE Pest Specialists",
      description: "Get insider knowledge straight from the professionals. Our blog covers real issues faced by homeowners and businesses in the UAE.",
    },
    {
      img: Pic3,
      title: "Smarter Pest Control Starts Here",
      description: "Whether you're a first-time homeowner or a facility manager, our blog gives you the tools to stay ahead of pests.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-1 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 ">
        Keep steps with us
      </h2>

      {/* Separator Line */}
      <div className="w-16 h-1 bg-green-600 mb-6"></div>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-sm mb-10 max-w-2xl">
        To get latest information and be sensitive to market information, product trends, and international facts from Mystore.com news and events.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl mb-10">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-[90%] mx-auto">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover" // decreased height
            />
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-base font-semibold text-gray-800 mb-1">{card.title}</h3>
              <p className="text-xs text-gray-600 mb-2 flex-grow">{card.description}</p>
              <button className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded shadow hover:bg-green-700 transition self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition">
        View More
      </button>

    </div>
  );
};

export default KeepSteps;
