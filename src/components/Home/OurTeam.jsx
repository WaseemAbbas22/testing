import Member2 from "@/assets/Home/image2.webp";
import Member3 from "@/assets/Home/image3.webp";
import Member1 from "@/assets/Home/image1.webp";
import Member4 from "@/assets/Home/image4.webp";
import LeftLine from "@/assets/Home/LeftLine.webp";
import RightLine from "@/assets/Home/RightLine.webp";

const OurTeam = () => {
  const team = [
    {
      img: Member1,
      name: "Mayson Dela",
      position: "Dubai Call Centre",
      contact1: "+971 52 449 6173",
      contact2: "800 8725",
    },

    {
      img: Member2,
      name: "Sathya Murugan",
      position: "Get Quotation",
      contact1: "sales3@accuratepest control.ae",
    },
    {
      img: Member4,
      name: "Malik Numan",
      position: "Services",
      contact1: "inquiry@accuratepestcontrol.ae",
    },
    {
      img: Member3,
      name: "Mostafa Ismail",
      position: "Sales",
      contact1: "sales7@accuratepest control.ae",
    },
    
  ];

  return (
    <div className="w-full bg-bggray  flex items-center justify-center py-10 sm:py-[8vh]">
      <div className="flex flex-col items-center w-full">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[35px] 2xl:text-5xl 3xl:text-[50px] font-bold text-black/80 text-center mb-24">
          Get help from our team
        </h2>

        {/* Team Section */}
        <div className="w-full flex justify-center ">
          <div className="w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-4 3xl:gap-8 ">
            {team.map((member, index) => (
              <div
                key={index}
                className=" relative bg-white rounded-xl pt-10 pb-6 px-4 flex flex-col items-center text-center min-h-[40px] sm:min-h-[340px] lg:min-h-[120px] "
              >
                {/* Left SVG Line */}
                <img
                  src={LeftLine}
                  alt="Left Line"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-auto h-[100px] 3xl:h-[120px] xl:h-[100px] z-5"
                />

                {/* Right SVG Line */}
                <img
                  src={RightLine}
                  alt="Right Line"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-[100px] 3xl:h-[120px] xl:h-[100px] z-5"
                />

                {/* Avatar Frame */}
                <div
                  className="absolute -top-8 sm:-top-10 flex items-center justify-center 
             w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] 2xl:w-28 2xl:h-28 3xl:w-[90px] 3xl:h-[90px] 
             rounded-full bg-white border-4 border-green-600 shadow-md"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-full object-contain 
               w-16 h-16 sm:w-15 sm:h-15 2xl:w-20 2xl:h-20 3xl:w-[85px] 3xl:h-[85px]"
                  />
                </div>

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
                  {member.contact1}
                  <br />
                  {member.contact2}
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
