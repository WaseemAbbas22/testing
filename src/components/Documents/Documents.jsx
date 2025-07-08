
import download from "/src/assets/Documents/downloadImg.png"

const Documents = () => {
  // Dummy data for 26 documents
  const documents = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    name: `Document ${i + 1}`,
    validFrom: "01-01-2025",
    msdsLink: "#",
    corLink: "#",
  }));

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-50 py-10">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="w-[90%] md:w-[90%] lg:w-[75%] bg-[#32A8491A] border border-green-600 rounded shadow flex flex-col md:flex-row items-center justify-between px-6 py-3 mb-3 h-[9vh]"
        >
          {/* Document Name */}
          <div className="flex-1 mb-2 md:mb-0">
            <h2 className="text-base md:text-lg font-semibold ">
              {doc.name}
            </h2>
          </div>

          {/* Valid Till */}
          <div className="flex-1 mb-2 md:mb-0 text-gray-800 text-sm md:text-base font-bold">
            Valid Till:{" "}
            <span className="text-gray-600 font-normal text-xs">
              ({doc.validFrom})
            </span>
          </div>

          {/* MSDS */}
          <div className="flex items-center gap-2 mr-20 md:gap-3">
            <a
              href={doc.msdsLink}
              download
              className="text-[#32A849] hover:text-green-900 transition flex items-center gap-1"
            >
              <span className="text-semibold md:text-semibold font-semibold">MSDS</span>
              <img src={download} alt="" className="h-5 w-5" />
            </a>
          </div>

          {/* COR */}
          <div className="flex items-center gap-2 md:gap-3 mt-1 md:mt-0 md:ml-6">
            <a
              href={doc.corLink}
              download
              className="text-[#32A849] hover:text-green-900 transition flex items-center"
            >
              <span className="text-semibold md:text-semibold font-semibold">COR</span>
              <img src={download} alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Documents;
