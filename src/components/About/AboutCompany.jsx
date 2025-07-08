//import { FaBullseye, FaEye } from 'react-icons/fa'; // Example icons for Mission and Vision
import mission from "/src/assets/About/mission.png"
import vision from "/src/assets/About/vision.png"
import bg from "/src/assets/About/bg.png"
const AboutCompany = () => {
  return (
    <div className="w-full min-h-[150vh] bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-16 flex flex-col">

      {/* Heading */}
      {/* Introduction Paragraphs */}
      <div className="max-w-6xl text-gray-500 text-sm space-y-0  text-justify">
        <div className="max-w-5xl mx-auto px-4 py-2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Company Introduction
          </h2>

          <div className="space-y-6 text-[#666666] text-[13px] font-[13px] leading-relaxed space-y-[3px]">

            <p>
              At Accurate Pest Control, we pride ourselves on being one of the fastest-growing pest control companies in the UAE. Established in 2023, we ventured into the pest control industry with a clear vision: to provide top-notch pest control services and engage in trading activities while expanding rapidly across the region. Today, we proudly serve over 400+ permanent clients across the three main emirates of the UAE:{" "}
              <span className="text-green-600 font-medium underline">Dubai, Sharjah, and Ajman</span>.
            </p>
<br/>
            <p>
              In addition to pest control our parent company holds a diversified portfolio of businesses, including{" "}
              <span className="text-green-600 font-medium underline">Rajput Travel & Tourism LLC</span>,{" "}
              <span className="text-green-600 font-medium underline">Rajput Travel & Tourism Private Limited</span>,{" "}
              <span className="text-green-600 font-medium underline">Store Al Arab</span>,{" "}
              <span className="text-green-600 font-medium underline">World Citizen Consultants</span>,{" "}
              <span className="text-green-600 font-medium underline">Ghulam Bari Rice Mill</span>,{" "}
              <span className="text-green-600 font-medium underline">Accurate Sap</span> and{" "}
              <span className="text-green-600 font-medium underline">Ramazalnajah</span> for Recruitment. With a strong presence in the UAE, Saudi Arabia, and Pakistan, we continue to drive growth and innovation in multiple industries.
            </p>
<br/>
            <p>
              <span className="text-green-600 font-medium underline ">Accurate Pest Control Services L.L.C</span>, a trusted leader in pest control services across Dubai, Sharjah, and Ajman, specializes in innovative solutions for insect and pest extermination, termite control, and fumigation. We have earned a solid reputation for our reliable, professional approach and commitment to delivering outstanding customer care, continuously strengthening our standing in the industry.
            </p>
<br/>
            <p>
              As a leading pest control company serving{" "}
              <span className="text-green-600 font-medium underline">Dubai, Sharjah, and Ajman</span>, we are dedicated to continually advancing our pest control methods to remain at the forefront of the industry. We consistently research changes in pest behavior, habitats, and food sources to enhance our services. With a strong commitment to environmental responsibility, we prioritize the use of non-toxic methods to minimize our impact on non-target species and the environment. The insecticides we use are approved by the Ministry of Climate Change and Environment, U.A.E., and are applied strictly in accordance with the manufacturer’s label directions and recommendations.
            </p>
<br/>
            <p>
              Understanding that every business has unique needs,{" "}
              <span className="text-green-600 font-medium underline">Accurate Pest Control Services L.L.C</span>, a leading pest control company in{" "}
              <span className="text-green-600 font-medium underline">Dubai, Sharjah, and Ajman</span>, tailors its services to meet individual requirements, ensuring the most effective pest control solutions. We are committed to providing dedicated services that help you address and resolve pest-related issues efficiently.
            </p>
<br/>
            <p>
              Our services extend to all commercial and residential areas, including offices, schools, hospitals, F&B outlets, restaurants, showrooms, ships, warehouses, and more, making us a leading pest control company across{" "}
              <span className="text-green-600 font-medium underline">Dubai, Sharjah, and Ajman</span>.
            </p>
<br/>
            <p>
              With a focus on providing benefits to our valued customers, we take pride in our integrity and business ethics, striving to maintain our reputation as a leading pest control company in{" "}
              <span className="text-green-600 font-medium underline">Dubai, Sharjah, and Ajman</span>. We are committed to continuous training and staying ahead of advancements in pest control, health, and safety—principles that are central to everything we do.
            </p>
          </div>
        </div>

      </div>

      {/* Mission & Vision Boxes */}
      <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Our Mission */}
        <div
          className="bg-green-800 text-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <img
            src= {mission}// replace with your actual image path
            alt="Vision"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-xs leading-relaxed">
            We offer numerous benefits to our customers, taking pride in our integrity and business ethics. Our commitment to continuous improvement drives us to remain at the forefront of the pest control industry. We are dedicated to ongoing learning and adapting to the ever-evolving landscape of pest control, health, and safety. This dedication to constant training is at the core of everything we do.
          </p>
        </div>

        {/* Our Vision */}
        <div
          className="bg-green-800 text-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Replaced icon with image */}
          <img
            src={vision} // replace with your actual image path
            alt="Vision"
            className="w-12 h-12 mb-4"
          />

          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>

          <p className="text-xs leading-relaxed">
            Our mission is to deliver exceptional customer value, rooted in integrity
            and strong business ethics. We are committed to continuous improvement, staying abreast of advancements in pest control, health, and safety practices. This dedication to ongoing training and innovation is central to our operations, ensuring the highest standards in everything we do.
          </p>
        </div>


      </div>
    </div>
  );
};

export default AboutCompany;
