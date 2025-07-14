import { useState } from "react";

const ServicesTabs = () => {
  const tabs = [
    {
      title: "Residential & Commercial Pest Control",
      content: (
        <div className="text-xs text-gray-700 leading-6 space-y-1">
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
            businesses including

            Food Processing and Services,
            Retail,
            Hotels,
            Schools,
            Hospitals,
            Offices,
            Industrial & Construction,
            Yachts and Boats and
            Warehouses
          </p>
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
    <div className="w-full min-h-screen px-4 md:px-20 py-10 bg-bggray flex flex-col items-center">

      {/* Tabs Bar */}
      <div className="flex h-[8vh] flex-wrap justify-center items-center mb-4 bg-white rounded">
        {tabs.map((tab, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => setActiveTab(index)}
              className={`text-sm font-bold py-2 px-2 whitespace-nowrap transition
                ${activeTab === index
                  ? "text-white border-b-2 border-green-600 bg-darkgreen rounded"
                  : "text-gray-700 hover:bg-green-600 hover:text-white"
                }`}
            >
              {tab.title}
            </button>
            {/* Divider line between tabs */}
            {index !== tabs.length - 1 && (
              <div className="hidden md:block h-6 border-r border-bggray mx-0"></div>
            )}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-xs p-5 rounded max-w-5xl w-full">
        {tabs[activeTab].content}
      </div>

    </div>
  );
};

export default ServicesTabs;
