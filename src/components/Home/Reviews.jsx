import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Fatima A., Dubai Marina",
      role: "House Wife",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      name: "Hassan R., Abu Dhabi",
      role: "Facilities Manager",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    },
    {
      name: "Leila M., Sharjah",
      role: "Property Manager",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full 4xl:h-[55vh] overflow-y-auto py-8 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-[#F0F0F0] flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-6xl 4xl:text-6xl font-bold text-center text-black/80 mb-1">
        Client Testimonials
      </h2>

      {/* Subtext */}
      <p className="text-center text-[#777777] text-xs sm:text-sm 3xl:text-lg mb-6 max-w-md 3xl:max-w-4xl 4xl:text-2xl 4xl:max-w-3xl">
        Having Quality Pest Control Services Our customers trust us to provide
        them with high-quality, safe, and UAE-approved pest services.
      </p>

      {/* Reviews */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="text-sm w-full sm:w-[27%]  bg-white rounded-lg shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden hover:border-darkgreen"
          >
            <div className="flex items-center gap-x-4 p-4 sm:p-6">
              <img
                className="h-10 w-10 sm:h-12 sm:w-12 3xl:h-20 3xl:w-20 4xl:h-20 4xl:w-20 rounded-full border-2 border-green-600 object-cover"
                src={review.img}
                alt={review.name}
              />
              <div className="flex flex-col">
                <h1 className="text-xs sm:text-sm 3xl:text-2xl 4xl:text-2xl font-bold text-gray-800">
                  {review.name}
                </h1>
                <p className="text-gray text-[10px] sm:text-xs 3xl:text-xl 4xl:text-xl">
                  {review.role}
                </p>
              </div>
            </div>

            <div className="px-4 sm:px-6 pb-4">
              <div className="flex gap-0.5 4xl:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 3xl:w-6 3xl:h-6 4xl:w-6 4xl:h-6"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                      fill="#efeb06ff"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-[10px] sm:text-xs 3xl:text-lg 4xl:text-lg text-justify">
                Sprays and traps weren't enough to stop the ongoing cockroach
                problem in our kitchen. For cockroach pest control, we got in
                touch with Accurate Pest Control. They performed an extensive
                examination and addressed unnoticed hidden areas. The kitchen
                has been spotless ever since, with no insects and complete peace
                of mind.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-[#32A849] mt-[2vh] text-white text-[10px] 4xl:text-xl font-medium px-4 py-2 rounded shadow hover:bg-green-700 transition">
        View More Testimonials
      </button>
    </div>
  );
};

export default Reviews;
