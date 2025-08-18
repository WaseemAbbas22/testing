// import download from "/src/assets/Documents/downloadImg.png";

// const chemicalDocuments = [
//   {
//     name: "Ajman Approved Chemical List",
//     validity: "March 2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Excelloid CS",
//     validity: "30/12/2024",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Tandem",
//     validity: "27/06/2024",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Pursa 100 DP",
//     validity: "13/07/2024",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Nutricore Pilmax Roach Gel",
//     validity: "18/12/2024",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Delta Super SC",
//     validity: "11/02/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Deltaud Speedy SC",
//     validity: "11/02/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Cimeos Dust Powder",
//     validity: "13/12/2024",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Ratsmore Wax Blocks",
//     validity: "15/05/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Stalker Fly Trap Attractant",
//     validity: "04/01/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Lambdastar Ultra Capsolate",
//     validity: "25/09/2024",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Cynoff® 10 EC",
//     validity: "08/10/2024",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Provector",
//     validity: "25/03/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Delta Park",
//     validity: "02/03/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Sindexa",
//     validity: "15/06/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Sunfire Spectrum",
//     validity: "16/06/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Magnum Cockroach Gel",
//     validity: "30/06/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Porphos",
//     validity: "16/06/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Temprid",
//     validity: "25/06/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Intrax Gel",
//     validity: "03/07/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Intrax Granule",
//     validity: "03/07/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Thialet",
//     validity: "03/07/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Agita WG",
//     validity: "10/07/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Accridite EC 50",
//     validity: "10/07/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Cynoff® Plus EC",
//     validity: "19/07/2025",
//     msds: "#",
//     cor: "#",
//   },
//   {
//     name: "Quick Bait Granules",
//     validity: "19/07/2025",
//     msds: "#",
//     cor: "#",
//   },
// ];

// const Documents = () => {
//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-50 py-10">
//       {chemicalDocuments.map((doc, i) => (
//         <div
//           key={i}
//           className="w-[90%] md:w-[90%] lg:w-[75%] bg-[#32A8491A] border border-[#32A84980] rounded shadow flex flex-row items-center justify-between px-6 py-2 mb-3 h-[9vh]"
//         >
//           {/* Name */}
//           <div className="flex-1">
//             <h2 className="text-xs 2xl:text-2xl 3xl:text-3xl md:text-lg font-bold">{doc.name}</h2>
//           </div>

//           {/* Validity */}
//           <div className="flex flex-row md:flex-1 mr-4 text-gray-800 text-[10px] xl:text-xl 2xl:text-2xl 3xl:text-3xl font-bold">
//             Valid Till:
//             <span className="text-[#444444] font-normal text-[10px] xl:text-base 3xl:text-xl ml-2">
//               ({doc.validity})
//             </span>
//           </div>

//           {/* MSDS */}
//           <div className="flex items-center gap-2 md:mr-20 md:gap-3">
//             {doc.msds && (
//               <a
//                 href={doc.msds}
//                 download
//                 className="text-[#32A849] hover:text-green-900 transition flex items-center gap-1"
//               >
//                 <span className="text-xs xl:text-xl 2xl:text-2xl 3xl:text-3xl   md:font-semibold font-semibold">
//                   MSDS
//                 </span>
//                 <img src={download} alt="" className="h-4 w-4 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 3xl:h-10 3xl:w-10 transition hover:invert" />
//               </a>
//             )}
//           </div>

//           {/* COR */}
//           <div className="flex items-center gap-2 md:gap-3 md:ml-6">
//             {doc.cor && (
//               <a
//                 href={doc.cor}
//                 download
//                 className="text-[#32A849] hover:text-green-900 transition flex items-center gap-1"
//               >
//                 <span className="text-xs xl:text-xl 2xl:text-2xl 3xl:text-3xl  xl md:font-semibold font-semibold">
//                   COR
//                 </span>
//                 <img src={download} alt="" className="h-4 w-4 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 3xl:h-10 3xl:w-10 transition hover:invert" />
//               </a>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Documents;
