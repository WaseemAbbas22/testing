import Pic1 from "/src/assets/Home/step1.png";
import Pic2 from "/src/assets/Home/step2.png";
import Pic3 from "/src/assets/Home/step3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
      <h2 className="text-3xl md:text-3xl font-semibold text-center text-gray-800 mb-2 ">
        Keep steps with us
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-xs mb-10 max-w-2xl">
        To get latest information and be sensitive to market information, product trends, and international facts from Mystore.com news and events.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-9xl mb-10">
        {cards.map((card, index) => (
          <div key={index} className="rounded-lg overflow-hidden flex flex-col w-[95%] mx-auto">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover" // decreased height
            />
            <div className="flex flex-col flex-grow ">
              <h3 className="text-sm font-semibold text-gray-800 mb-1 mt-2">{card.title}</h3>
              <img src="/src/assets/Home/lastsec.png" alt="icon" className="h-2 w-auto mt-1" />
              <p className="text-xs text-gray-600 mb-5 mt-2 flex-grow">{card.description}</p> 
            </div>  
            <button type="button" className="h-[25px] bg-green-600 w-[100px] text-white text-[12px] rounded justify-center items-start"> Read More      <FontAwesomeIcon className="ml-2 mt-1" icon={faArrowRight} /></button>          
          </div>

        ))}
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white text-xs font-sm px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition">
        View More 
      </button>

    </div>
  );
};

export default KeepSteps;
