import Member1 from "/src/assets/Home/image1.png";
import Member2 from "/src/assets/Home/image2.png";
import Member3 from "/src/assets/Home/image3.png";
import Member4 from "/src/assets/Home/image1.png";

const OurTeam = () => {
  const team = [
    { img: Member1, name: "Abdullah", position: "Dubai Call Centre", contact: "+971 52 152 8725,+971 4 375 6435" },
    { img: Member2, name: "Neha", position: "Get Quotation", contact: "info@accuratepestcontrol.ae" },
    { img: Member3, name: "Saleem", position: "Services", contact: "operations@accuratepestcontrol.ae" },
    { img: Member4, name: "Azeem", position: "Sales", contact: "sales@accuratepst control.ae" },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 bg-bggray">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-16">
        Get help from the Team
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl px-4 sm:px-8 md:px-12">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md pt-14 pb-6 px-4 flex flex-col items-center text-center"
            style={{
              height: "30vh",
              minHeight: "150px",
              maxHeight: "150px",
            }}
          >
            {/* Left Line with Triangle */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center">
              <div className="h-[15vh] xl:h-[15vh] w-1 bg-green-600"></div>
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-green-600"></div>
            </div>

            {/* Right Line with Triangle */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
              <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-green-600"></div>
              <div className="h-[15vh] w-1 bg-green-600"></div>
            </div>
 
            {/* Circular Image */}
            <img
              src={member.img}
              alt={member.name}
              className="absolute -top-10 w-16 sm:w-20 md:w-20 h-16 sm:h-20 md:h-20 rounded-full border-4 border-darkgreen object-cover shadow-md"
            />

            {/* Name */}
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray">{member.name}</h3>

            {/* Position */}
            <p className="text-[10px] sm:text-xs md:text-xs text-gray">{member.position}</p>

            {/* Contact */}
            <p className="text-xs sm:text-sm md:text-md md:mt-1 font-bold px-4  w-36 sm:w-48 md:w-52 break-words">
              {member.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
