import download from "/src/assets/Documents/downloadImg.png";

const chemicalDocuments = [
  {
    name: "Ajman Approved Chemical List",
    validity: "17-Jan-2025",
    msds: "#",
    cor: "#",
  },
  {
    name: "Ecatrol IC3",
    validity: "01-Dec-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Tandem",
    validity: "31-Jan-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Penta 250 FP",
    validity: "03-Dec-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Maxforce Prime Roach Gel",
    validity: "10-Dec-2025",
    msds: "#",
    cor: "#",
  },
  {
    name: "Delta Super SC",
    validity: "07-Feb-2025",
    msds: "#",
    cor: "#",
  },
  {
    name: "Deltacid Speedy SC",
    validity: "17-Sep-2025",
    msds: "#",
    cor: "#",
  },
  {
    name: "Cimexa Dust Powder",
    validity: "15-Sep-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Ratimor Wax Blocks",
    validity: "01-Dec-2025",
    msds: "#",
    cor: "#",
  },
  {
    name: "Starbar Fly Trap Attractant",
    validity: "01-Jan-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Lambdastar Ultra Capsulate",
    validity: "01-Mar-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Cymina 10 EC",
    validity: "12-Apr-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Protecta",
    validity: "Valid Till (---)",
    msds: "#",
    cor: "#",
  },
  {
    name: "Delta Park",
    validity: "01-Dec-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Sindoxa",
    validity: "17-June-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Surefire Spectrum",
    validity: "10-June-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Magnum Cockroach Gel",
    validity: "01-Dec-2025",
    msds: "#",
    cor: "#",
  },
  {
    name: "Pestphos",
    validity: "07-Apr-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Temprid",
    validity: "07-Apr-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Intice Gel",
    validity: "30-Dec-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Intice Granules",
    validity: "30-Dec-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Thifast",
    validity: "01-Feb-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Agita WG",
    validity: "01-June-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Acetellic Ec 50",
    validity: "12-May-2026",
    msds: "#",
    cor: "#",
  },
  {
    name: "Cymina Plus EC",
    validity: "12-Feb-2027",
    msds: "#",
    cor: "#",
  },
  {
    name: "Quick Bayt Granules",
    validity: "01-Sep-2026",
    msds: "#",
    cor: "#",
  }
];
const DocumentGrid = () => {
  return (
    <div className="w-[90%] xl:w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 mt-10">
      {chemicalDocuments.map((doc, i) => (
        <div
          key={i}
          className="flex flex-col justify-between bg-[#32A8491A] rounded-lg shadow transition border border-darkgreen h-full"
        >
          {/* Top Content */}
          <div className="flex flex-col justify-between px-6 py-2 flex-grow">
            <h2 className="font-bold text-sm md:text-base xl:text-lg 2xl:text-2xl leading-tight text-center">
              {doc.name}
            </h2>

            <div className="text-[#444444] text-center">
              <p className="text-xs md:text-sm xl:text-sm 2xl:text-lg font-semibold">Valid Till</p>
              <p className="text-xs md:text-sm xl:text-sm 2xl:text-lg">({doc.validity})</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full rounded-md bg-[#EAEAEA] overflow-hidden border-t border-darkgreen">
            {/* MSDS */}
            <a
              href={doc.msds}
              download
              className="group flex items-center justify-center gap-2 text-sm md:text-base xl:text-lg 2xl:text-xl font-bold text-[#32A849] px-3 py-1 flex-1 transition hover:bg-darkgreen hover:text-white"
            >
              MSDS
              <img
                src={download}
                alt="download"
                className="h-5 w-5 md:h-6 md:w-6 2xl:h-8 2xl:w-8 transition duration-300 group-hover:invert group-hover:brightness-125"
              />
            </a>

            <div className="w-px bg-[#A2A2A2] h-8 self-center" />

            {/* COR */}
            <a
              href={doc.cor}
              download
              className="group flex items-center justify-center gap-2 text-sm md:text-base xl:text-lg 2xl:text-xl font-bold text-[#32A849] px-3 py-2 flex-1 transition hover:bg-darkgreen hover:text-white"
            >
              COR
              <img
                src={download}
                alt="download"
                className="h-5 w-5 md:h-6 md:w-6 2xl:h-8 2xl:w-8 transition duration-300 group-hover:invert group-hover:brightness-125"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentGrid;
