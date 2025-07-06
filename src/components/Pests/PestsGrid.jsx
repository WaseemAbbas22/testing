// src/components/Pest/PestGrid.jsx

import PestCard from "../Pests/PestCard";

const PestGrid = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-4 md:px-10 lg:px-20 text-center">


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-2 gap-x-0 justify-items-center">

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
        

        {/* Last row with 2 cards centered in columns 2 and 3 */}
       <div className="hidden lg:block"></div>  {/* Empty column 4 */}
        <PestCard pestName="WASPS" />
                {/* Column 2 */}
        <PestCard pestName="MOSQUITOES" />        {/* Column 3 */}
        <div className="hidden lg:block"></div>  {/* Empty column 4 */}
        <div className="hidden lg:block"></div>  {/* Empty column 1 */}
        
      </div>


    </div>
  );
};

export default PestGrid;
