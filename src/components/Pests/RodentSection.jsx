import RodentImg1 from "../../assets/Pests/rodent1.png";
import RodentImg2 from "../../assets/Pests/rodent2.png";

const RodentSection = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white py-10">
      {/* Upper Section */}
      <div className="flex w-4/5 rounded shadow overflow-hidden mb-8" style={{ background: "linear-gradient(to right, #0C520A, #32A849)" }}>
        {/* Text */}
        <div className="w-1/2 p-4 pl-8 flex flex-col justify-center items-start text-left">
          <h3 className="text-white text-lg font-bold mb-2">
            Get Rid of Rats - Fast, Safe, and Guaranteed
          </h3>
          <p className="text-white text-xs mb-3">
            Rats can invade your home or business, causing serious health risks and expensive damage. Our expert team uses proven methods to remove rats quickly and prevent them from coming back. We focus on safe, family-friendly techniques that deliver effective results every time. From inspection to exclusion, we handle everything with minimal disruption to you. Enjoy peace of mind knowing your property is protected by guaranteed rat control services.
          </p>
          <button className="bg-white text-green-700 px-3 py-1 rounded text-xs hover:bg-gray-100 transition">
            Contact Now
          </button>
        </div>
        {/* Image */}
        <div className="w-1/2 flex items-center justify-center p-2">
          <img
            src={RodentImg1}
            alt="Rodent"
            className="w-[90%] h-[95%] object-cover rounded border border-white"
          />
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex w-4/5 rounded shadow overflow-hidden" style={{ background: "linear-gradient(to right, #0C520A, #32A849)" }}>
        {/* Image */}
        <div className="w-1/2 flex items-center justify-center p-2">
          <img
            src={RodentImg2}
            alt="Rodent Prevention"
            className="w-[90%] h-[95%] object-cover rounded border border-white"
          />
        </div>
        {/* Text */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-start text-left">
          <h3 className="text-white text-lg font-bold mb-2">
            Why Rat Removal is Necessary
          </h3>
          <p className="text-white text-xs">
            Rats invade homes, restaurants, offices, and warehouses in search of food and shelter. Once inside, they:
            <br />• Chew on electrical wires, causing fire hazards
            <br />• Contaminate food and surfaces with droppings and urine
            <br />• Spread dangerous diseases like leptospirosis, salmonella, and rat-bite fever
            <br />• Damage insulation, walls, and stored goods
            <br />
            Early detection and professional removal help prevent bigger infestations and protect your health and property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RodentSection;
