//import React from "react";
import VisionIcon from "@/assets/About/vision.webp";
import MissionIcon from "@/assets/About/mission.webp";

const AboutCompany = () => {
  return (
    <div className="w-full sm:w-[75%] min-h-screen bg-white mx-auto px-4 py-[6vh] flex flex-col justify-left items-start ">
      {/* Company Introduction Section */}
      <div className="mx-auto">
        <h2 className="text-[32px] sm:text-3xl md:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-[52px] 4xl:text-[60px] font-bold mb-2 sm:mb-[5vh] text-gray-900   text-left">
          Company Introduction
        </h2>

        <div className="space-y-3 xl:space-y-3 sm:space-y-2 3xl:space-y-5 text-[#666666] text-sm sm:text-base md:text-[18px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[20px] 4xl:text-[26px] xl:leading-tight 4xl:leading-normal">
          <p className="mb-5 text-justify">
            Accurate Pest Control Services LLC, Dubai, is one of the most
            reliable and fast-growing pest control companies in the United Arab
            Emirates. We established our company in 2023 to enter the pest
            control business to offer good service at the rate of growth in the
            region. Our client base, as of now, has over 400 satisfied customers
            in Ajman, Sharjah, and Dubai. We have many certified, safe, and
            outcome-based pest control solutions.
          </p>

          <p className="mb-5 text-justify">
            Our parent company, which is supported by a wide variety of
            businesses, manages multiple respected companies like{" "}
            <a href="https://rajputtravelpk.com/" className="text-blue-600 underline hover:text-blue-800">
              Rajput Travel & Tourism LLC
            </a>
            ,{" "}
            <a href="https://rajputtravelpk.com/" className="text-blue-600 underline hover:text-blue-800">
              Rajput Travel & Tourism Private Limited
            </a>
            ,{" "}
            <a href="https://siyanalarabia.com/" className="text-blue-600 underline hover:text-blue-800">
              Siyah Al Arab
            </a>
            ,{" "}
            <a href="https://worldcitizenconsultants.com/" className="text-blue-600 underline hover:text-blue-800">
              World Citizen Consultants
            </a>
            ,{" "}
            <a href="https://www.facebook.com/profile.php?id=100066525975936" className="text-blue-600 underline hover:text-blue-800">
              Ghulam Bari Rice Mill
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Accurate SAF
            </a>
            , and{" "}
            <a href="https://ramazalnajah.com/" className="text-blue-600 underline hover:text-blue-800">
              Ramzaalnajah for Recruitment
            </a>
            . We keep blazing the trails as we foresee and dominate across the
            industries with a significant presence in Saudi Arabia, Pakistan,
            and the United Arab Emirates.
          </p>

          <p className="mb-5 text-justify">
            Our Services with Accurate Pest Control Services LLC Dubai, provide
            Clients with focused insect extermination, termite treatment,
            fumigation, and rodent control that deliver integrated pest
            management services to the residential, commercial, and industrial
            sectors. Whether it is roaches, bed bugs, ants, or termites, our
            designs are created specifically for your environment.
          </p>

          <p className="mb-5 text-justify">
            We were officially approved by{" "}
            <a href="https://www.dm.gov.ae/" className="text-blue-600 underline hover:text-blue-800">
              Dubai Municipality
            </a>
            ,{" "}
            <a href="https://portal.shjmun.gov.ae/en/Pages/Home.aspx" className="text-blue-600 underline hover:text-blue-800">
              Sharjah Municipality
            </a>
            ,{" "}
            <a href="https://www.am.gov.ae/en/" className="text-blue-600 underline hover:text-blue-800">
              Ajman Municipality
            </a>
            ,{" "}
            <a href="https://www.moccae.gov.ae/en/knowledge-and-statistics/food-safety.aspx" className="text-blue-600 underline hover:text-blue-800">
              Foodwatch and the Ministry of Climate Change and Environment
              (MOCCAE)
            </a>
            . Our team formally adheres to the standards of the UAE. As a member
            of{" "}
            <a href="https://www.npmapestworld.org/" className="text-blue-600 underline hover:text-blue-800">
              NPMA
            </a>
            , we keep abreast of all pest behaviour, safety and environment
            friendly methods as new trends to improve our own culture of pest
            management.
          </p>

          <p className="mb-5 text-justify">
            Care for our environment is immensely important to us, and ensuring
            that crawling species not targeted are safe from harm by our methods
            is of utmost importance hence, we will use non-toxic methods
            whenever possible to ensure your protection of these types and
            preserve the ecosystem and even if we can't use non-toxic methods we
            will always start with non-chemical options.
          </p>

          <p className="mb-5 text-justify">
            Understanding your pest issue involves smart identification of the
            pest or its activity, and effective action via targeting treatment,
            real-time monitoring and long-term prevention. Accurate Pest Control
            Services LLC Dubai does not discriminate on who we service or how
            quickly we can be to serve, giving all equal care in the treatment
            of all people and treating all sites or circumstances with
            professionalism.
          </p>

          <p className="mb-5 text-justify">
            When it comes to pest control of homes, offices, schools,
            restaurants, hospitals, ships and warehouses, fast, reliable, great
            service is what we provide. We will never stop being the best pest
            control in Dubai. Truly, there is no more consuming feeling than
            having created a pest-free environment where families and companies
            prosper as we go to work in our brains.
          </p>
        </div>
      </div>

      {/* Mission & Vision Boxes */}
      <div className="mt-12 sm:mt-16 w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
          {/* Our Mission */}
          <div className="bg-gradient-to-b from-[#20B73D] to-[#0C520A] text-white rounded-lg p-6 sm:p-[6vh]  shadow-lg flex flex-col items-center text-center min-h-[100px] sm:min-h-[160px]">
            {/* Vision Icon (Image instead of SVG) */}
            <div className="w-12 h-12 xl:w-12 xl:h-12  2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20 mb-4 sm:mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={MissionIcon}
                alt="Mission Icon"
                className="w-12 h-12 sm:w-8 sm:h-8 md:w-20 md:h-20 object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold mb-4 sm:mb-6">
              Our Mission
            </h3>

            <p className="text-xs text-white/90 sm:text-sm md:text-xs xl:text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl leading-relaxed  max-w-xl md:max-w-md 2xl:max-w-lg 3xl:max-w-xl 4xl:max-w-2xl">
              By providing secure and reliable pest control practices, we aim to
              safeguard communities, business establishments, and households in
              the entire UAE. We will strive to provide high-quality customer
              service in that area using our advanced technology, licensed
              experts and our bespoke plan. Our business includes making a
              change to human health through the creation of healthier,
              pest-free environments through support of recognition in both
              prevention and sustainability.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-gradient-to-b from-[#20B73D] to-[#0C520A] text-white rounded-lg p-6 sm:p-[6vh]  shadow-lg flex flex-col items-center text-center min-h-[100px] sm:min-h-[160px]">
            {/* Vision Icon (Image instead of SVG) */}
            <div className="w-12 h-12 xl:w-12 xl:h-12  2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20 mb-4 sm:mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={VisionIcon}
                alt="Vision Icon"
                className="w-12 h-12 sm:w-8 sm:h-8 md:w-20 md:h-20 object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-bold mb-4 sm:mb-6">
              Our Vision
            </h3>

            <p className="text-xs text-white/90 sm:text-sm md:text-xs xl:text-xs 2xl:text-base 3xl:text-lg 4xl:text-2xl leading-relaxed max-w-xl md:max-w-md 2xl:max-w-lg 3xl:max-w-xl 4xl:max-w-2xl">
              Our vision is to produce an excellent quality facility for the
              most popular family experience brands in the UAE. We exist not
              just to push against frontiers but also to have core values of
              progress and trust, and community well-being. Our company is
              committed to both the enhancement of social health and the
              preservation of the corporate culture and our environment. All our
              actions shall be driven by our commitment to serve our customers
              by offering the best customer service to create compelling
              relationships and ensure sustained loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
