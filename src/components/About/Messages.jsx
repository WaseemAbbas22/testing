import CEOImg from "/src/assets/About/ceo.png";
import MDImg from "/src/assets/About/md.png";

const Messages = () => {
  return (
    <div className="w-full font-sans">

      {/* CEO's Message */}
      <div className="w-full bg-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col md:flex-row items-center gap-6">
        
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            CEO's Message
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-snug text-justify">
            At Accurate Pest Control, our mission goes beyond eliminating pests — it’s about protecting families, securing businesses, and fostering healthier communities across the UAE.
            From day one, I envisioned a company built on trust, integrity, and a deep commitment to safe, sustainable pest solutions. Today, I’m proud to say we have grown into a trusted name, known for combining proven expertise with the latest eco-friendly methods to deliver lasting peace of mind.
            Behind every service is a dedicated team of certified professionals who treat your property with the utmost care and respect. Their passion and hard work are the backbone of our promise: to provide reliable, discreet, and effective pest control, every single time.
            As we look ahead, our focus remains clear — to lead the industry with innovative solutions that protect both people and the planet.
            Thank you for placing your trust in Accurate Pest Control. We look forward to serving you, safeguarding your spaces, and exceeding your expectations.
          </p>
          <div className="space-y-0.5">
            <h3 className="text-green-600 text-lg font-bold">Shahzada Hasnain Khalid</h3>
            <p className="text-sm text-gray-800 font-semibold">Chief Executive Officer (CEO)</p>
            <p className="text-xs text-gray-600 italic">B.Sc. Hons. Agriculture</p>
            <p className="text-xs text-gray-500">University of Agriculture, Faisalabad, Pakistan.</p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-start">
          <img
            src={CEOImg}
            alt="CEO"
            className="h-[500px] w-auto rounded-lg object-contain"
          />
        </div>
      </div>

      {/* MD's Message */}
      <div className="w-full bg-gray-200 px-6 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col md:flex-row-reverse items-center gap-6">
        
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            MD's Message
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base leading-snug text-justify">
            At Accurate Pest Control, we have always believed that true service excellence is built on more than just technical expertise — it is built on understanding, dedication, and genuine care for the people and businesses we serve.
            As Managing Director, I take great pride in leading a team that goes the extra mile to protect our clients’ homes, workplaces, and reputations. Each day, we work with a clear purpose: to deliver fast, effective, and environmentally responsible solutions that make a real difference.
            We are committed to continuous improvement — embracing the latest technologies, adopting best practices, and investing in the training of our people. This is how we ensure that every treatment, every inspection, and every client interaction reflects our core values of safety, trust, and quality.
            I extend my heartfelt gratitude to our loyal customers and dedicated team members who make our success possible. Together, we will continue to set new standards in pest control and uphold the trust you place in us.
            Thank you for choosing Accurate Pest Control as your partner in protection.
          </p>
          <div className="space-y-0.5">
            <h3 className="text-green-600 text-lg font-bold">Muhammad Faizan Qadir</h3>
            <p className="text-sm text-gray-800 font-semibold">Managing Director (MD)</p>
            <p className="text-xs text-gray-600 italic">Pharm.D / MBA Marketing</p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-start">
          <img
            src={MDImg}
            alt="MD"
            className="h-[500px] w-auto rounded-lg object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default Messages;
