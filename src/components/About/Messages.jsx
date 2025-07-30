import React from "react";
import CEOImg from "/src/assets/About/CEO.png";
import MDImg from "/src/assets/About/MD.png";

const Messages = () => {
  return (
    <div className="w-full">
      {/* CEO's Message */}
      <div className="w-full  bg-bggray px-6  py-8  mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 sm:w-[80%] mx-auto">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
              CEO's Message
            </h2>
            <p className="text-black/70 mb-2 md:mb-4 2xl:text-sm 3xl:text-[18px] lg:text-base text-justify">
              At Accurate Pest Control, our mission goes beyond eliminating
              pests — it’s about protecting families, securing businesses, and
              fostering healthier communities across the UAE. From day one, I
              envisioned a company built on trust, integrity, and a deep
              commitment to safe, sustainable pest solutions. Today, I’m proud
              to say we have grown into a trusted name, known for combining
              proven expertise with the latest eco-friendly methods to deliver
              lasting peace of mind
            </p>
            <p className="text-black/70 mb-2 md:mb-4 xl:text-xs 3xl:text-base 2xl:text-sm 3xl:text-[18px] lg:text-base text-justify">
              Behind every service is a dedicated team of certified
              professionals who treat your property with the utmost care and
              respect. Their passion and hard work are the backbone of our
              promise: to provide reliable, discreet, and effective pest
              control, every single time. As we look ahead, our focus remains
              clear — to lead the industry with innovative solutions that
              protect both people and the planet.
            </p>
            <p className="text-black/70 mb-2 md:mb-4 xl:text-xs 3xl:text-base 2xl:text-sm 3xl:text-[18px] lg:text-base text-justify">
              Thank you for placing your trust in Accurate Pest Control. We look
              forward to serving you, safeguarding your spaces, and exceeding
              your expectations.
            </p>

            <div className="space-y-1">
              <h3 className="text-green-600 text-lg md:text-xl font-bold">
                SHAHZADA HASNAÍN KHALID
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Chief Executive Officer (CEO)
              </p>
              <p className="text-base md:text-lg text-gray-800 font-bold">
                B.Sc. Hons. Agriculture
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                University of Agriculture, Faisalabad, Pakistan.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden ">
              <div className="aspect-[3/4] flex items-center justify-center">
                <img
                  src={CEOImg}
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MD's Message */}
      <div className="w-full bg-white px-6 py-8 ">
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 md:gap-12 sm:w-[80%] mx-auto">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-2">
              MD's Message
            </h2>
            <p className="text-black/70 mb-2 md:mb-4 xl:text-xs 3xl:text-base 2xl:text-sm 3xl:text-[18px] lg:text-base text-justify">
              At Accurate Pest Control, we have always believed that true
              service excellence is built on more than just technical expertise
              — it is built on understanding, dedication, and genuine care for
              the people and businesses we serve.
            </p>
            <p className="text-black/70 mb-2 md:mb-2   xl:text-xs 3xl:text-base 2xl:text-sm 3xl:text-[18px] lg:text-base text-justify">
              As Managing Director, I take great pride in leading a team that
              goes the extra mile to protect our clients’ homes, workplaces, and
              reputations. Each day, we work with a clear purpose: to deliver
              fast, effective, and environmentally responsible solutions that
              make a real difference. We are committed to continuous improvement
              — embracing the latest technologies, adopting best practices, and
              investing in the training of our people. This is how we ensure
              that every treatment, every inspection, and every client
              interaction reflects our core values of safety, trust, and
              quality.
            </p>
            <p className="text-black/70 mb-2 md:mb-2 xl:text-xs 3xl:text-base 2xl:text-sm 3xl:text-[18px] lg:text-base text-justify">
              I extend my heartfelt gratitude to our loyal customers and
              dedicated team members who make our success possible. Together, we
              will continue to set new standards in pest control and uphold the
              trust you place in us.
            </p>
            <p className="text-black/70 mb-2 md:mb-2   xl:text-xs 3xl:text-base 2xl:text-sm 3xl:text-[18px] lg:text-base text-justify">
              Thank you for choosing Accurate Pest Control as your partner in
              protection
            </p>
            <div className="space-y-1">
              <h3 className="text-green-600 text-lg md:text-xl font-bold">
                MUHAMMAD FAIZAN QADIR
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Managing Director (MD)
              </p>
              <p className="text-base md:text-lg text-gray-800 font-bold">
                Pharm.D / MBA Marketing
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden ">
              <div className="aspect-[3/4] flex items-center justify-center">
                <img
                  src={CEOImg}
                  alt="MD"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
