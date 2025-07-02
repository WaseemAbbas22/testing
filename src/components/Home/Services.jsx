import Service1 from "/src/assets/Home/Ser1.jpg";
import Service2 from "/src/assets/Home/Ser1.jpg";
import Service3 from "/src/assets/Home/Ser1.jpg";
import Service4 from "/src/assets/Home/Ser1.jpg";
import Service5 from "/src/assets/Home/Ser1.jpg";
import Service6 from "/src/assets/Home/Ser1.jpg";
import Service7 from "/src/assets/Home/Ser1.jpg";
import Service8 from "/src/assets/Home/Ser1.jpg";

const Services = () => {
  const services = [
    { img: Service1, title: "Ants", subtitle: "Treatment" },
    { img: Service2, title: "Termites", subtitle: "Control" },
    { img: Service3, title: "Cockroaches", subtitle: "Removal" },
    { img: Service4, title: "Bed Bugs", subtitle: "Solution" },
    { img: Service5, title: "Mosquitoes", subtitle: "Management" },
    { img: Service6, title: "Rats", subtitle: "Extermination" },
    { img: Service7, title: "Bees", subtitle: "Relocation" },
    { img: Service8, title: "Spiders", subtitle: "Control" },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 font-serif">
        Our Services
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-sm mb-10 max-w-xl">
        We provide comprehensive pest control and treatment services tailored to your needs.<br/>
        Our expert team ensures effective, safe, and long-lasting solutions.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 w-full">
        {services.map((service, index) => (
          <div key={index} className="relative group rounded-md overflow-hidden">
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-500"></div>

            {/* Overlay Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-xs">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <button className="bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded shadow hover:bg-green-600 transition">
        View More
      </button>
    </div>
  );
};

export default Services;
