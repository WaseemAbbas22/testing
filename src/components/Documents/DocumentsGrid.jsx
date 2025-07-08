import download from '/src/assets/Documents/downloadImg.png'

const DocumentsGrid = () => {
  const gridDocs = [
    {
      id: 1,
      name: "Quick Bayt Granules",
      validFrom: "01-01-2025",
      msdsLink: "#",
      corLink: "#",
    },
    {
      id: 2,
      name: "Quick Bayt Granules",
      validFrom: "01-02-2025",
      msdsLink: "#",
      corLink: "#",
    },
    {
      id: 3,
      name: "Quick Bayt Granules",
      validFrom: "01-03-2025",
      msdsLink: "#",
      corLink: "#",
    },
    {
      id: 4,
      name: "Quick Bayt Granules",
      validFrom: "01-04-2025",
      msdsLink: "#",
      corLink: "#",
    },
  ];

  return (
    <div className="w-[90%] md:w-[100%] lg:w-[70%] mx-auto flex flex-wrap md:flex-nowrap justify-center gap-4 mt-10">
      {gridDocs.map((doc) => (
        <div
          key={doc.id}
          className="flex flex-col bg-[#F0F0F0] rounded shadow w-full md:w-[35%] text-center"
        >
          {/* Content Above Buttons */}
          <div className="flex flex-col justify-between px-6 py-5 flex-grow">
            {/* Document Name */}
            <h2 className="text-bold font-bold mb-2">{doc.name}</h2>

            {/* Valid Till */}
            <div>
              <p className="text-sm font-semibold">Valid Till</p>
              <p className="text-xs">({doc.validFrom})</p>
            </div>
          </div>

          {/* Black Bar */}
          

          {/* Buttons - full width with no margin below */}
          <div className="flex w-full rounded bg-[#D1D1D1]">
            <a
              href={doc.msdsLink}
              download
              className="flex items-center justify-center gap-2 text-semibold font-bold text-[#32A849] px-3 py-2 flex-1 hover:bg-gray-800 hover:text-white transition"
            >
              MSDS <img src={download} className='h-5 w-5' />
            </a>

            <div className="w-px bg-[#A2A2A2] h-8 mt-1"></div>

            <a
              href={doc.corLink}
              download
              className="flex items-center justify-center gap-2 text-semibold font-bold text-[#32A849] px-3 py-2 flex-1 hover:bg-gray-800 hover:text-white transition"
            >
              COR <img src={download} className='h-5 w-5' />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentsGrid;
