import Pic1 from "/src/assets/Home/step1.png";
import Pic2 from "/src/assets/Home/step2.png";
import Pic3 from "/src/assets/Home/step3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import lastsec from "/src/assets/Home/lastsec.png";

const KeepSteps = () => {
  const cards = [
    {
      img: Pic1,
      title: "Pest Control Tips, Insights & Expert Advice",
      description:
        "Stay informed with the latest pest prevention tips, seasonal advice, and expert insights from our certified technicians. Whether you're dealing with termites, cockroaches...",
    },
    {
      img: Pic2,
      title: "Expert Tips from UAE Pest Specialists",
      description:
        "Get insider knowledge straight from the professionals. Our blog covers real issues faced by homeowners and businesses in the UAE — with clear, practical solutions...",
    },
    {
      img: Pic3,
      title: "Smarter Pest Control Starts Here",
      description:
        "Whether you're a first-time homeowner or a facility manager, our blog gives you the tools to stay ahead of pests. Find DIY prevention hacks, product comparisons, service guides...",
    },
  ];

  return (
    <div className="w-full py-2  xl:h-[80vh] 3xl:h-[80vh] xl:mt-4 bg-gray-50 2xl:py-10 px-1 md:px-16 lg:px-24 xl:px-32 3xl:py-16 4xl:py-20 flex flex-col items-center mt-4 md:mt-0">
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl font-semibold text-center text-gray-800 mb-2 xl:text-3xl 2xl:text-5xl">
        Keep Steps with Us
      </h2>

      {/* Subtext */}
      <p className="text-center w-[90%] text-[#444444] text-xs sm:mb-2 xl:max-w-lg xl:text-md 2xl:mt-4 2xl:max-w-4xl 2xl:text-2xl ">
        To get latest information and be sensitive to market information,
        product trends, and international facts from Mystore.com news and
        events.
      </p>

      {/* Cards */}
      <div className="w-[90%] md:w-[98] mx-auto flex flex-col md:flex-row md:space-x-[2vh] space-y-4 md:space-y-0 mt-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg overflow-hidden bg-white w-full md:w-[32%]"
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[120px] xl:h-[120px] 2xl:h-[170px] 3xl:h-[200px] 4xl:h-[350px] object-cover"
            />

            {/* Content */}
            <div className="flex flex-col flex-grow p-4">
              <h3 className="text-sm 2xl:text-xl 3xl:text-2xl font-semibold text-gray-800 mb-1 mt-2">
                {card.title}
              </h3>
              <img
                src={lastsec}
                alt="Last Section"
                className="h-2 w-auto mt-1"
              />
              <p className="text-xs 2xl:text-xl 3xl:text-xl text-gray-600 mt-2 flex-grow">
                {card.description}
              </p>

              {/* Button at bottom */}
              <button
                type="button"
                className="mt-4 bg-green-600 text-white text-[12px] rounded px-2 py-1 w-[30%] 2xl:text-lg hover:bg-green-700 flex items-center justify-center gap-1"
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white 2xl:text-2xl text-xs font-sm px-6 py-2 2xl:mt-16 rounded-md flex items-center gap-2 hover:bg-green-700 transition mt-4 mb-2">
        View More
      </button>
    </div>
  );
};

export default KeepSteps;
