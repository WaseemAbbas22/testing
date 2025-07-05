import Img1 from "../../assets/Pests/mousehouse.png";
import Img2 from "../../assets/Pests/roofrat.png";
import Img3 from "../../assets/Pests/bandicootrat.png";
import Img4 from "../../assets/Pests/norwayrat.png";

const RemoveAnimals = () => {
  const animals = [
    { img: Img1, name: "HOUSE MOUSE", sci: "(MUS MUSCULUS)" },
    { img: Img2, name: "ROOF RAT", sci: "(RATTUS RATTUS)" },
    { img: Img3, name: "BANDICOOT RAT", sci: "(BANDICOTA BENGALENSIS)" },
    { img: Img4, name: "NORWAY RAT", sci: "(RATTUS NORVEGICUS)" }
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8">We Remove The Following Animals</h2>

      <div className="flex w-4/5 justify-between gap-2">
        {animals.map((animal) => (
          <div key={animal.name} className="w-[30%] rounded overflow-hidden shadow">
            <div className="relative">
              <img
                src={animal.img}
                alt={animal.name}
                className="w-full h-40 object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute bottom-0 left-0 w-full text-white text-xs text-center py-2 px-2">
                <div className="font-semibold">{animal.name}</div>
                <div>{animal.sci}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoveAnimals;
