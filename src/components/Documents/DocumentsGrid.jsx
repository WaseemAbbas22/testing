import { FaDownload } from "react-icons/fa";

const DocumentsGrid = () => {
  const gridDocs = [
    {
      id: 1,
      name: "Doc 1",
      validFrom: "01-01-2025",
      validTo: "31-12-2025",
      msdsLink: "#",
      corLink: "#",
    },
    {
      id: 2,
      name: "Doc 2",
      validFrom: "01-02-2025",
      validTo: "30-12-2025",
      msdsLink: "#",
      corLink: "#",
    },
    {
      id: 3,
      name: "Doc 3",
      validFrom: "01-03-2025",
      validTo: "31-12-2025",
      msdsLink: "#",
      corLink: "#",
    },
    {
      id: 4,
      name: "Doc 4",
      validFrom: "01-04-2025",
      validTo: "31-12-2025",
      msdsLink: "#",
      corLink: "#",
    },
  ];

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-wrap md:flex-nowrap justify-center gap-6 mt-10">
      {gridDocs.map((doc) => (
        <div
          key={doc.id}
          className="flex flex-col justify-between bg-gray-200 border border-green-600 rounded shadow px-6 py-5 w-full md:w-[23%] h-48 text-center"
        >
          {/* Document Name */}
          <h2 className="text-green-800 text-base font-bold">{doc.name}</h2>

          {/* Valid Till */}
          <div>
            <p className="text-green-700 text-sm font-semibold">Valid Till</p>
            <p className="text-green-600 text-xs">
              ({doc.validFrom} - {doc.validTo})
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center border-t border-gray-400 pt-3 gap-4">
            <a
              href={doc.msdsLink}
              download
              className="flex items-center gap-1 text-sm text-green-200 bg-gray-700 px-3 py-1 rounded hover:bg-gray-800 transition"
            >
              MSDS <FaDownload />
            </a>
            <div className="border-l border-green-600 h-6"></div>
            <a
              href={doc.corLink}
              download
              className="flex items-center gap-1 text-sm text-green-200 bg-gray-700 px-3 py-1 rounded hover:bg-gray-800 transition"
            >
              COR <FaDownload />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentsGrid;
