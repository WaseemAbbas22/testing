import Circle1 from "/src/assets/cir1.png";
import Circle2 from "/src/assets/cir2.png";
import man from "/src/assets/man.png";

const AboutHome = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gray-200 px-6 md:px-20 lg:px-28 xl:px-36 py-12 gap-12 font-serif">

      {/* Left Side (4 ratio) */}
      <div className="md:w-2/5 w-full flex justify-center relative">

        {/* Green Container with Main Image and radial brightness */}
        <div className="relative bg-green-600 rounded-lg flex justify-center items-end w-80 h-96 overflow-visible">

          {/* Bright radial spot */}
          <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-3xl scale-150 z-0"></div>

          {/* Man Image starting from bottom, not touching top */}
          <img
            src={man}
            alt="About Us"
            className="w-60 object-contain z-10 mb-0 mt-10"
          />

          {/* Left-Bottom Circular Image - moved to bottom left corner */}
          <img
            src={Circle1}
            alt="Left Bottom"
            className="absolute bottom-[-20px] left-[-20px] w-24 h-24 rounded-full border-2 border-white object-cover shadow-md"
          />

          {/* Right-Top Circular Image - moved to top right corner */}
          <img
            src={Circle2}
            alt="Right Top"
            className="absolute top-[-20px] right-[-20px] w-24 h-24 rounded-full border-2 border-white object-cover shadow-md"
          />
        </div>
      </div>

      {/* Right Side (6 ratio) */}
      <div className="md:w-3/5 w-full text-left md:pl-12">
        {/* Small Text */}
        <p className="text-green-600 text-sm font-semibold mb-2">About us</p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          We build experiences <br /> that inspire your growth
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 text-base mb-4">
          Our agency is committed to delivering top-notch services that help you stand out in the market. We create strategies that work specifically for your business needs.
        </p>
        <p className="text-gray-700 text-base mb-6">
          With years of experience, a dedicated team, and proven results, we ensure your brand reaches its full potential while providing exceptional customer experiences.
        </p>

        {/* Learn More Button */}
        <button className="bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded shadow hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutHome;
