import { Link } from "react-router-dom";
import Pest1 from "../../assets/Pests/ant.png";
import Pest2 from "../../assets/Pests/cockroch.png";
import Pest3 from "../../assets/Pests/redbug.png";
import Pest4 from "../../assets/Pests/rodent.png";
import Pest5 from "../../assets/Pests/flies.png";
import Pest6 from "../../assets/Pests/mosquitoes.png";
import Pest7 from "../../assets/Pests/spider.png";
import Pest8 from "../../assets/Pests/termites.png";
import Pest9 from "../../assets/Pests/venomous.png";
import Pest10 from "../../assets/Pests/bird.png";
import Pest11 from "../../assets/Pests/lizard.png";
import Pest12 from "../../assets/Pests/tick.png";
import Pest13 from "../../assets/Pests/wasp.png";
import Pest14 from "../../assets/Pests/mosquitoes.png";

const pests = [
  { id: 1, name: "ANTS", desc: "Treatment", more: "Ants invade in search of food and water sources.", image: Pest1, link: "/ants" },
  { id: 2, name: "COCKROACHES", desc: "Treatment", more: "Cockroaches breed in stagnant water and spread diseases.", image: Pest2, link: "/cockroaches" },
  { id: 3, name: "RED BUGS", desc: "Treatment", more: "Red bugs can cause skin irritation and discomfort.", image: Pest3, link: "/red-bugs" },
  { id: 4, name: "RODENTS", desc: "Treatment", more: "We deliver safe, effective pest control and sanitization solutions for homes and businesses. ", image: Pest4, link: "/rodents" },
  { id: 5, name: "FLIES", desc: "Treatment", more: "Flies can contaminate food and spread diseases.", image: Pest5, link: "/flies" },
  { id: 6, name: "MOSQUITOES", desc: "Treatment", more: "Mosquitoes breed in stagnant water and spread diseases.", image: Pest6, link: "/mosquitoes" },
  { id: 7, name: "SPIDERS", desc: "Treatment", more: "Spiders can cause fear and anxiety in some individuals.", image: Pest7, link: "/spiders" },
  { id: 8, name: "TERMITES", desc: "Treatment", more: "Termites silently damage wooden structures and furniture.", image: Pest8, link: "/termites" },
  { id: 9, name: "VENOMOUS", desc: "Treatment", more: "Venomous pests can pose serious health risks to humans and pets.", image: Pest9, link: "/venomous" },
  { id: 10, name: "BIRDS", desc: "Treatment", more: "Birds nesting can cause hygiene issues.", image: Pest10, link: "/birds" },
  { id: 11, name: "LIZARDS", desc: "Treatment", more: "Lizards are nuisance pests in homes.", image: Pest11, link: "/lizards" },
  { id: 12, name: "TICKS", desc: "Treatment", more: "Ticks can transmit diseases to humans and pets.", image: Pest12, link: "/ticks" },
  { id: 13, name: "WASPS", desc: "Treatment", more: "Wasps can sting and cause allergies.", image: Pest13, link: "/wasps" },
  { id: 14, name: "MOSQUITOES", desc: "Treatment", more: "Mosquitoes breed in stagnant water and spread diseases.", image: Pest14, link: "/mosquitoes" }, // ... your remaining pest items
];

const PestsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white px-4 md:px-10 lg:px-20 py-6 rounded shadow">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 justify-center">
          {pests.map((pest, index) => (
            <div
              key={pest.id}
              className="relative rounded-lg overflow-hidden group w-full max-w-[250px]"
              style={{ gridColumn: index >= 12 ? `${index === 12 ? 2 : 3} / span 1` : undefined }}
            >
              <img
                src={pest.image}
                alt={pest.name}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-3 transition duration-300 group-hover:bg-opacity-70">

                <div className="relative w-full">

                  {/* Name & Desc container */}
                  <div className="absolute bottom-3 left-3 transition-transform duration-500 transform translate-y-0 group-hover:-translate-y-20">
                    <h3 className="text-white text-base font-bold">{pest.name}</h3>
                    <p className="text-gray-300 text-xs">{pest.desc}</p>
                  </div>

                  {/* Hidden text + button shown on hover directly below title */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-10 group-hover:translate-y-0">
                    <div className="mt-10"> {/* adds spacing to appear under moved title */}
                      <p className="text-gray-200 text-xs mb-2">{pest.more}</p>
                      <Link
                        to={pest.link}
                        className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition block text-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PestsGrid;
