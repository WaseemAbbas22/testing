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
    <div className="w-full bg-gray-50 2xl:py-24 px-1 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl font-semibold text-center text-gray-800 mb-2 2xl:text-5xl ">
        Keep Steps with Us
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-xs mb-10 max-w-2xl 2xl:mt-4 2xl:max-w-4xl 2xl:text-2xl ">
        To get latest information and be sensitive to market information,
        product trends, and international facts from Mystore.com news and
        events.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full 2xl:h-[40vh] w-[150vh] mb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden flex flex-col w-[95%] mx-auto 2xl:h-[110%]"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 2xl:h-[90%] object-cover"
            />
            <div className="flex flex-col flex-grow ">
              <h3 className="text-sm 2xl:text-3xl font-semibold text-gray-800 mb-1 mt-2">
                {card.title}
              </h3>
              <img
                src={lastsec}
                alt="Last Section"
                className="h-2 w-auto mt-1"
              />
              <p className="text-xs 2xl:text-2xl text-gray-600 mb-5 mt-2 flex-grow">
                {card.description}
              </p>
            </div>
            <button
              type="button"
              className="2xl:h-[45px] bg-green-600 2xl:w-[160px] text-white text-[12px] rounded justify-center items-start 2xl:text-lg"
            >
              Read More{" "}
              <FontAwesomeIcon className="ml-2 mt-1" icon={faArrowRight} />
            </button>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white 2xl:text-2xl text-xs font-sm px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition">
        View More
      </button>
    </div>
  );
};

export default KeepSteps;
