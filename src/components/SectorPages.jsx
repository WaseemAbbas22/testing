import { useState } from "react";
import FreeInspection from "../components/Blogs/FreeInspection";

const SectorsPage = () => {
  const tabs = [
    {
      title: "Hotels & Hospitality",
      content: (
        <>
          <p className="mb-4 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
    {
      title: "Shopping Malls",
      content: (
        <>
          <p className="mb-0 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
    {
      title: "Restaurants",
      content: (
        <>
          <p className="mb-0 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
    {
      title: "Manufacturing",
      content: (
        <>
          <p className="mb-0 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
    {
      title: "Hospitals",
      content: (
        <>
          <p className="mb-0 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
    {
      title: "Offices & Commercial Buildings",
      content: (
        <>
          <p className="mb-0 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
    {
      title: "Schools",
      content: (
        <>
          <p className="mb-0 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
    {
      title: "WareHouse",
      content: (
        <>
          <p className="mb-0 text-xs text-gray">
            In the hospitality industry, your reputation is everything. One pest sighting can lead to poor reviews, lost bookings, and damage to your brand. We understand the importance of maintaining pristine guest rooms, spotless kitchens, and pest-free public areas at all times.
          </p>
          <div className="text-xs font-bold text-gray">How We Help Hotels:</div>
          <ul className="list-disc list-inside space-y-0 text-[12px] text-gray">
            <li className="marker:text-darkgreen">Routine inspections to catch problems before guests do</li>
            <li className="marker:text-darkgreen">Bed bug detection and treatments for guest rooms</li>
            <li className="marker:text-darkgreen">Cockroach and rodent control in kitchens and storage</li>
            <li className="marker:text-darkgreen">Safe disinfection services for shared areas</li>
            <li className="marker:text-darkgreen">24/7 emergency support for quick resolution</li>
          </ul>
          <p className="mb-0 text-xs text-gray">
            We deliver discreet service with minimal disruption, ensuring your guests stay comfortable and your reputation stays 5-star.
          </p>
        </>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-20 mt-10 bg-gray-50">
      <div className="max-w-7xl w-full flex flex-col space-y-0">

        {/* Heading */}
        <h2 className="text-center mb-8 text-2xl md:text-4xl font-semibold">
          Industries We Protect — Comprehensive <br /> Pest Solutions for Every Sector
        </h2>

        <div className="w-full md:w-[88%] ml-16 mb-8 bg-bggray rounded shadow">
          <div className="flex">
            {tabs.map((tab) => (
              <div
                key={tab.title}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 cursor-pointer text-xs sm:text-sm font-semibold whitespace-nowrap transition
          ${activeTab.title === tab.title
                    ? "bg-green-600 text-white rounded"
                    : "bg-gray-100 text-black hover:bg-green-600 hover:text-white"
                  }`}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>

        {/* Content + FreeInspection */}
        <div className="flex flex-col md:flex-row px-[68px] md:space-x-4 space-y-4 md:space-y-0">

          {/* Left Side - Content (flex-7) */}
          <div className="flex-[7] rounded mt-6 text-sm">
            <div className="mr-32">
              <h3 className="text-lg font-bold mb-1">{activeTab.title}</h3>
              <div className="space-y-1.5">{activeTab.content}</div>
            </div>
          </div>

          {/* Right Side - FreeInspection (flex-3) */}
          <div className="flex-[3]">
            <FreeInspection />
          </div>

        </div>

      </div>
    </div>
  );
};

export default SectorsPage;
