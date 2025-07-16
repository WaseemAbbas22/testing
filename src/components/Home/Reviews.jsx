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
    <div className="w-full min-h-[70vh] py-8 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-[#F0F0F0] flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black/80 mb-1">
        Client Testimonials
      </h2>

      {/* Subtext */}
      <p className="text-center text-[#777777] text-xs sm:text-sm mb-6 max-w-md">
        Having Quality Pest Control Services Our customers trust us to provide
        them with high-quality, safe, and UAE-approved pest services.
      </p>

      {/* Reviews */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="text-sm w-72 h-[35vh] sm:w-80 border bg-white h-auto border-bggray pb-4 sm:pb-6 rounded-lg shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden hover:border-darkgreen"
          >
            <div className="flex items-center gap-4 px-4 sm:px-5 py-2">
              <img
                className="h-10 w-10 rounded-full border-2 border-green-600"
                src={review.img}
                alt={review.name}
              />
              <div>
                <h1 className="text-sm font-bold text-gray-800">
                  {review.name}
                </h1>
                <p className="text-gray text-xs">{review.role}</p>
              </div>
            </div>
            <div className="p-2 sm:p-0 pb-0 ml-4 sm:mr-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="12"
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
              <p className="text-gray-500 mt-1 text-xs">
                "There was hidden pest activity, especially in the storage areas
                and empty rooms For expert fumigation services, we contacted
                Accurate Pest Control, and they came out right away. Using safe,
                odorless solutions that had been approved by the authorities,
                their team expertly cleaned the entire villa. Now that the pests
                are gone, our house feels safe, pleasant, and new again."
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-[#32A849] mt-0 text-white text-[10px] font-medium px-4 py-2 rounded shadow hover:bg-green-700 transition">
        View More Testimonials
      </button>
    </div>
  );
};

export default Reviews;
