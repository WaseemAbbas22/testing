import { useState } from "react";
import FreeInspection from "../components/Blogs/FreeInspection";

const SectorsPage = () => {
  const tabs = [
    { title: "Hotels & Hospitality", content: "In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times." },
    { title: "Shopping Malls", content: "Our pest management programs are designed to keep shopping malls pest-free, ensuring a safe and clean shopping experience." },
    { title: "Restaurants", content: "Restaurants require strict pest control to maintain hygiene standards. We offer targeted treatments to eliminate pests effectively." },
    { title: "Manufacturing", content: "We provide comprehensive pest control services to manufacturing facilities, ensuring protection of goods and compliance with health standards." },
    { title: "Hospitals", content: "Hospitals and healthcare facilities demand the highest hygiene. Our solutions ensure a pest-free and safe environment for patients." },
    { title: "Offices & Commercial Buildings", content: "We deliver tailored pest management for offices and commercial buildings, keeping workspaces healthy and compliant." },
    { title: "Schools", content: "Schools need safe pest control. We use eco-friendly treatments to keep educational institutions free from pests." },
    { title: "WareHouse", content: "Warehouses require strong pest prevention to protect inventory. Our integrated approach ensures long-term control." },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-24 py-10">
      <div className="max-w-7xl w-full flex flex-col space-y-10">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Industries We Protect — Comprehensive Pest Solutions for Every Sector
        </h2>

        {/* Tabs Row */}
        <div className="bg-[#F0F0F0] rounded shadow overflow-x-auto">
          <div className="flex">
            {tabs.map((tab) => (
              <div
                key={tab.title}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 cursor-pointer text-xs sm:text-sm font-semibold whitespace-nowrap transition
                  ${
                    activeTab.title === tab.title
                      ? "bg-green-600 text-white"
                      : "text-gray-800 hover:bg-green-600 hover:text-white"
                  }`}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>

        {/* Content + FreeInspection */}
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          
          {/* Left Side - Content */}
          <div className="flex-[7] bg-white rounded  p-4 text-sm">
            <h3 className="text-lg font-bold mb-2">{activeTab.title}</h3>
            <p>{activeTab.content}</p>
          </div>

          {/* Right Side - FreeInspection */}
          <div className="flex-[3]">
            <FreeInspection  />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SectorsPage;
