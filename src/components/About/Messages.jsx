import React from "react";
import CEOImg from "@/assets/About/CEO.webp";
import MDImg from "@/assets/About/MD.webp";

const Messages = () => {
  return (
    <div className="w-full">
      {/* MD's Message */}
      <div className="w-full bg-bggray px-4 sm:px-[9%] py-8 md:py-6">
        <div className="sm:max-w-[90%] mx-auto flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl xl:text-2xl 2xl:text-4xl 3xl:text-[40px] 4xl:text-[48px] font-bold text-black/80 mb-2 md:mb-1 2xl:mb-4">
              CEO's Message
            </h2>
            <p className="text-black/60 mb-1 2xl:mb-4 3xl:mb-4 text-sm md:text-base xl:text-sm 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] 3xl:leading-tight text-justify">
              At Accurate Pest Control Services, the mission is not limited to
              eradicating the risks of pests in the UAE alone, but also creating
              awareness of the dangers of pests.
            </p>
            <p className="text-black/60 mb-1 2xl:mb-4 3xl:mb-6 text-sm md:text-base xl:text-sm 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] 3xl:leading-tight text-justify">
              Pests and the diseases they carry can cause severe damage to human
              and animal health, as well as to valuable assets and property.
              Pest infestations may result in irrecoverable losses. Effective
              control of pests is very important to guarantee a healthy and
              stable life for everyone and an abundance of active and healthy
              life.
            </p>
            <p className="text-black/60 mb-1 2xl:mb-4 3xl:mb-6 text-sm md:text-base xl:text-sm 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] 3xl:leading-tight text-justify">
              Pest control is in itself a very specialised field, and Accurate
              Pest Control Services L.L.C. has all the latest technology and
              expertise to handle such a challenge. The company is also keen on
              ensuring that the workforce and technology are maintained to stay
              on top of the emerging pests and evolving threats. Being
              concentrated on responsibility, Accurate Pest Control Services
              L.L.C. Safeguarding people, animals and valuable property and
              infrastructure sheltering. We will never be able to create a
              healthier and safer society with only our effort, as it is
              impossible without the active participation of the community.
              Everyone must realise the significance of routine pest management
              and undergo the same on their premises regularly.
            </p>

            <div>
              <h3 className="text-green-600 xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl lg:text-2xl font-semibold">
                SHAHZADA HASNAIN KHALID
              </h3>
              <p className="text-sm xl:text-sm 3xl:text-lg 4xl:text-lg text-black/50 font-medium">
                Chief Executive Officer(CEO)
              </p>
              <p className="text-base xl:text-base 3xl:text-xl 4xl:text-2xl text-black/70 font-bold">
                B.Sc. Hons. Agriculture
              </p>
              <p className="text-sm xl:text-xs 2xl:text-sm 3xl:text-lg text-black/50 font-medium">
                University of Agriculture, Faisalabad, Pakistan.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-base 3xl:max-w-xl rounded-lg overflow-hidden">
              <img
                src={CEOImg}
                alt="CEO"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MD's Message */}
      <div className="w-full bg-white px-4 sm:px-[5%] py-8 md:py-12">
        <div className="sm:max-w-[80%] mx-auto flex flex-col md:flex-row-reverse items-stretch gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl xl:text-2xl 2xl:text-4xl 3xl:text-[40px] 4xl:text-[44px] font-bold text-gray-800 mb-2 md:mb-1 2xl:mb-4">
              MD's Message
            </h2>
            <p className="text-black/60 mb-1 3xl:mb-4 text-sm md:text-base xl:text-sm 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] 3xl:leading-tight text-justify">
              At accurate pest control services, we dedicate our time, passion
              and trust to our valuable clients. Our motto is to achieve utmost
              customer satisfaction by rendering deep service analysis, planning
              and implementing our core business ethics.
            </p>
            <p className="text-black/60 mb-1 3xl:mb-4 text-sm md:text-base xl:text-sm 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] 3xl:leading-tight text-justify">
              Our corporate philosophy is, however, based on a very simple
              principle: "Give the customer value for money". To this end, we
              are constantly working towards upgrading and improving every
              aspect of our activity. Be it the quality of our product or our
              follow-up service, the emphasis is on keeping on improving.
            </p>
            <p className="text-black/60 mb-1 3xl:mb-4 text-sm md:text-base xl:text-sm  2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] 3xl:leading-tight text-justify">
              It is because of this constant commitment to excellence that we
              have earned the goodwill of so many of our customers.
            </p>
            <p className="text-black/60 mb-1 3xl:mb-4 text-sm md:text-base xl:text-sm  2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] 3xl:leading-tight text-justify">
              Nowadays, "APCS" is facing a new stage of active development. Our
              human resources are well-trained and motivated; our financial
              Fundamentals are strong, and we have an excellent reputation in
              the market. Our vision is to set challenging goals for ourselves
              constantly. We will continue to expand and diversify, and be an
              example of a progressive company playing a dynamic role in the
              economic development of the UAE.
            </p>

            <div className="space-y-0">
              <h3 className="text-green-600 xl:text-base 2xl:text-xl 3xl:text-xl 4xl:text-3xl font-bold">
                MUHAMMAD FAIZAN QADIR
              </h3>
              <p className="text-sm xl:text-sm 3xl:text-lg 2xl:text-base 4xl:text-xl text-black/50 font-medium">
                Managing Director (MD)
              </p>
              <p className="text-base xl:text-base 3xl:text-xl 2xl:text-lg 4xl:text-2xl text-black/70 font-bold">
                Pharm.D / MBA Marketing
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-base 3xl:max-w-[550px] rounded-lg overflow-hidden">
              <img
                src={MDImg}
                alt="MD"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
