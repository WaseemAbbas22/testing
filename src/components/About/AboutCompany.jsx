import React from "react";
import VisionIcon from "/src/assets/About/vision.png";
import MissionIcon from "/src/assets/About/mission.png";

const AboutCompany = () => {
  return (
    <div className="w-full sm:w-[75%] min-h-screen bg-white mx-auto px-4 py-12 flex flex-col justify-left items-start ">
      {/* Company Introduction Section */}
      <div className="mx-auto">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900   text-left">
          Company Introduction
        </h2>

        <div className="space-y-4 sm:space-y-6 text-[#666666] text-sm sm:text-base md:text-[18px] leading-relaxed text-justify">
          <p>
            At Accurate Pest Control, we pride ourselves on being one of the
            fastest-growing pest control companies in the UAE. Established in
            2023, we ventured into the pest control industry with a clear
            vision: to provide top-notch pest control services and engage in
            trading activities while expanding rapidly across the region. Today,
            we proudly serve over 400+ permanent clients across the three main
            emirates of the UAE:{" "}
            <span className="text-green-600 font-medium underline">
              Dubai, Sharjah, and Ajman
            </span>
            .
          </p>

          <p>
            In addition to pest control our parent company holds a diversified
            portfolio of businesses, including{" "}
            <span className="text-green-600 font-medium underline">
              Rajput Travel & Tourism LLC
            </span>
            ,{" "}
            <span className="text-green-600 font-medium underline">
              Rajput Travel & Tourism Private Limited
            </span>
            ,{" "}
            <span className="text-green-600 font-medium underline">
              Store Al Arab
            </span>
            ,{" "}
            <span className="text-green-600 font-medium underline">
              World Citizen Consultants
            </span>
            ,{" "}
            <span className="text-green-600 font-medium underline">
              Ghulam Bari Rice Mill
            </span>
            ,{" "}
            <span className="text-green-600 font-medium underline">
              Accurate Sap
            </span>{" "}
            and{" "}
            <span className="text-green-600 font-medium underline">
              Ramazalnajah
            </span>{" "}
            for Recruitment. With a strong presence in the UAE, Saudi Arabia,
            and Pakistan, we continue to drive growth and innovation in multiple
            industries.
          </p>

          <p>
            <span className="text-green-600 font-medium underline">
              Accurate Pest Control Services L.L.C
            </span>
            , a trusted leader in pest control services across Dubai, Sharjah,
            and Ajman, specializes in innovative solutions for insect and pest
            extermination, termite control, and fumigation. We have earned a
            solid reputation for our reliable, professional approach and
            commitment to delivering outstanding customer care, continuously
            strengthening our standing in the industry.
          </p>

          <p>
            As a leading pest control company serving{" "}
            <span className="text-green-600 font-medium underline">
              Dubai, Sharjah, and Ajman
            </span>
            , we are dedicated to continually advancing our pest control methods
            to remain at the forefront of the industry. We consistently research
            changes in pest behavior, habitats, and food sources to enhance our
            services. With a strong commitment to environmental responsibility,
            we prioritize the use of non-toxic methods to minimize our impact on
            non-target species and the environment. The insecticides we use are
            approved by the Ministry of Climate Change and Environment, U.A.E.,
            and are applied strictly in accordance with the manufacturer's label
            directions and recommendations.
          </p>

          <p>
            Understanding that every business has unique needs,{" "}
            <span className="text-green-600 font-medium underline">
              Accurate Pest Control Services L.L.C
            </span>
            , a leading pest control company in{" "}
            <span className="text-green-600 font-medium underline">
              Dubai, Sharjah, and Ajman
            </span>
            , tailors its services to meet individual requirements, ensuring the
            most effective pest control solutions. We are committed to providing
            dedicated services that help you address and resolve pest-related
            issues efficiently.
          </p>

          <p>
            Our services extend to all commercial and residential areas,
            including offices, schools, hospitals, F&B outlets, restaurants,
            showrooms, ships, warehouses, and more, making us a leading pest
            control company across{" "}
            <span className="text-green-600 font-medium underline">
              Dubai, Sharjah, and Ajman
            </span>
            .
          </p>

          <p>
            With a focus on providing benefits to our valued customers, we take
            pride in our integrity and business ethics, striving to maintain our
            reputation as a leading pest control company in{" "}
            <span className="text-green-600 font-medium underline">
              Dubai, Sharjah, and Ajman
            </span>
            . We are committed to continuous training and staying ahead of
            advancements in pest control, health, and safety—principles that are
            central to everything we do.
          </p>
        </div>
      </div>

      {/* Mission & Vision Boxes */}
      <div className="mt-12 sm:mt-16 w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Our Mission */}
          <div className="bg-gradient-to-b from-[#20B73D] to-[#0C520A] text-white rounded-lg p-6 sm:p-8 shadow-lg flex flex-col items-center text-center min-h-[300px] sm:min-h-[350px]">
            {/* Vision Icon (Image instead of SVG) */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={MissionIcon}
                alt="Mission Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-20 md:h-20 object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6">
              Our Mission
            </h3>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-base">
              We offer numerous benefits to our customers, taking pride in our
              integrity and business ethics. Our commitment to continuous
              improvement drives us to remain at the forefront of the pest
              control industry. We are dedicated to ongoing learning and
              adapting to the ever-evolving landscape of pest control, health,
              and safety. This dedication to constant training is at the core of
              everything we do.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-gradient-to-b from-[#20B73D] to-[#0C520A] text-white rounded-lg p-6 sm:p-8 shadow-lg flex flex-col items-center text-center min-h-[300px] sm:min-h-[350px]">
            {/* Vision Icon (Image instead of SVG) */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={VisionIcon}
                alt="Vision Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-20 md:h-20 object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6">
              Our Vision
            </h3>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-base">
              Our mission is to deliver exceptional customer value, rooted in
              integrity and strong business ethics. We are committed to
              continuous improvement, staying abreast of advancements in pest
              control, health, and safety practices. This dedication to ongoing
              training and innovation is central to our operations, ensuring the
              highest standards in everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
