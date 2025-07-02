import SerImg from "../../assets/Services/ServicesHeroImg.png";

const ServicesSection = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between px-10 py-10 h-[60vh]">
      {/* Left Side */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Services</h1>
        <p className="text-med text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam feugiat, nunc at varius laoreet, nulla sapien laoreet metus, 
          vitae tincidunt orci nulla eu risus. Suspendisse potenti. 
          Integer tincidunt lacus vel massa tristique, in ultrices nulla porta. 
          Etiam vel sem a erat fermentum gravida. Morbi ut turpis at ipsum iaculis accumsan. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          In nec fringilla massa. Donec non porta quam. Vivamus ac libero id nisi malesuada lacinia.
        </p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Call For Services
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 h-full flex items-center justify-center">
        <img
          src={SerImg}
          alt="Service"
          className="w-auto h-[120%] object-cover rounded shadow-md m-4"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
