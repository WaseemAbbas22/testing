import { FaBullseye, FaEye } from 'react-icons/fa'; // Example icons for Mission and Vision

const AboutCompany = () => {
  return (
    <div className="w-full min-h-[150vh] bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-16 flex flex-col">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Company Introduction
      </h2>

      {/* Introduction Paragraphs */}
      <div className="max-w-4xl text-gray-700 space-y-6 text-justify">
        <p>
          Accurate Pest Control is a leading pest management company in the UAE, delivering comprehensive solutions tailored to your needs. With decades of experience, we ensure that your home or business is protected from all types of pests using the latest eco-friendly and effective methods. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem labore, doloremque sequi aut ullam commodi laborum delectus accusamus natus architecto esse, obcaecati mollitia repudiandae quisquam, fugiat quos deserunt amet?
          Expedita similique ut odio adipisci architecto. Quam nihil ad, iste laborum, suscipit nisi nostrum porro fugiat aspernatur at alias. Unde quod ad corporis quo quidem consequatur temporibus, repellat maxime deserunt.
          Beatae, ipsa labore. Quas, ea doloremque error consequuntur ipsum hic temporibus reprehenderit, libero mollitia natus aliquam inventore. Possimus nulla minus quaerat similique explicabo, tempora, numquam nobis vero itaque, temporibus sint.
        </p>
        <p>
          Our team comprises certified technicians who follow strict health and safety protocols while offering quick, effective, and municipality-approved treatments. We believe in long-lasting solutions rather than temporary fixes to guarantee your peace of mind.
        </p>
        <p>
          Over the years, Accurate Pest Control has built a strong reputation based on reliability, professionalism, and customer satisfaction. We continue to innovate our practices to remain at the forefront of pest management services in the UAE.
        </p>
        <p>
          We take pride in maintaining a customer-centric approach, ensuring that our services not only resolve pest issues but also educate clients on preventive measures. Our goal is to establish long-term relationships built on trust and consistent results.
        </p>
        <p>
          At Accurate Pest Control, our vision and mission drive us to uphold the highest standards in everything we do, ensuring that we remain the preferred choice for pest control solutions across Dubai, Sharjah, and Ajman.
        </p>
      </div>

      {/* Mission & Vision Boxes */}
      <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Our Mission */}
        <div className="bg-green-800 text-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
          <FaBullseye className="text-4xl mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-sm leading-relaxed">
            Our mission is to provide high-quality pest control services with integrity, ensuring the health and safety of our clients through environmentally responsible solutions. We aim to create pest-free environments for our customers with dedication and professionalism.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-green-800 text-white rounded-lg p-6 shadow-lg flex flex-col items-center text-center">
          <FaEye className="text-4xl mb-4" />
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-sm leading-relaxed">
            Our vision is to be the most trusted pest management company in the UAE, setting benchmarks in quality, safety, and sustainability. We aspire to continuously improve our services and expand our reach to ensure healthy, pest-free communities.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutCompany;
