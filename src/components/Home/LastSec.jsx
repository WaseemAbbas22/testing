import Pic1 from "/src/assets/Home/step1.png";
import Pic2 from "/src/assets/Home/step2.png";
import Pic3 from "/src/assets/Home/step3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import lastsec from "/src/assets/Home/lastsec.png";
//import { FaCalendarAlt } from "react-icons/fa";
const KeepSteps = () => {
  const cards = [
    {
      img: Pic1,
      title: "Pest Control Tips, Insights & Expert Advice",
      description:
        "Stay informed with the latest pest prevention tips, seasonal advice, and expert insights from our certified technicians. Whether you're dealing with termites, cockroaches...",
      date: "01/05/2024",
    },
    {
      img: Pic2,
      title: "Expert Tips from UAE Pest Specialists",
      description:
        "Get insider knowledge straight from the professionals. Our blog covers real issues faced by homeowners and businesses in the UAE — with clear, practical solutions...",
      date: "01/05/2024",
    },
    {
      img: Pic3,
      title: "Smarter Pest Control Starts Here",
      description:
        "Whether you're a first-time homeowner or a facility manager, our blog gives you the tools to stay ahead of pests. Find DIY prevention hacks, product comparisons, service guides...",
      date: "01/05/2024",
    },
  ];

  return (
    <div className="w-full md:h-[90vh] 2xl:h-[80vh] bg-gray-50 px-4 py-10 md:px-16 lg:px-24 xl:px-32 2xl:py-10 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-black/80 mb-2 2xl:text-4xl">
          Keep the Steps with Us
        </h2>

        {/* Subtext */}
        <p className="text-center sm:w-[40%] max-w-4xl text-[#444444] text-xs 2xl:text-lg 3xl:text-lg 4xl:text-lg mb-4">
          To get latest information and be sensitive to market information,
          product trends, and international facts from Mystore.com news and
          events.
        </p>

        {/* Cards */}
        <div className="w-[90%] md:w-[90%] mx-auto flex flex-col md:flex-row md:space-x-[2vh] space-y-4 md:space-y-0 mt-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg overflow-hidden bg-white w-full md:w-[32%]"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[120px] xl:h-[160px] 2xl:h-[170px] 3xl:h-[200px] 4xl:h-[350px] object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow pt-4 px-2">
                <h3 className="text-sm 2xl:text-xl 3xl:text-2xl font-semibold text-black/80 mb-1 mt-2">
                  {card.title}
                </h3>
                <img
                  src={lastsec}
                  alt="Last Section"
                  className="h-2 w-auto mt-1"
                />
                <p className="text-xs 2xl:text-[15px] 3xl:text-lg text-black/70 mt-2 flex-grow">
                  {card.description}
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-2">
                  <button
                    type="button"
                    className="bg-green-600 text-white text-[10px] sm:text-xs md:text-sm xl:text-[10px] 2xl:text-xs rounded px-2 2xl:px-4 py-1 2xl:py-2 hover:bg-green-700 flex items-center gap-1"
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </button>

                  <div className="flex items-center text-[#444444] text-[10px] sm:text-xs md:text-sm xl:text-xs 2xl:text-sm 3xl:text-sm  gap-2 mt-2">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{card.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="bg-green-600 text-white text-xs 2xl:text-sm font-medium px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition mt-6 3xl:mt-20">
          View More
        </button>
      </div>
    </div>
  );
};

export default KeepSteps;
