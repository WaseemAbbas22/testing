import PestCard from "../Pests/PestCard";

const PestGrid = () => {
  return (
    <div className="w-full bg-bggray md:py-16 py-6 px-4 md:px-16 lg:px-32 2xl:px-72 text-center ">
      <h2 className="text-black/70  text-2xl lg:text-5xl md:text-3xl font-bold md:mb-2 2xl:text-7xl 2xl:mt-8">Our Services</h2>
      <p className="text-black/60 lg:text-sm sm:text-sm mb-6 lg:max-w-md 2xl:max-w-3xl mx-auto 2xl:text-2xl 2xl:mb-8">
        Protect your space with our trusted pest control services - fast, effective and approved by Dubai Municipality standards.
      </p>

      <div className=" w-[90%] 2xl:w-[86%] xl:w-[90%] lg:w-[95%] 3xl:w-[100%] 4xl:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 xl:gap-4 2xl:gap-6 3xl:gap-4 justify-items-center justify-center">
        <PestCard pestName="ANTS" />
        <PestCard pestName="COCKROACHES" />
        <PestCard pestName="RED BUGS" />
        <PestCard pestName="RODENTS" />

        <div className="hidden lg:block">
          <PestCard pestName="FLIES" />
        </div>
        <div className="hidden lg:block">
          <PestCard pestName="MOSQUITOES" />
        </div>
        <div className="hidden lg:block">
          <PestCard pestName="SPIDERS" />
        </div>
        <div className="hidden lg:block">
          <PestCard pestName="TERMITES" />
        </div>
      </div>
      <button className="bg-green-600  justify-center items-center text-white text-sm 2xl:text-xl 2xl:mt-12 lg:mt-6 font-semibold px-4 py-2 md:px-6 md:py-2 rounded shadow hover:bg-green-700 transition mt-4">
        View More
      </button>
    </div>
  );
};

export default PestGrid;

{
  /*

  const PestGrid = () => {
    return (
      <div className="w-full bg-gray-50 py-10 px-4 md:px-16 lg:px-32 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Pest Services</h2>
  
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:gap-2 2xl:gap-8 justify-items-center">
         
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
  
  
          <div className="hidden md:block lg:hidden"></div> 
          <PestCard pestName="WASPS" />
          <PestCard pestName="MOSQUITOES" />
          <div className="hidden md:block lg:hidden"></div> 
        </div>
      </div>
    );
  };
  
  export default PestGrid;
   <p className="text-gray-600 text-xs sm:text-sm mb-6 max-w-2xl mx-auto">
        We deliver safe, effective pest control and sanitization solutions for homes and businesses. Protect your property and health with our certified, hassle-free services.
      </p>

    
      <button className="bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded shadow hover:bg-green-700 transition">
        View More
      </button>  


*/
}
