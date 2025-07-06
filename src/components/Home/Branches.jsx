import Company1 from "/src/assets/Home/company1.png";
import Company2 from "/src/assets/Home/company2.png";
import Company3 from "/src/assets/Home/company3.png";
import Company4 from "/src/assets/Home/company4.png";
import Company5 from "/src/assets/Home/company5.png";
import Company6 from "/src/assets/Home/company6.png";
import Company7 from "/src/assets/Home/company7.png";

const Branches = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-1 ">
        We Pride Ourselves in Holding
      </h2>

      {/* Subtext */}
      <p className="text-center text-gray-600 text-xs mb-6 max-w-med">
        We are a recognized pest control company across Dubai, Sharjah and Ajman, licensed and approved by the Dubai/<br />Sharjah/ Ajman Municipalities, Foodwatch, NPMA and Ministry of Climate Change & Environment.
      </p>

      {/* Boxes Grid */}
      <div className="flex flex-col items-center gap-[30px]">

        {/* Upper Line with 4 Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[120px] ml-[-40px]">
          <div className="bg-[#F2F2F2] w-[250px] h-[100px] flex items-center justify-center rounded-sm shadow-md border border-gray-200">
            <img src={Company5} alt="Company 1" className="max-h-10 object-contain" />
          </div>
          <div className="bg-[#F2F2F2] w-[250px] h-[100px] flex items-center justify-center rounded-sm shadow-md border border-gray-200">
            <img src={Company4} alt="Company 2" className="max-h-14 object-contain" />
          </div>
          <div className="bg-[#F2F2F2] w-[250px] h-[100px] flex items-center justify-center rounded-sm shadow-md border border-gray-200">
            <img src={Company3} alt="Company 3" className="max-h-7 object-contain" />
          </div>
          <div className="bg-[#F2F2F2] w-[250px] h-[100px] flex items-center justify-center rounded-sm shadow-md border border-gray-200">
            <img src={Company2} alt="Company 4" className="max-h-[80px] object-contain" />
          </div>
        </div>

        {/* Lower Line with 3 Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[50px]">
          <div className="bg-[#F2F2F2] w-[250px] h-[100px] flex items-center justify-center rounded-sm shadow-md border border-gray-200">
            <img src={Company1} alt="Company 5" className="max-h-14 object-contain" />
          </div>
          <div className="bg-[#F2F2F2] w-[250px] h-[100px] flex items-center justify-center rounded-sm shadow-md border border-gray-200">
            <img src={Company6} alt="Company 6" className="max-h-[110px] object-contain" />
          </div>
          <div className="bg-[#F2F2F2] w-[250px] h-[100px] flex items-center justify-center rounded-sm shadow-md border border-gray-200">
            <img src={Company7} alt="Company 7" className="max-h-12 object-contain" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Branches;
