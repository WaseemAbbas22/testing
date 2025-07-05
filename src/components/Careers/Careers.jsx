import { FaSearch } from "react-icons/fa";

const CareersList = () => {
  return (
    <div className="w-full min-h-screen h-[200vh] bg-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 py-10 flex flex-col">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">
        Current Job Listings
      </h2>
      <p className="text-center text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
        Below is list of the current openings with our company. Click on the job title to learn more about the opening.
      </p>

      {/* Search Jobs */}
      <div className="bg-green-50 border border-green-600 rounded p-6 mb-10">
        <h3 className="text-lg font-semibold mb-4">Search Jobs</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          {/* Search bar with icon box */}
          <div className="flex w-full">
            <div className="bg-green-600 flex items-center justify-center px-3 rounded-l">
              <FaSearch className="text-white" />
            </div>
            <input
              type="text"
              placeholder="Search jobs"
              className="py-2 px-3 w-full border border-green-600 rounded-r focus:outline-none bg-green-50"
            />
          </div>

          {/* City dropdown */}
          <select className="border rounded px-3 py-2 bg-white">
            <option>City</option>
            <option>Lahore</option>
            <option>Karachi</option>
            <option>Islamabad</option>
          </select>

          {/* Employment Type dropdown */}
          <select className="border rounded px-3 py-2 bg-white">
            <option>Employment Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
          </select>

          {/* Sort by dropdown */}
          <select className="border rounded px-3 py-2 bg-white">
            <option>Sort by</option>
            <option>Date</option>
            <option>Relevance</option>
          </select>

          {/* Clear Filters button */}
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Clear Filters
          </button>

        </div>
      </div>

      {/* Job Listings */}
      <div className="flex flex-col space-y-4">
        {/* Example Job Entries */}
        {[
          { title: "Pest Control Technician", location: "Lahore", type: "Full Time", posted: "2 days ago" },
          { title: "Sales Executive", location: "Karachi", type: "Part Time", posted: "5 days ago" },
          { title: "HR Manager", location: "Islamabad", type: "Full Time", posted: "1 week ago" },
          { title: "Operations Supervisor", location: "Lahore", type: "Full Time", posted: "3 weeks ago" },
          { title: "Marketing Coordinator", location: "Karachi", type: "Internship", posted: "1 month ago" },
          { title: "Customer Support", location: "Islamabad", type: "Full Time", posted: "2 months ago" },
        ].map((job, i) => (
          <div key={i} className="border rounded p-4 bg-white hover:bg-green-50 cursor-pointer transition flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-semibold text-green-700">{job.title}</h4>
              <p className="text-sm text-gray-600">
                Location: {job.location} | Employment Type: {job.type}
              </p>
              <p className="text-xs text-gray-500">Posted: {job.posted}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                View Job
              </button>
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
