import Cert1 from "/src/assets/About/certificate1.png";
import Cert2 from "/src/assets/About/certificate2.png";
import Cert3 from "/src/assets/About/certificate3.png";

const Certificates = () => {
  return (
    <div className="w-full min-h-[50vh] bg-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 py-10 flex flex-col items-center justify-between">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Our Official Certificates
      </h2>

      {/* Certificates Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 w-full mb-8">
        {[Cert1, Cert2, Cert3].map((cert, index) => (
          <div
            key={index}
            className="border-4 border-green-600 rounded-lg p-2 bg-white shadow-sm"
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="h-40 w-auto object-contain mx-auto rounded-md"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button className="bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition mb-4">
        View More
      </button>
      
    </div>
  );
};

export default Certificates;
