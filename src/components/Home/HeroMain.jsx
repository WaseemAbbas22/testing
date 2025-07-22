import PhoneCallBox from "./PhoneCallBox";
import HeroImg from "/src/assets/Home/HeroImg.png";

const HeroMain = () => {
  return (
    <div className="relative bg-green-100  h-[70vh] flex flex-col items-center justify-center py-8 px-4 md:px-10 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-20 2xl:px-20 2xl:py-12">
      
      {/* Inner Content Container */}
      <div className="w-full md:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] flex flex-col md:flex-row items-center justify-between md:space-x-8 lg:space-x-8 xl:space-x-16 2xl:space-x-8 space-y-6 md:space-y-0">

        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col space-y-2 md:space-y-4 lg:space-y-2 xl:space-y-2 2xl:space-y-6 text-left">
          <h1 className="
            text-lg 
            sm:text-xl 
            md:text-3xl 
            lg:text-4xl 
            xl:text-4xl 
            2xl:text-6xl 
            font-bold text-gray-900 leading-tight
          ">
            Trusted Commercial Pest <br /> Control Dubai Solution -<br /> Fast, Safe, Compliant
          </h1>

          <h2 className="
            text-xs
            sm:text-sm
            md:text-base
            lg:text-base
            xl:text-base
            2xl:text-2xl
            font-bold text-black/70
          ">
            Dubai municipality's pest control solution tailored <br /> control for commercial properties
          </h2>

          <p className="
            text-xs
            sm:text-sm
            md:text-base
            lg:text-sm lg:w-[490px]
            xl:text-sm xl:w-[540px]
            2xl:text-2xl 2xl:w-[800px]
            text-gray justify-content
          ">
            In Dubai, Pest Control is not only essential for business but also a top functional and legal concern. Our company’s Pest Control Dubai services are designed for industries that value cleanliness, safety, and regulations. We provide solutions that have been authorized by the pest control authority of the Dubai municipality, regardless of whether you are the owner of a restaurant, clinic, warehouse, or retail space. With thorough site inspections, digital reporting, and preventive actions, we assist you in keeping your environment pest-free and audit-ready. With our customized approach, your company will comply with Dubai's strongest pest control rules, react quickly, and be protected for a very long time.
          </p>

          <div className="flex flex-row space-x-2">
            <button className="
              bg-darkgreen text-white
              text-xs
              sm:text-sm
              md:text-base
              lg:text-xs
              xl:text-sm
              2xl:text-base
              font-medium px-4 py-2 lg:px-4 xl:px-4 xl:py-1 2xl:px-8 2xl:py-3 rounded-md shadow hover:bg-green-600 transition
            ">
              Get a Free Inspection
            </button>
            <button className="
              bg-gray text-white
              text-xs
              sm:text-sm
              md:text-base
              lg:text-xs
              xl:text-sm
              2xl:text-base
              font-medium px-4 py-2 lg:px-6 xl:px-6 xl:py-2 2xl:px-10 2xl:py-4 rounded-md shadow hover:bg-green-600 transition
            ">
              View More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={HeroImg}
            alt="Hero"
          />
        </div>
      </div>

      {/* PhoneCallBox */}
      <div className="absolute bottom-2 right-2">
        <PhoneCallBox
          title="Call For Free Inspection"
          phone="0800-25456158"
          containerWidth="230px"
          containerHeight="50px"
        />
      </div>

    </div>
  );
};

export default HeroMain;
