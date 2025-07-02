import Pic1 from "/src/assets/step1.png";
import Pic2 from "/src/assets/step2.png";
import Pic3 from "/src/assets/step3.png";

const KeepSteps = () => {
  const cards = [
    {
      img: Pic1,
      title: "New Pest Solutions",
      description: "Discover our eco-friendly and efficient new pest solutions launched this month.",
    },
    {
      img: Pic2,
      title: "Team Expansion",
      description: "Welcoming our new team members and expanding our regional operations.",
    },
    {
      img: Pic3,
      title: "Upcoming Events",
      description: "Join us at our upcoming pest management awareness campaigns and events.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 font-serif">
        Keep steps with us
      </h2>

      {/* Separator Line */}
      <div className="w-16 h-1 bg-green-600 mb-6"></div>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-sm mb-10 max-w-2xl">
        To get latest information and be sensitive to market information, product trends, and international facts from Mystore.com news and events.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-10">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{card.description}</p>
              <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded shadow hover:bg-green-700 transition self-start">
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
