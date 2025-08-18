//import React from "react";
import Rev1 from "@/assets/Home/Rev1.webp";
import Rev2 from "@/assets/Home/Rev2.webp";
import Rev3 from "@/assets/Home/Rev3.webp";
import { useState } from "react";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Fatima A., Dubai Marina",
      role: "House Wife",
      img: Rev1,
      subtext:
        "Sprays and traps weren't enough to stop the ongoing cockroach problem in our kitchen.For cockroach pest control, we got in touch with Accurate Pest Control.They performed an extensive examination and addressed unnoticed hidden areas.The kitchen has been spotless ever since, with no insects and complete peace of mind.",
    },
    {
      name: "Hassan R., Ajman",
      role: "Facilities Manager",
      img: Rev3,
      subtext:
        "There was hidden pest activity, especially in the storage areas and empty rooms. For expert fumigation services, we contacted Accurate Pest Control, and they came out right away. Using safe, odourless solutions that had been approved by the authorities, their team expertly cleaned the entire villa. Now that the pests are gone, our house feels safe, pleasant, and new again.",
    },
    {
      name: "Leila M., Sharjah",
      role: "Property Manager",
      img: Rev2,
      subtext:
        "On our rooftop, we had an extreme pigeon problem. Safe, helpful, and timely bird control in Dubai by Accurate Pest Control. The appropriate barrier was built by the team. Since then, there have been no more birds. Excellent service!",
    },
  ];
  // If you have an array (e.g., testimonials), use its length:
  const totalDots = reviews.length ?? 4; // falls back to 4 dots

  return (
    <div className="w-full 4xl:h-[55vh] overflow-y-auto py-14 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-[#F0F0F0] flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold text-center text-black/80 mb-1">
        Client Testimonials
      </h2>

      {/* Subtext */}
      <p className="text-center text-[#777777] text-xs sm:text-sm 3xl:text-lg mb-6 max-w-md 3xl:max-w-xl 3xl:mt-4 4xl:text-2xl 4xl:max-w-3xl">
        Having Quality Pest Control Services Our customers trust us to provide
        them with high-quality, safe, and UAE-approved pest services.
      </p>

      {/* Reviews */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full hover:border-darkgreen">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full w-[85%] sm:w-[30%] 3xl:w-[27%] 4xl:w-[27%] 
      bg-white rounded-lg shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden 
      hover:border-darkgreen flex flex-col 
      h-[200px] sm:h-[300px] md:h-[320px] lg:h-[350px] xl:h-[210px] 2xl:h-[250px] 3xl:h-[275px] 4xl:h-[380px] border border-transparent hover:border-darkgreen transition-all duration-100"
          >
            {/* Image and Name */}
            <div className="flex items-center gap-x-4 px-6 py-3 3xl:px-8 3xl:py-4 4xl:p-8">
              <img
                className="h-10 w-10 sm:h-10 sm:w-10 3xl:h-12 3xl:w-12 4xl:h-20 4xl:w-20 rounded-full border-2 border-green-600 object-cover"
                src={review.img}
                alt={review.name}
              />
              <div className="flex flex-col">
                <h1 className="text-xs sm:text-sm 3xl:text-lg 4xl:text-2xl font-bold text-gray-800">
                  {review.name}
                </h1>
                <p className="text-gray text-[10px] sm:text-xs 3xl:text-base 4xl:text-xl">
                  {review.role}
                </p>
              </div>
            </div>

            {/* Stars and Subtext */}
            <div className="px-6 sm:px-6 pb-4 3xl:px-8 flex flex-col justify-between space-y-2  ">
              <div className=" flex flex-row">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://img.icons8.com/fluency/48/000000/star.png"
                    alt="Star"
                    className="w-4 h-4 sm:w-4 sm:h-4 3xl:w-5 3xl:h-5 4xl:w-6 4xl:h-6"
                  />
                ))}
              </div>
              <p className="text-[#777777] text-[10px] sm:text-[12px] 2xl:text-sm 3xl:text-[16px] 4xl:text-lg xl:leading-tight text-justify">
                {review.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-[3vh]">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-300 
        ${activeIndex === i ? "bg-green-600" : "bg-black/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
