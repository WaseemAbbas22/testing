// src/components/Pest/PestGrid.jsx

import PestCard from "../Pests/PestCard";

const PestGrid = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-4 md:px-16 lg:px-32 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Pest Services</h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2 xl:gap-2 2xl:gap-8 justify-items-center">
        {/* First 12 cards */}
        <PestCard pestName="ANTS" />
        <PestCard pestName="COCKROACHES" />
        <PestCard pestName="RED BUGS" />
        <PestCard pestName="RODENTS" />
        <PestCard pestName="FLIES" />
        <PestCard pestName="MOSQUITOES" />
        <PestCard pestName="SPIDERS" />
        <PestCard pestName="TERMITES" />
        <PestCard pestName="VENOMOUS" />
        <PestCard pestName="BIRDS" />
        <PestCard pestName="LIZARDS" />
        <PestCard pestName="TICKS" />

        {/* Last row with 2 cards centered */}
        <div className="hidden md:block lg:hidden"></div> {/* for md screens: empty to center */}
        <PestCard pestName="WASPS" />
        <PestCard pestName="MOSQUITOES" />
        <div className="hidden md:block lg:hidden"></div> {/* for md screens: empty to center */}
      </div>
    </div>
  );
};

export default PestGrid;
