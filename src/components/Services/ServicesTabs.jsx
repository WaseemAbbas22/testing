import { useState } from "react";

const ServicesTabs = () => {
  const tabs = [
    {
      title: "Residential & Commercial Pest Control",
      content: (
        <div className="text-sm text-gray-700 leading-6 space-y-4">
          <p>
            <strong>Accurate Pest Control Services</strong> offers comprehensive
            Pest Control Services in Dubai, Sharjah, and Ajman for both
            commercial and residential properties, addressing the unique
            challenges faced by property managers in these areas. Our services
            are conducted by certified, experienced staff, using pesticides
            approved by the Dubai/Sharjah/Ajman Municipality and Ministry of
            Climate Change & Environment. We prioritize a gentle, safe, and
            health-conscious approach to safeguard both your family and your
            living environment.
          </p>

          <p>
            Through our Pest Control Services, we manage a wide variety of
            pests, including bedbugs, cockroaches, ants, rats, mice, spiders,
            silverfish, pantry pests, and flying insects. We offer one-time
            services and annual contracts, complete with a free callback
            service, ensuring our technicians are always ready to address any
            pest issues, giving you peace of mind.
          </p>

          <p>
            To optimize the effectiveness of our services, you can assist by
            clearing excess clutter, as items left around can provide pests like
            bed bugs with extra hiding spots. We guarantee the best possible
            results while maintaining a healthy environment.
          </p>

          <p>
            We provide professional pest control services for different types of
            businesses including:
          </p>
          <ul className="list-disc list-inside">
            <li>Food Processing and Services</li>
            <li>Retail</li>
            <li>Hotels</li>
            <li>Schools</li>
            <li>Hospitals</li>
            <li>Offices</li>
            <li>Industrial & Construction</li>
            <li>Yachts and Boats</li>
            <li>Warehouses</li>
          </ul>

          <p>
            We strongly understand that each business has its own unique needs.
            This knowledge allows us to cater to your individual requirements in
            order to provide you with the best outcome for your pest control
            solution. Accurate Pest Control Services is determined to provide
            you with its fully dedicated services to get rid of your pest
            problems and prevent future ones.
          </p>

          <p>
            Each evaluation begins with a site visit and consultation which
            determines your specific necessities. Accurate Pest Control Services
            then presents you with a pest control program, properly designed and
            best suited for your business, along with the appropriate
            documentation.
          </p>

          <h3 className="font-semibold text-gray-800">Services Offered</h3>
          <ul className="list-disc list-inside">
            <li>Annual Pest Control Contracts</li>
            <li>Instant Pest Control Services</li>
          </ul>

          <p>
            All our technicians are well-trained and certified from Dubai,
            Sharjah, and Ajman Municipality. All pesticides used comply with
            their specifications.
          </p>

          <h3 className="font-semibold text-gray-800">Our Process</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Identification</li>
            <li>Monitoring</li>
            <li>Sanitation</li>
            <li>Exclusion</li>
            <li>Extermination</li>
            <li>Documentation</li>
          </ol>
        </div>
      ),
    },
    {
      title: "Specialized in pest extermination",
      content: <p>Content for Specialized in pest extermination tab.</p>,
    },
    {
      title: "Termite Control",
      content: <p>Content for Termite Control tab.</p>,
    },
    {
      title: "Successful Termite Control Process by APC",
      content: <p>Content for Successful Termite Control Process by APC tab.</p>,
    },
    {
      title: "Fumigation Service",
      content: <p>Content for Fumigation Service tab.</p>,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-5 md:px-20 py-10">
      {/* Tabs */}
      <div className="flex overflow-x-auto space-x-4 mb-10 border-b pb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-shrink-0 px-4 py-2 rounded-t whitespace-nowrap ${
              activeTab === index
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            } transition`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-5 rounded shadow-inner">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default ServicesTabs;
