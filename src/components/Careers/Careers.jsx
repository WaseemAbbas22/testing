import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Pest Control Technician",
    location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
    type: "Full Time | 5,000 UAE - 25,000 per Year",
    posted: "June 05, 2025",
    link: "/jobdetail",
  },
  {
    id: 2,
    title: "Inside Sales",
    location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE  ",
    type: "|  Full Time  |  5,000 UAE - 25,000 per Year",
    posted: "June 05, 2025",
    link: "/jobdetail",
  },
  {
    id: 3,
    title: "Office Administrator",
    location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE  ",
    type: "|  Full Time  |  5,000 UAE - 25,000 per Year",
    posted: "June 05, 2025",
    link: "/jobdetail",
  },
  {
    id: 4,
    title: "Pest Control Technician",
    location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
    type: "Full Time | 5,000 UAE - 25,000 per Year",
    posted: "June 05, 2025",
    link: "/jobdetail",
  },
  {
    id: 5,
    title: "Renewal Inspector",
    location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE  | ",
    type: " Full Time  |  5,000 UAE - 25,000 per Year",
    posted: "June 05, 2025",
    link: "/jobdetail",
  },
  {
    id: 6,
    title: "Pest Control Technician",
    location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
    type: "Full Time | 5,000 UAE - 25,000 per Year",
    posted: "June 05, 2025",
    link: "/jobdetail",
  },
];
const CareersList = () => {
  return (
    <div className="w-full min-h-screen bg-bggray px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-10 flex flex-col">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
        Current Job Listings
      </h2>
      <p className="text-sm text-gray mb-6 max-w-2xl">
        Below is list of the current openings with our company. Click on the job title to learn more about the opening.
      </p>

      {/* Search Jobs */}
      <div className="bg-[#32A8491A] border border-[#32A84980] rounded p-4 w-full md:w-[90%] mx-auto mb-10">
        <h3 className="text-md font-semibold mb-4">Search Jobs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">

          {/* Search bar with icon box */}
          <div className="flex w-full col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder="Search jobs"
              className="py-2 px-3 w-full text-xs rounded-l focus:outline-none bg-white"
            />
            <div className="bg-green-600 flex items-center justify-center px-4 rounded-r">
              <FaSearch className="text-white" />
            </div>
          </div>

          {/* City dropdown */}
          <select className="w-full text-xs text-[#BABABA] px-3 py-2 rounded bg-white">
            <option>City</option>
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
          </select>

          {/* Employment Type dropdown */}
          <select className="w-full text-xs text-[#BABABA] px-3 py-2 rounded bg-white">
            <option>Employment Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
          </select>

          {/* Sort by dropdown */}
          <select className="w-full text-xs text-[#BABABA] px-3 py-2 rounded bg-white">
            <option>Sort by</option>
            <option>Date</option>
            <option>Relevance</option>
          </select>

          {/* Clear Filters button */}
          <button className="bg-[#7B7B7B] text-white text-xs font-semibold rounded py-2 hover:bg-green-700 transition">
            Clear Filters
          </button>

        </div>
      </div>

      {/* Job Listings */}
      <div className="flex flex-col space-y-2">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border-t border-[#BABABA] rounded p-4 hover:bg-green-50 cursor-pointer transition flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h4 className="text-lg font-bold text-[#32A849]">{job.title}</h4>
              <p className="text-sm font-semibold text-[#444444]">
                {job.location} | {job.type}
              </p>
              <p className="text-sm text-[#888888]">Posted: {job.posted}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to={job.link}>
                <button className="bg-green-600 text-sm py-2 px-5 text-white rounded hover:bg-darkgreen transition">
                  View Job
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          View More
        </button>
      </div>

    </div>
  );
};

export default CareersList;
