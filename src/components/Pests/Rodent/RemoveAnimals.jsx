import { Link } from "react-router-dom"; // Import Link for routing

import Img1 from "/src/assets/Pests/mousehouse.png";
import Img2 from "/src/assets/Pests/roofrat.png";
import Img3 from "/src/assets/Pests/bandicootrat.png";
import Img4 from "/src/assets/Pests/norwayrat.png";

const RemoveAnimals = () => {
  const animals = [
    { 
      img: Img1, 
      name: "HOUSE MOUSE", 
      sci: "(MUS MUSCULUS)",
      link: "/house-mouse" // Add your desired route here
    },
    { 
      img: Img2, 
      name: "ROOF RAT", 
      sci: "(RATTUS RATTUS)",
      link: "/roof-rat"
    },
    { 
      img: Img3, 
      name: "BANDICOOT RAT", 
      sci: "(BANDICOTA BENGALENSIS)",
      link: "/bandicoot-rat"
    },
    { 
      img: Img4, 
      name: "NORWAY RAT", 
      sci: "(RATTUS NORVEGICUS)",
      link: "/norway-rat"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-4xl font-bold mb-8">We Remove The Following Animals</h2>

      <div className="flex w-4/5 space-x-4">
        {animals.map((animal) => (
          <Link
            key={animal.name}
            to={animal.link}
            className="w-[24%] h-[150px] rounded overflow-hidden shadow cursor-pointer"
          >
            <div className="relative">
              <img
                src={animal.img}
                alt={animal.name}
                className="w-full h-40 object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute bottom-0 left-0 w-full text-white text-sm text-left py-5 px-3">
                <div className="font-semibold">{animal.name}</div>
                <div>{animal.sci}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RemoveAnimals;
