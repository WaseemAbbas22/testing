import Member1 from "/src/assets/Home/image1.png";
import Member2 from "/src/assets/Home/image2.png";
import Member3 from "/src/assets/Home/image3.png";
import Member4 from "/src/assets/Home/image1.png";

const OurTeam = () => {
  const team = [
    { img: Member1, name: "John Doe", position: "Pest Control Expert", contact: "john@example.com" },
    { img: Member2, name: "Jane Smith", position: "Field Supervisor", contact: "+971 50 123 4567" },
    { img: Member3, name: "Mike Johnson", position: "Operations Manager", contact: "mike@example.com" },
    { img: Member4, name: "Emily Brown", position: "Cleaning Specialist", contact: "+971 55 987 6543" },
  ];

  return (
    <div
      className="
        w-full min-h-[70vh] bg-bggray flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-32
      ">

      {/* Heading */}
      <h2
        className="
          text-xl sm:text-2xl md:text-4xl font-bold text-center text-gray-800
          mb-12 sm:mb-12
        ">
        Get help from our team
      </h2>

      {/* Team Boxes */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl
        ">
        {team.map((member, index) => (
          <div
            key={index}
            className="
              relative bg-white rounded-md shadow-md pt-12 pb-12 px-4
              flex flex-col items-center text-center border-l-4 border-r-4 border-green-400
            "

          >
            {/* Circular Image */}
            <img
              src={member.img}
              alt={member.name}
              className="absolute -top-10 w-20 h-20 rounded-full border-2 border-green-500
                object-cover bg-white"/>

            {/* Name */}
            <h3
              className="
                mt-2 text-base sm:text-lg font-bold text-gray-800
              "

            >
              {member.name}
            </h3>

            {/* Position */}
            <p className="text-xs sm:text-sm text-gray-600 sm:mb-2">
              {member.position}
            </p>

            {/* Contact */}
            <p className="text-green-600 text-sm sm:text-base font-semibold">
              {member.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
