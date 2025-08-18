import Pic1 from "@/assets/Home/step1.webp";
import Pic2 from "@/assets/Home/step2.webp";
import Pic3 from "@/assets/Home/step3.webp";
import Calender from "@/assets/Home/Calender.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import lastsec from "@/assets/Home/lastsec.webp";
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
    <div className="w-full md:h-[90vh] 2xl:h-[90vh] bg-gray-50 px-4 py-10 md:px-16 lg:px-24 xl:px-32 2xl:py-10 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-black/90 mb-2 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
          Pest safety tips from experts
        </h2>

        {/* Subtext */}
        <p className="text-center sm:w-[40%] max-w-4xl text-[#444444] text-xs 2xl:text-lg 3xl:text-lg 4xl:text-lg mb-4">
          Enjoy a comfortable, safe life with the help of expert pest control
          advice and practical safety information for family and pets.
        </p>

        {/* Cards */}
        <div className="w-[90%] md:w-[90%] mx-auto flex flex-col md:flex-row md:space-x-[2vh] space-y-4 md:space-y-0 mt-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg overflow-hidden bg-white mx-auto w-full md:w-[36%] 3xl:w-[34%]"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[120px] xl:h-[170px] 2xl:h-[170px] 3xl:h-[230px] 4xl:h-[350px] object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-grow pt-1 ">
                <h3 className="text-sm 2xl:text-xl 3xl:text-xl font-bold text-black/80 mb-1 mt-2">
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
                    className="bg-green-600 text-white text-[10px] sm:text-xs md:text-sm xl:text-[9px] 2xl:text-xs mt-4 mb-1 ml-0 rounded-sm px-2 2xl:px-4 py-0 2xl:py-2 hover:bg-green-700 flex items-center gap-1"
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </button>

                  <div className="flex text-[#444444] text-[10px] sm:text-xs md:text-sm xl:text-[9px] 2xl:text-sm 3xl:text-sm  gap-1 mt-6">
                    <img
                      src={Calender}
                      alt="Calendar"
                      className="w-4 h-4 inline-block align-middle"
                    />
                    <span>{card.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="bg-green-600 text-white text-xs 2xl:text-sm font-medium px-6 py-2 3xl:py-3 rounded flex items-center gap-2 hover:bg-green-700 transition mt-6 3xl:mt-20">
          View More
        </button>
      </div>
    </div>
  );
};

export default KeepSteps;
