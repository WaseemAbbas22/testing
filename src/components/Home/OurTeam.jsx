import Member1 from "/src/assets/Home/image2.jpg";
import Member2 from "/src/assets/Home/image3.jpg";
import Member3 from "/src/assets/Home/image1.jpg";
import Member4 from "/src/assets/Home/image4.jpg";

const OurTeam = () => {
  const team = [
    {
      img: Member4,
      name: "Malik Numan",
      position: "Services",
      contact: "inquiry@accuratpestcontrol.ae",
    },
    {
      img: Member2,
      name: "Mostafa Ismail",
      position: "Sales",
      contact: "sales7@accuratepestcontrol.ae",
    },
    {
      img: Member3,
      name: "Sathya Murugan",
      position: "Get Quotation",
      contact: "sales3@accuratepestcontrol.ae",
    },
    {
      img: Member1,
      name: "Mayson Dela",
      position: "Dubai Call Centre",
      contact: "+971 52 449 6173,+971 800 8725",
    },
  ];

  return (
    <div className="w-full bg-bggray py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[1400px]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-gray-800 text-center mb-12 sm:mb-20">
          Get help from our team
        </h2>

        {/* Team Grid */}
        <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md pt-16 pb-6 px-4 flex flex-col items-center text-center"
            >
              {/* Vertical Lines */}
              <div className="absolute top-0 left-0 h-full flex items-center">
                <div className="relative h-[100px] 3xl:h-[120px] w-[6px] bg-green-600">
                  <div className="absolute top-0 right-0 w-full h-3 bg-green-600 origin-top-right transform skew-y-12"></div>
                  <div className="absolute bottom-0 right-0 w-full h-3 bg-green-600 origin-bottom-right transform -skew-y-12"></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 h-full flex items-center">
                <div className="relative h-[100px] 3xl:h-[120px] w-[6px] bg-green-600">
                  <div className="absolute top-0 left-0 w-full h-3 bg-green-600 origin-top-left transform -skew-y-12"></div>
                  <div className="absolute bottom-0 left-0 w-full h-3 bg-green-600 origin-bottom-left transform skew-y-12"></div>
                </div>
              </div>

              {/* Avatar */}
              <img
                src={member.img}
                alt={member.name}
                className="absolute -top-10 w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 2xl:h-28 2xl:w-28 rounded-full object-contain border-4 border-darkgreen shadow-md bg-white"
              />

              {/* Name */}
              <h3 className="mt-2 text-sm md:text-base 2xl:text-xl 3xl:text-2xl font-bold text-gray">
                {member.name}
              </h3>

              {/* Position */}
              <p className="text-xs md:text-sm 2xl:text-base 3xl:text-xl text-gray mt-1">
                {member.position}
              </p>

              {/* Contact */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl text-black/70 font-bold mt-2 break-words w-full max-w-[220px]">
                {member.contact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
