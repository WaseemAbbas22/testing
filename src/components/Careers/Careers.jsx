import { useState, useMemo } from "react";
import { Search } from "lucide-react";

const JobListingsComponent = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEmploymentType, setSelectedEmploymentType] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");

  // Sample job data matching the image
  const allJobs = useMemo(
    () => [
      {
        id: 1,
        title: "Account Manager - Sales",
        location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
        type: "Full Time",
        salary: "5,000 UAE - 25,000 per Year",
        posted: "June 05, 2025",
      },
      {
        id: 2,
        title: "Inside Sales",
        location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
        type: "Full Time",
        salary: "5,000 UAE - 25,000 per Year",
        posted: "June 05, 2025",
      },
      {
        id: 3,
        title: "Office Administrator",
        location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
        type: "Full Time",
        salary: "5,000 UAE - 25,000 per Year",
        posted: "June 05, 2025",
      },
      {
        id: 4,
        title: "Pest Control Technician",
        location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
        type: "Full Time",
        salary: "5,000 UAE - 25,000 per Year",
        posted: "June 05, 2025",
      },
      {
        id: 5,
        title: "Renewal Inspector",
        location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
        type: "Full Time",
        salary: "5,000 UAE - 25,000 per Year",
        posted: "June 05, 2025",
      },
      {
        id: 6,
        title: "Pest Control Technician",
        location: "Building No. 3702, Shop No 3 & 4, Muweilah, Sharjah - UAE",
        type: "Part Time",
        salary: "5,000 UAE - 25,000 per Year",
        posted: "June 05, 2025",
      },
    ],
    []
  );

  // Filter options
  const cities = ["Dubai", "Sharjah", "Abu Dhabi", "Ajman", "Ras Al Khaimah"];
  const employmentTypes = ["Full Time", "Part Time", "Contract", "Internship"];
  const sortOptions = ["Date Posted", "Relevance", "Salary", "Title A-Z"];

  // Filtered and sorted jobs
  const filteredJobs = useMemo(() => {
    let filtered = allJobs.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCity =
        selectedCity === "" ||
        job.location.toLowerCase().includes(selectedCity.toLowerCase());

      const matchesType =
        selectedEmploymentType === "" || job.type === selectedEmploymentType;

      return matchesSearch && matchesCity && matchesType;
    });

    // Sort jobs
    if (selectedSortBy === "Title A-Z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSortBy === "Date Posted") {
      filtered.sort((a, b) => new Date(b.posted) - new Date(a.posted));
    }

    return filtered;
  }, [
    searchTerm,
    selectedCity,
    selectedEmploymentType,
    selectedSortBy,
    allJobs,
  ]);

  // Event handlers
  const handleSearch = () => {
    console.log("Searching with filters:", {
      searchTerm,
      selectedCity,
      selectedEmploymentType,
      selectedSortBy,
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCity("");
    setSelectedEmploymentType("");
    setSelectedSortBy("");
  };

  const handleViewJob = (jobId) => {
    console.log("Viewing job:", jobId);
    // Implement navigation to job details
  };

  const handleViewAllJobs = () => {
    console.log("Viewing all jobs");
    // Implement navigation to full job listings page
  };

  return (
    <div className="w-full bg-bggray min-h-screen">
      {/* Blue header bar */}

      <div className=" sm:w-[75%] mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl 3xl:text-4xl font-bold text-gray-900 mb-1">
            Current Job Listings
          </h1>
          <p className="text-[#666666] text-sm 3xl:text-base">
            Below is list of the current openings with our company. Click on the
            job title to learn more about the opening.
          </p>
        </div> 

        {/* Search Container */}
        <div className="w-full sm:w-[90%] mx-auto bg-[#32A8491A] border border-[#32A84980] rounded-lg p-6 mb-6">
          <h2 className="text-lg 3xl:text-2xl font-semibold text-gray-900 mb-1">
            Search Jobs
          </h2>

          {/* Search Form */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch">
            {/* Search Input with Button */}
            <div className="flex flex-1 h-full">
              <input
                type="text"
                placeholder="Search jobs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 px-3 py-2 3xl:py-[13px] 3xl:px-6 text-[14px] 3xl:text-[18px] rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white h-full"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 3xl:px-6 3xl:py-4 bg-green-600  hover:bg-green-700 text-white rounded-r-md transition-colors duration-200 flex items-center justify-center h-full"
              >
                <Search size={17} />
              </button>
            </div>

            <div className="w-full md:w-[10%] h-full relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="appearance-none w-full px-3 py-2 3xl:px-6 3xl:py-2.5 text-xs 3xl:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black/30 h-full pr-8"
              >
                <option value="" className="">City</option>
                {cities.map((city) => (
                  <option key={city} value={city} className="text-lg">
                    {city}
                  </option>
                ))}
              </select>
              {/* ✅ Solid filled arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-3 h-3 3xl:w-5 3xl:h-5 fill-current text-black/50"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 7l4.5 6 4.5-6H5.5z" />
                </svg>
              </div>{" "}
            </div>

            {/* Employment Type */}
            <div className="relative w-full md:w-[18%] h-full">
              <select
                value={selectedEmploymentType}
                onChange={(e) => setSelectedEmploymentType(e.target.value)}
                className="appearance-none w-full px-3 py-2 3xl:px-5 3xl:py-2.5 text-xs 3xl:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black/30 h-full"
              >
                <option value="">Employment Type</option>
                {employmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* ✅ Solid filled arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-3 h-3 3xl:h-5 3xl:w-5 fill-current text-black/50"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.5 7l4.5 6 4.5-6H5.5z" />
                </svg>
              </div>
            </div>

            {/* Sort By */}
            <div className="w-full md:w-[10%] h-full relative">
              <select
                value={selectedSortBy}
                onChange={(e) => setSelectedSortBy(e.target.value)}
                className="appearance-none w-full px-3 py-2 3xl:px-6 3xl:py-2.5 text-xs 3xl:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-black/30 h-full pr-8"
              >
                <option value="">Sort by</option>
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {/* Solid Dropdown Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 3xl:w-5 3xl:h-5 absolute right-3 top-1/2  transform -translate-y-1/2 pointer-events-none fill-current text-black/50"
                viewBox="0 0 20 20"
              >
                <path d="M5.25 7L10 12.5 14.75 7H5.25z" />
              </svg>
            </div>

            {/* Clear Filters */}
            <div className="w-full md:w-[10%] h-full items-center justify-center sm:ml-4">
              <button
                onClick={clearFilters}
                className="w-full bg-[#7B7B7B] py-2 3xl:py-3 hover:bg-gray-700 text-white/90 text-[11.5px] 3xl:text-base rounded-md transition-colors duration-200 h-full"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="rounded-lg">
          {filteredJobs.length === 0 ? (
            <div className=" text-center">
              <p className="text-gray">No jobs found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-2 hover:text-green-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className={`py-4 flex flex-col sm:flex-row justify-between items-start gap-4 ${
                  index < filteredJobs.length - 1
                    ? "border-b border-[#BABABA]"
                    : ""
                }`}
              >
                <div className="flex-1 w-[90%]">
                  <button
                    onClick={() => handleViewJob(job.id)}
                    className="text-xl 3xl:text-3xl font-semibold text-[#32A849] hover:text-green-700 cursor-pointer mb-1 3xl:mb-3 text-left"
                  >
                    {job.title}
                  </button>
                  <p className="text-[#444444] text-[13px] 3xl:text-[18px] mb-1 3xl:mb-2">
                    {job.location} | {job.type} | {job.salary}
                  </p>
                  <p className="text-[#888888] text-xs 3xl:text-[18px]">Posted: {job.posted}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleViewJob(job.id)}
                    className="bg-[#32A849] hover:bg-green-700 text-white px-6 py-1.5 3xl:px-8 3xl:py-2 rounded text-sm 3xl:text-lg font-medium transition-colors duration-200 whitespace-nowrap items-center justify-center sm:mt-6"
                  >
                    View Job
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All Jobs Button */}
        <div className="text-center mt-8 mb-8">
          <button
            onClick={handleViewAllJobs}
            className="bg-[#32A849] hover:bg-[#32A849] text-xs 3xl:text-base text-white px-4 py-2 3xl:px-6 3xl:py-2 rounded-md font-medium transition-colors duration-200"
          >
            View All Jobs
          </button>
        </div>

        {/* Active Filters Display */}
        {(searchTerm ||
          selectedCity ||
          selectedEmploymentType ||
          selectedSortBy) && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Active Filters:
            </h4>
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedCity && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                  City: {selectedCity}
                </span>
              )}
              {selectedEmploymentType && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                  Type: {selectedEmploymentType}
                </span>
              )}
              {selectedSortBy && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                  Sort: {selectedSortBy}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListingsComponent;
