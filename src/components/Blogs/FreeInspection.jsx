import heroImg from "../../assets/Blogs/FreeIns.png";

const FreeInspection = () => {
  return (
    <div
      className="bg-cover bg-center rounded-lg shadow text-white mt-5 "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="p-4 space-y-4 bg-black bg-opacity-70 rounded-lg">

        <div className="bg-opacity-80 px-2 py-2 rounded-t">
          <h3 className="text-lg font-semibold">Get a Free Inspection</h3>
        </div>
        <select className="border px-3 py-2 rounded w-full text-xs text-gray-400 h-8">
          <option>Select Pest Concern</option>
          <option>Ants</option>
          <option>Cockroaches</option>
          <option>Termites</option>
        </select>
        <input type="text" placeholder="Name" className="border text-xs px-3 py-2 rounded w-full text-black h-8" />
        <input type="text" placeholder="Number" className="border px-3 text-xs py-2 rounded w-full text-black h-8" />
        <input type="email" placeholder="Email" className="border px-3 text-xs py-2 rounded w-full text-black h-8" />
        
        <button className="bg-[#32A849] text-white px-4 py-2 rounded w-full">Send</button>
      </div>
    </div>
  );
};

export default FreeInspection;
