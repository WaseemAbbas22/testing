import heroImg from "../../assets/Blogs/FreeIns.png";

const FreeInspection = () => {
  return (
    <div
      className="bg-cover bg-center rounded shadow text-white w-full md:w-[350px] lg:w-[400px] mx-auto"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="bg-green-600 bg-opacity-80 px-2 py-2 rounded-t">
        <h3 className="text-lg font-semibold">Get a Free Inspection</h3>
      </div>
      <div className="p-4 space-y-4 bg-black bg-opacity-50 rounded-b">
        <input type="text" placeholder="Name" className="border px-3 py-2 rounded w-full text-black" />
        <input type="email" placeholder="Email" className="border px-3 py-2 rounded w-full text-black" />
        <input type="text" placeholder="Number" className="border px-3 py-2 rounded w-full text-black" />
        <select className="border px-3 py-2 rounded w-full text-black">
          <option>Select Pest Concern</option>
          <option>Ants</option>
          <option>Cockroaches</option>
          <option>Termites</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Send</button>
      </div>
    </div>
  );
};

export default FreeInspection;
