const Reviews = () => {
  const reviews = [
    {
      name: "Donald Jackman",
      role: "Content Creator",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
    },
    {
      name: "Richard Nelson",
      role: "Instagram Influencer",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    },
    {
      name: "James Washington",
      role: "Digital Content Creator",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full py-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-100 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 font-serif">
        Client Testimonials
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-sm mb-10 max-w-xl">
        Clean, efficient, and no strong chemical smells — perfect for families.
      </p>

      {/* Reviews */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-green-500/10">
              <img
                className="h-12 w-12 rounded-full border border-green-600"
                src={review.img}
                alt={review.name}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">{review.name}</h1>
                <p className="text-gray-800/80">{review.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                      fill="#22c55e"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 mt-5">
                I have been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
              </p>
            </div>
            <a href="#" className="text-green-600 underline px-5">Read more</a>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition">
        View More Testimonials
      </button>
    </div>
  );
};

export default Reviews;
