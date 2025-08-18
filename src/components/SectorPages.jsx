import { useState } from "react";
import FreeInspection from "../components/Blogs/FreeInspection";

const SectorsPage = () => {
  const tabs = [
    { title: "Hotels & Hospitality" },
    { title: "Shopping Malls" },
    { title: "Restaurants" },
    { title: "Manufacturing Units" },
    { title: "Hospitals" },
    { title: "Commercial Buildings" },
    { title: "Offices" },
    { title: "Schools" },
    { title: "WareHouse" },
  ];

  const contentMap = {
    "Hotels & Hospitality": {
      intro:
        "In the hospitality business, guest satisfaction is everything. A single pest sighting can result in bad reviews, health code violations, or even room closures. Our hospitality pest control service ensures your guests enjoy a clean, comfortable stay every time.",
      howWeHelpTitle: "How We Help Hotels:",
      points: [
        "Room-by-room inspection following a detailed checklist",
        "Targeted treatments for mattresses, headboards, and linen areas",
        "Custom solutions for pests like ants, flies, and cockroaches",
        "Safe, scent-free applications that don’t disturb guests",
        "Scheduled services for lobbies, spas, kitchens, and banquet areas",
        "Mattress vacuuming, steam cleaning, and preventive sealing",
        "Expert reporting for pest control in the hotel industry compliance",
        "On-call support for emergency pest situations",
      ],
      outro:
        "We help you maintain 5-star standards, hotel-friendly pest management in the hospitality sector.",
    },
    "Shopping Malls": {
      intro:
        "High foot traffic, food courts, and storage areas make malls a prime target for pest issues. Left untreated, they can disrupt operations, drive away customers, and impact store reputations. Our safe pest control Dubai services are designed to work behind the scenes without affecting your visitors' experience.",
      howWeHelpTitle: "How We Help Shopping Malls:",
      points: [
        "After-hours inspections to avoid business interruption",
        "Targeted treatments for food zones, restrooms, and waste areas",
        "Integrated pest management for large retail spaces",
        "Child and pet-safe solutions in public zones",
        "24/7 support for urgent pest issues",
      ],
      outro:
        "Our services help ensure a clean and welcoming shopping environment for both tenants and visitors.",
    },
    Restaurants: {
      intro:
        "In the food industry, even a small pest problem can shut down your kitchen and ruin your reputation. Our specialised restaurant pest control services are designed to keep your premises safe, hygienic, and fully compliant with food safety standards.",
      howWeHelpTitle: "How We Help Restaurants:",
      points: [
        "Routine checks for kitchens, storage, and dining areas",
        "Grease trap, drain, and Waste area treatments",
        "Cockroach, fly, and rodent elimination programs",
        "Food-safe, non-toxic applications during off-hours",
        "Detailed reporting to meet health inspection standards",
      ],
      outro:
        "We help protect your brand, customers, and kitchen with smart, effective pest control solutions customised for the food service industry.",
    },

    "Manufacturing Units": {
      intro:
        "Factories and production facilities are highly at risk of pest issues due to machinery warmth, raw materials, and large storage spaces. Our pest control services for the manufacturing sector guarantee that operations remain free from pest problems.",
      howWeHelpTitle: "How We Help Manufacturing Units:",
      points: [
        "Comprehensive inspections of production lines and stock areas",
        "Management of rodents and insects in the areas of raw materials and completed goods",
        "Custom treatment plans built by an experienced pest control manufacturing representative",
        "Management of flies and ants in the area of packing and processing plants",
        "Chemical-free treatments are safe for equipment and surfaces",
        "Scheduled fumigation for high-risk areas",
        "Full documentation and compliance with industrial safety standards",
      ],
      outro:
        "We protect your productivity and inventory with industry-level pest control, keeping your plant operational, efficient, and clean.",
    },

    Hospitals: {
      intro:
        "In medical environments, cleanliness is nonnegotiable. A single pest observation may harm patient health, violate regulations, and destroy public confidence in your facility. Our expert follows Dubai municipality pest control regulations to keep your spaces hygienic and secure.",
      howWeHelpTitle: "How We Help Hospitals:",
      points: [
        "Routine inspections and pest audits for all zones",
        "Rodent and cockroach control in kitchens and waste areas",
        "Odour-free treatments for wards, ICUs, and labs",
        "Safe disinfection using hospital-level solutions",
        "On-call support for sudden pest sightings",
      ],
      outro:
        "We deliver discreet, mall-friendly pest control that keeps your premises clean, compliant, and customer-ready every day.",
    },

    "Commercial Buildings": {
      intro:
        "Shared workspaces, elevators, storage rooms, and restrooms in commercial buildings create multiple entry points for pests. Our reliable commercial pest control services are designed to handle these dynamic environments without disrupting daily operations.",
      howWeHelpTitle: "How We Help Commercial Properties:",
      points: [
        "Multi-floor inspection and monitoring programs",
        "Quiet treatments for lobbies, stairwells, and washrooms",
        "Rodent and insect control for utility areas and basements",
        "Odour-free spraying suitable for high-traffic zones",
        "Long-term prevention plans for structural entry points",
        "Flexible scheduling to accommodate office hours",
        "Audit-ready reporting for pest control for commercial buildings compliance",
      ],
      outro:
        "We secure your entire commercial infrastructure, top to bottom, with precise, building-wide pest management solutions.",
    },

    Offices: {
      intro:
        "Workplace pests can cause workers to have health problems, interfere with productivity, and harm electronics. Maintaining a neat, business-appropriate workspace that meets your standards is made easier with our proactive office pest control service.",
      howWeHelpTitle: "How We Help Offices:",
      points: [
        "Routine examinations of common areas, server rooms, and desks",
        "Ant and cockroach control in kitchenettes and breakrooms",
        "Safe and odourless solutions applied after office hours",
        "Discreet treatments for boardrooms, lobbies, and workstations",
        "Long-term monitoring for pest-prone zones like storage cabinets",
        "Flexible scheduling to avoid work disruption",
        "Certified and trusted professionals",
        "Quick-response team for urgent pest control office needs",
      ],
      outro:
        "We design pest-free workspaces that maintain team productivity and business operations.",
    },
    Schools: {
      intro:
        "Homes and educational institutions require gentle yet effective pest control solutions. Safety comes first, whether it's in a classroom or a child's bedroom. Our trusted residential pest control services are designed with families and students in mind.",
      howWeHelpTitle: "How We Help Schools:",
      points: [
        "Safe and eco-friendly solutions for classrooms and cafeterias",
        "Targeted treatments for ants, cockroaches, and bed bugs in homes",
        "Pest control school services are designed for safe and hygienic learning environments",
        "Non-toxic options ideal for children",
        "Scheduled monthly visits for long-term protection",
        "Trusted residential service with rapid response",
      ],
      outro:
        "We help keep your living and learning spaces clean, safe, and pest-free, without disrupting daily life.",
    },
    WareHouse: {
      intro:
        "Warehouses are high-risk zones for pest infestations due to large storage spaces, frequent shipments, and limited foot traffic. All storage areas are kept clean, and your inventory is protected by our professional warehouse pest control services.",
      howWeHelpTitle: "How We Help Warehouses:",
      points: [
        "Rodent baiting and trapping systems throughout storage aisles",
        "Insect control for loading docks, pallets, and container areas",
        "Fumigation and barrier treatments for large-scale infestations",
        "Sealing of cracks, vents, and entry points to prevent re-entry",
        "Scheduled pest maintenance plans for long-term protection",
      ],
      outro:
        "We safeguard your supply chain and stored goods with industrial-grade pest control built for warehouse environments.",
    },
  };
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full flex items-center justify-center px-4 py-[5vh] md:px-12 lg:px-20 mt-10 bg-gray-50">
      <div className="w-[95%] flex flex-col space-y-0">
        {/* Heading */}
        <h2 className="text-center mb-8 text-2xl md:text-4xl 3xl:text-[55px] font-semibold 3xl:leading-[1.1]">
          Industries We Protect — Comprehensive <br /> Pest Solutions for Every
          Sector
        </h2>

        {/* Tabs */}
        <div className="w-[95%] mx-auto mb-8">
          <div className="bg-bggray rounded shadow w-full py-2">
            {" "}
            {/* parent taller */}
            <div className="flex w-[99%] mx-auto">
              {" "}
              {/* inner wrapper = 95% */}
              {tabs.map((tab) => (
                <div
                  key={tab.title}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 text-center mx-1 px-4 py-2 cursor-pointer 
          text-xs sm:text-sm 3xl:text-xl font-semibold whitespace-nowrap transition
          ${
            activeTab.title === tab.title
              ? "bg-green-600 text-white rounded-md"
              : "bg-gray-100 text-black hover:bg-green-600 hover:text-white rounded-md"
          }`}
                >
                  {tab.title}
                </div>
              ))}
            </div>
          </div>

          {/* Content + FreeInspection */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-6 w-full">
            {/* Left Side - Content (flex-7) */}
            <div className="flex-[7] rounded text-sm">
              <h3 className="text-lg font-bold mb-2 3xl:text-4xl">
                {activeTab.title}
              </h3>
              <div className="space-y-1.5 w-full">
                <p className="mb-4 text-xl text-[#666666] 3xl:text-lg w-[58%] 3xl:leading-tight">
                  {contentMap[activeTab.title]?.intro}
                </p>

                <div className="text-xs font-bold text-gray 3xl:text-xl">
                  {contentMap[activeTab.title]?.howWeHelpTitle}
                </div>

                <ul className="list-disc list-inside space-y-2 text-[12px] text-[#666666] 3xl:text-[18px]">
                  {contentMap[activeTab.title]?.points?.map((point, i) => (
                    <li key={i} className="marker:text-darkgreen">
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-1 text-xs text-[#666666] 3xl:text-[18px] w-[45%] 3xl:leading-[1.4]">
                  {contentMap[activeTab.title]?.outro}
                </p>
              </div>
            </div>

            {/* Right Side - FreeInspection (flex-3) */}
            <div className="flex-[3]">
              <FreeInspection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;
