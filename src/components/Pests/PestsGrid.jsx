// src/components/Pest/PestGrid.jsx

import PestCard from "../Pests/PestCard";

const PestGrid = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-4 md:px-16 lg:px-32 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Pest Services</h2>

      <div className=" w-[90%]  grid grid-cols-1 sm:grid-cols-4 gap-4 mx-auto">        {/* First 12 cards */}
        <div><PestCard pestName="ANTS" /> </div>
        <div><PestCard pestName="COCKROACHES" /></div>
        <div><PestCard pestName="BED BUGS" /></div>
        <div><PestCard pestName="RODENTS" /></div>
        <div><PestCard pestName="FLIES" /></div>
        <div><PestCard pestName="MOSQUITOES" /></div>
        <div><PestCard pestName="SPIDERS" /></div>
        <div><PestCard pestName="TERMITES" /></div>
        <div><PestCard pestName="VENOMOUS" /></div>
        <div><PestCard pestName="BIRDS" /></div>
        <div><PestCard pestName="LIZARDS" /></div>
        <div><PestCard pestName="TICKS" /></div>

        {/* Last row with 2 cards centered */}
        <div className="hidden md:block "></div> {/* for md screens: empty to center */}
        <div><PestCard pestName="WASPS" /></div>
        <div><PestCard pestName="MOSQUITOES" /></div>
        <div className="hidden md:block "></div> {/* for md screens: empty to center */}
      </div>
    </div>
  );
};

export default PestGrid;
