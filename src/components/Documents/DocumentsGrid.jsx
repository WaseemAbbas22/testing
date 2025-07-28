import download from "/src/assets/Documents/downloadImg.png";

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
    <div className="w-[90%] md:w-[100%] lg:w-[70%] xl:w-[75%] mx-auto flex flex-wrap md:flex-nowrap justify-center gap-4 mt-10">
      {gridDocs.map((doc) => (
        <div
          key={doc.id}
          className="flex flex-col bg-[#F0F0F0] rounded shadow w-full md:w-[35%] text-center"
        >
          {/* Content Above Buttons */}
          <div className="flex flex-col justify-between px-6 py-5 flex-grow">
            {/* Document Name */}
            <h2 className="text-bold 2xl:text-2xl 3xl:text-2xl 4xl:text-4xl font-bold mb-2 2xl:mb-6 3xl:mb-8 4xl:mb-10 ">
              {doc.name}
            </h2>

            {/* Valid Till */}
            <div className="text-[#444444]">
              <p className="text-sm 2xl:text-xl 3xl:text-xl 4xl:text-3xl font-semibold">
                Valid Till
              </p>
              <p className="text-xs  2xl:text-base 3xl:text-xl 4xl:text-2xl">({doc.validFrom})</p>
            </div>
          </div>

          {/* Black Bar */}

          <div className="flex w-full rounded-lg bg-[#D1D1D1] overflow-hidden">
            {/* MSDS Button */}
            <a
              href={doc.msdsLink}
              download
              className="group flex items-center justify-center gap-2 text-xl xl:text-xl 2xl:text-2xl 4xl:text-3xl font-bold text-[#32A849] px-3 py-2 flex-1 transition hover:bg-darkgreen hover:text-white"
            >
              MSDS
              <img
                src={download}
                className="h-6 w-6 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 4xl:h-10 4xl:w-10 transition duration-300 group-hover:invert group-hover:brightness-125"
              />
            </a>

            {/* Divider */}
            <div className="w-px bg-[#A2A2A2] h-8 self-center"></div>

            {/* COR Button */}
            <a
              href={doc.corLink}
              download
              className="group flex items-center justify-center gap-2 rounded-lg text-semibold text-xl xl:text-xl 2xl:text-2xl 4xl:text-3xl font-bold text-[#32A849] px-3 py-3 flex-1 transition hover:bg-darkgreen hover:text-white"
            >
              COR
              <img
                src={download}
                className=" h-6 w-6 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 4xl:h-10 4xl:w-10 transition duration-300 group-hover:invert group-hover:brightness-125"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentsGrid;
