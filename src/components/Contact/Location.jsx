// const Location = () => {
//   return (
//     <div className="w-full bg-gray-100 py-8">
//       <div className="w-[80%] mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
//           Location
//         </h2>

//         {/* Grid of Maps */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* Head Office */}
//           <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 border border-gray-300">
//             <p className="text-left font-semibold mb-4 text-xl text-gray-900">
//               Head Office
//             </p>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28858.442264115278!2d55.36094601083983!3d25.293945299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4a80ef68a9%3A0x2631b9ac5585999b!2sAccurate%20Pest%20Control%20Services%20LLC!5e0!3m2!1sen!2s!4v1754997012627!5m2!1sen!2s"
//               className="rounded-lg border-4 border-green-500 w-full h-[300px] shadow-lg"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Sharjah Office */}
//           <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 border border-gray-300">
//             <p className="text-left font-semibold mb-4 text-xl text-gray-900">
//               Sharjah Office
//             </p>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=YOUR-SHARJAH-MAP-LINK-HERE"
//               className="rounded-lg border-4 border-green-500 w-full h-[300px] shadow-lg"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Ajman Office */}
//           <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 border border-gray-300">
//             <p className="text-left font-semibold mb-4 text-xl text-gray-900">
//               Ajman Office
//             </p>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=YOUR-AJMAN-MAP-LINK-HERE"
//               className="rounded-lg border-4 border-green-500 w-full h-[300px] shadow-lg"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Location;


//import React from "react";

const Location = () => {
  return (
    <section className="w-[80%] mx-auto p-6 bg-gray-100">
      {/* Heading */}
      <h2 className="xl:text-4xl 3xl:text-6xl font-bold text-center mb-6">Location</h2>

      {/* 3 Address Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
        <div className="p-4  bg-white shadow rounded">
          <h3 className="font-semibold text-lg xl:text-xl 3xl:text-2xl text-darkgreen">Head Office</h3>
          <p className="max-w-[80%] mx-auto text-base 3xl:text-xl ">Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai – UAE</p>
          
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold text-lg xl:text-xl 3xl:text-2xl text-darkgreen">Sharjah Branch</h3>
          <p className="max-w-[80%] mx-auto text-base 3xl:text-xl  "> Building No. 3702, Shop No 3 & 4, Muweilah Commercial area, Sharjah – UAE</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold text-lg xl:text-xl 3xl:text-2xl text-darkgreen">Ajman Branch</h3>
          <p className="max-w-[80%] mx-auto text-base 3xl:text-xl "> Shop No. 1, Plot No. 3074, Eastern Sector, Al Zahya 1, Ajman - UAE</p>
        </div>
      </div>

      {/* Single Map */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28858.442264115278!2d55.36094601083983!3d25.293945299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4a80ef68a9%3A0x2631b9ac5585999b!2sAccurate%20Pest%20Control%20Services%20LLC!5e0!3m2!1sen!2s!4v1754999108242!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
