import Member1 from "/src/assets/Home/image2.jpg";
import Member2 from "/src/assets/Home/image3.jpg";
import Member3 from "/src/assets/Home/image1.jpg";
import Member4 from "/src/assets/Home/image4.jpg";
import LeftLine from "/src/assets/Home/LeftLine.svg";
import RightLine from "/src/assets/Home/RightLine.svg";

const OurTeam = () => {
  const team = [
    {
      img: Member1,
      name: "Mayson Dela",
      position: "Dubai Call Centre",
      contact: "+971 52 449 6173,+971 800 8725",
    },

    {
      img: Member3,
      name: "Sathya Murugan",
      position: "Get Quotation",
      contact: "sales3@accuratepestcontrol.ae",
    },
    {
      img: Member2,
      name: "Mostafa Ismail",
      position: "Sales",
      contact: "sales7@accuratepestcontrol.ae",
    },
    {
      img: Member4,
      name: "Malik Numan",
      position: "Services",
      contact: "inquiry@accuratpestcontrol.ae",
    },
  ];

  return (
    <div className="w-full bg-bggray flex items-center justify-center py-10 sm:py-[6vh]">
      <div className="flex flex-col items-center w-full">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-[55px] font-bold text-black/80 text-center mb-16">
          Get help from our team
        </h2>

        {/* Team Section */}
        <div className="w-full flex justify-center bg-[#f3f3f3]">
          <div className="w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-md pt-10 pb-6 px-4 flex flex-col items-center text-center min-h-[40px] sm:min-h-[340px] lg:min-h-[120px]"
              >
                {/* Left SVG Line */}
                <img
                  src={LeftLine}
                  alt="Left Line"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-auto h-[100px] 3xl:h-[120px] xl:h-[100px] z-10"
                />

                {/* Right SVG Line */}
                <img
                  src={RightLine}
                  alt="Right Line"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-[100px] 3xl:h-[120px] xl:h-[100px] z-10"
                />

                {/* Avatar */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute -top-10 w-20 h-20 2xl:h-24 2xl:w-24 3xl:h-[86px] 3xl:w-[86px] rounded-full object-cover border-4 border-green-600 shadow-md bg-white"
                />

                {/* Name */}
                <h3 className="mt-4 xl:mt-4 2xl:mt-8 3xl:mt-8 text-sm sm:text-base lg:text-sm 2xl:text-xl font-bold text-black/70 leading-tight">
                  {member.name}
                </h3>

                {/* Position */}
                <p className="text-xs sm:text-sm lg:text-xs 3xl:text-base mt-1 text-black/70 ">
                  {member.position}
                </p>

                {/* Contact */}
                <p className="text-lg sm:text-sm lg:text-base 2xl:text-xl 3xl:text-2xl text-black/70 font-bold break-words w-full sm:max-w-[152px] 2xl:max-w-[200px] 3xl:max-w-[225px]">
                  {member.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
