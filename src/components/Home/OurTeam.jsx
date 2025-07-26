import Member1 from "/src/assets/Home/image2.jpg";
import Member2 from "/src/assets/Home/image3.jpg";
import Member3 from "/src/assets/Home/image1.jpg";
import Member4 from "/src/assets/Home/image4.jpg";

const OurTeam = () => {
  const team = [
    {
      img: Member1,
      name: "Malik Numan",
      position: "Dubai Call Centre",
      contact: "inquiry@accuratpestcontrol.ae",
    },
    {
      img: Member2,
      name: "Mostafa Ismail",
      position: "Get Quotation",
      contact: "sales7@accuratepestcontrol.ae",
    },
    {
      img: Member3,
      name: "Sathya Murugan",
      position: "Services",
      contact: "sales3@accuratepestcontrol.ae",
    },
    {
      img: Member4,
      name: "Mayson Dela",
      position: "Dubai Call Centre",
      contact: "+971 52 449 6173,+971 800 8725",
    },
  ];

  return (
    <div className="w-full h-auto h-[140vh] xl:h-[60vh] 3xl:h-[50vh] 4xl:h-[45vh] flex flex-col items-center bg-bggray">
      {/* Heading */}
      <h2 className=" text-3xl 3xl:text-6xl xl:mt-4 3xl:mt-8 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 2xl:mb-24 4xl:mt-20 2xl:text-7xl mt-6 ">
        Get help from our team
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols xl:h-[10vh] 4xl:h-[20vh] md:w-[80%] 3xl:w-[80%] sm:grid-cols-2 md:grid-cols-4 gap-8 w-full px-4 sm:px-8 md:px-[5vh] xl:mt-[8vh] 3xl:mt-4 4xl:mt-2 mt-8 ">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md mt-4 pt-14 pb-6 px-4 flex flex-col items-center text-center"
          >
            {/* Left vertical line with sloped ends */}
            <div className="absolute top-0 left-0 h-full flex items-center">
              <div className="relative h-[100px] 3xl:h-[120px] 4xl:h-[120px] w-[6px] bg-green-600">
                <div
                  className="absolute top-0 right-0 w-full h-3 bg-green-600 origin-top-right transform skew-y-12"></div>
                <div className="absolute bottom-0 right-0 w-full h-3 bg-green-600 origin-bottom-right transform -skew-y-12"></div>
              </div>
            </div>

            {/* Right vertical line with sloped ends */}
            <div className="absolute top-0 right-0 h-full flex items-center">
              <div className="relative h-[100px] 3xl:h-[120px] 4xl:h-[120px] w-[6px] bg-green-600">
                <div className="absolute top-0 left-0 w-full h-3 bg-green-600 origin-top-left transform -skew-y-12"></div>
                <div className="absolute bottom-0 left-0 w-full h-3 bg-green-600 origin-bottom-left transform skew-y-12
                "></div>
              </div>
            </div>

            {/* Circular Image */}
            <img
              src={member.img}
              alt={member.name}
              className="absolute -top-10 bg-white 2xl:-top-16 w-20 sm:w-20 md:w-20 h-20 sm:h-20 md:h-20 2xl:h-28 2xl:w-28 rounded-full object-contain border-4 border-darkgreen shadow-md"
            />

            {/* Name */}
            <h3 className="text-sm sm:text-sm md:text-base 2xl:text-2xl 2xl:mt-6 font-bold text-gray">
              {member.name}
            </h3>

            {/* Position */}
            <p className="text-sm sm:text-xs md:text-xs lg:mt-2  2xl:text-xl text-gray">
              {member.position}
            </p>

            {/* Contact */}
            <p className="text-sm text-black/70 sm:text-sm lg:text-lg 2xl:text-3xl md:mt-1 font-bold px-4  w-44 sm:w-48 lg:w-52 2xl:w-80 break-words">
              {member.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
