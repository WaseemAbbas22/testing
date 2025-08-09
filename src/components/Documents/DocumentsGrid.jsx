import React, { useState } from "react";

// You'll need to import your download icon
import download from "@/assets/Documents/downloadImg.png";

const chemicalDocuments = [
  {
    name: "Ajman Approved Chemicals List",
    validity: "17-Jan-2025",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Ecatrol IC3",
    validity: "01-Dec-2026",
    msds: "public/DocumentFiles/Ecotrol-D-IC3-MSDS.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Ecotrol-D-IC3-MSDS.pdf"
    cor: "public/DocumentFiles/Ecotrol-IC3-COR.pdf",    //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Ecotrol-IC3-COR.pdf"
  },
  {
    name: "Tandem",
    validity: "31-Jan-2026",
    msds: "public/DocumentFiles/Tandem-MSDS.pdf",   //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Tandem-MSDS.pdf"
    cor: "public/DocumentFiles/Tandem-COR.pdf",   //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Tandem-COR.pdf"
  },
  {
    name: "Penta 250 FP",
    validity: "03-Dec-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Rat Kill Blox",
    validity: "10-Dec-2025",
    msds: "public/DocumentFiles/Ratkill-Blox-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\RATKILL-BLOX-COR.pdf"
    cor: "public/DocumentFiles/RATKILL-BLOX-COR.pdf",   //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Ratkill-Blox-MSDS.pdf"
  },
  {
    name: "Delta Super SC",
    validity: "07-Feb-2025",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Deltacid Speedy SC",
    validity: "17-Sep-2025",
    msds: "public/DocumentFiles/Deltacid-Speedy-Msds.pd",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Deltacid-Speedy-Msds.pdf"
    cor: "public/DocumentFiles/Deltacid-Speedy-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Deltacid-Speedy-COR.pdf"
  },
  {
    name: "Cimexa Dust Powder",
    validity: "15-Sep-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Ratimor Wax Blocks",
    validity: "01-Dec-2025",
    msds: "public/DocumentFiles/Ratimor-Wax-Blocks-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Ratimor-Wax-Blocks-MSDS.pdf"
    cor: "public/DocumentFiles/Ratimor-Wax-Blocks-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Ratimor-Wax-Blocks-COR-2025.pdf"
   }, 
  {
    name: "Starbar Fly Trap Attractant",
    validity: "01-Jan-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Lambdastar Ultra Capsulate",
    validity: "01-Mar-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Cymina 10 EC",
    validity: "12-Apr-2026",
    msds: "public/DocumentFiles/CYMINA-10-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\CYMINA-10-MSDS.pdf"
    cor: "public/DocumentFiles/Cymina-10-COR.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Cymina-10-COR.pdf"
  },
  {
    name: "Provecta",
    validity: "Valid Till (---)",
    msds: "public/DocumentFiles/Provecta-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Provecta-MSDS.pdf"
    cor: "public/DocumentFiles/Provecta-COR.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Provecta-COR.pdf"
  },
  {
    name: "Delta Park",
    validity: "01-Dec-2026",
    msds: "public/DocumentFiles/Delta-Park-MSDS.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Delta-Park-MSDS.pdf"
    cor: "public/DocumentFiles/DELTA-PARK-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\DELTA-PARK-COR.pdf"
  },
  {
    name: "Sindoxa",
    validity: "17-June-2026",
    msds: "public/DocumentFiles/Sindoxa-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Sindoxa-MSDS.pdf"
    cor: "public/DocumentFiles/Sindoxa-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Sindoxa-COR.pdf"
  },
  {
    name: "Surefire Spectrum",
    validity: "10-June-2026",
    msds: "public/DocumentFiles/Surefire-Spectrum-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Surefire-Spectrum-MSDS.pdf"
    cor: "public/DocumentFiles/Surefire-Spectrum-COR.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Surefire-Spectrum-COR.pdf"
  },
  {
    name: "Magnum Cockroach Gel",
    validity: "01-Dec-2025",
    msds: "public/DocumentFiles/Magnum-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Magnum-MSDS.pdf"
    cor: "public/DocumentFiles/Magnum-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Magnum-COR.pdf"
  },
  {
    name: "Pestphos",
    validity: "07-Apr-2026",
    msds: "public/DocumentFiles/Pestphos-MSD-2019.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Pestphos-MSD-2019.pdf"
    cor: "public/DocumentFiles/Pestphos-COR.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Pestphos-COR.pdf"
  },
  {
    name: "Temprid",
    validity: "07-Apr-2026", 
    msds: "public/DocumentFiles/Temprid-SC-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Temprid-SC-MSDS.pdf"
    cor: "public/DocumentFiles/Temprid-SC-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Temprid-SC-COR.pdf"
  },
  {
    name: "Intice 10 Premium Bait",
    validity: "30-Dec-2026",
    msds: "public/DocumentFiles/InTice-10-Perimeter-Bait-SDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\InTice-10-Perimeter-Bait-SDS.pdf"
    cor: "public/DocumentFiles/Intice-10-Perimeter-Bait-COR.pdf",          //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Intice-10-Perimeter-Bait-COR.pdf"
  },
  {
    name: "Intice Granules",
    validity: "30-Dec-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },

  {
    name: "Thifast Granules Fly Bait",
    validity: "01-Feb-2026",
    msds: "public/DocumentFiles/Thifast-Granules-Fly-Bait-MSDS.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Thifast-Granules-Fly-Bait-MSDS.pdf"
    cor: "public/DocumentFiles/Thifast-Granules-Fly-Bait-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Thifast-Granules-Fly-Bait-COR.pdf"
  },

  {
    name: "Thifast 10 WG Fly Bait",
    validity: "01-Feb-2026",
    msds: "public/DocumentFiles/Thifast-10-WG-Fly-Bait-MSDS.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Thifast-10-WG-Fly-Bait-MSDS.pdf"
    cor: "public/DocumentFiles/Thifast-10-WG-Fly-Bait-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Thifast-10-WG-Fly-Bait-COR.pdf"
  },
  {
    name: "Agita WG",
    validity: "01-June-2026",
    msds: "public/DocumentFiles/Agita-10-WG-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Agita-10-WG-MSDS.pdf"
    cor: "public/DocumentFiles/Agita-10-WG-COR.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Agita-10-WG-COR.pdf"
  },
  {
    name: "Acetellic Ec 50",
    validity: "12-May-2026",
    msds: "public/DocumentFiles/Actellic50-MSDS.pdf", //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Actellic50-MSDS.pdf"
    cor: "public/DocumentFiles/Actellic-COR .pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Actellic-COR .pdf"
  },
  {
    name: "Cymina Plus EC",
    validity: "12-Feb-2027",
    msds: "public/DocumentFiles/Cymina-Plus-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Cymina-Plus-MSDS.pdf"
    cor: "public/DocumentFiles/Cymina-Plus-COR.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Cymina-Plus-COR.pdf"
  },
  {
    name: "Quick Bayt Granules",
    validity: "01-Sep-2026",
    msds: "public/DocumentFiles/Quick-Bayt-GR-MSDS.pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Quick-Bayt-GR-MSDS.pdf"
    cor: "public/DocumentFiles/Quick-Bayt-Granules-COR .pdf",  //"C:\Users\Waseem Abbas\Downloads\testing-main\public\DocumentFiles\Quick-Bayt-Granules-COR .pdf"
  },
];

const DocumentGrid = () => {
  const [downloadingStates, setDownloadingStates] = useState({});
  const [downloadErrors, setDownloadErrors] = useState({});

  // Fixed download function - simplified and more reliable
  const handleDownload = (url, filename, docName, type) => {
    if (url === "#" || !url) {
      alert(`${type} document not available for ${docName}`);
      return;
    }

    const downloadKey = `${docName}-${type}`;

    try {
      setDownloadingStates((prev) => ({ ...prev, [downloadKey]: true }));
      setDownloadErrors((prev) => ({ ...prev, [downloadKey]: null }));

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = url;
      link.download = filename || `${docName}-${type}.pdf`;

      // Force download attribute and add to DOM temporarily
      link.setAttribute("download", filename || `${docName}-${type}.pdf`);
      link.style.display = "none";

      document.body.appendChild(link);

      // Trigger download
      link.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        setDownloadingStates((prev) => ({ ...prev, [downloadKey]: false }));
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      setDownloadErrors((prev) => ({
        ...prev,
        [downloadKey]: `Download failed: ${error.message}`,
      }));

      // Alternative method: open in new tab
      try {
        window.open(url, "_blank", "noopener,noreferrer");
      } catch (fallbackError) {
        alert(
          `Unable to download ${type} for ${docName}. Please try right-click and "Save As".`
        );
      } finally {
        setDownloadingStates((prev) => ({ ...prev, [downloadKey]: false }));
      }
    }
  };

  // Generate filename from document name and type
  const generateFilename = (docName, type) => {
    const cleanName = docName
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-");
    return `${cleanName}-${type}.pdf`;
  };

  return (
    <div className="w-[80%] xl:w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-6 mt-20">
      {chemicalDocuments.map((doc, i) => {
        const isSecondLast = i === chemicalDocuments.length - 2;
        const isLast = i === chemicalDocuments.length - 1;
        // Only apply lastRowClass for lg screens and above
        const lastRowClass =
          chemicalDocuments.length % 4 === 2
            ? isSecondLast
              ? "lg:col-start-2"
              : isLast
              ? "lg:col-start-3"
              : ""
            : chemicalDocuments.length % 4 === 1 && isLast
            ? "lg:col-start-2 lg:col-span-2"
            : "";

        return (
          <div
            key={i}
            className={`group flex flex-col justify-between bg-[#32A8491A] rounded-lg shadow transition border border-[#32A849] h-[180px] lg:h-[150px] 2xl:h-[200px] 3xl:h-[210px] hover:shadow-lg hover:scale-105 hover:bg-darkgreen duration-500 ${lastRowClass}`}
          >
            {/* Top Content */}
            <div className="flex flex-col justify-center items-center px-4 py-2 sm:px-6 sm:py-2 flex-grow">
              <h2 className="text-black/80 font-bold text-lg text-center group-hover:text-white transition-colors duration-300 sm:text-sm md:text-base xl:text-lg 2xl:text-2xl 3xl:text-[28px]">
                {doc.name}
              </h2>

              <div className="text-[#444444] text-center mt-1 sm:mt-0">
                <p className="text-sm font-semibold group-hover:text-white transition-colors duration-300 sm:text-sm xl:text-sm 2xl:text-lg 3xl:text-xl">
                  Valid Till
                </p>
                <p className="text-sm group-hover:text-white transition-colors duration-300 sm:text-sm xl:text-sm 2xl:text-lg 3xl:text-xl">
                  ({doc.validity})
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row w-full rounded-md bg-[#EAEAEA] overflow-hidden border-t border-[#32A849]">
              {/* MSDS */}
              <button
                onClick={() =>
                  handleDownload(
                    doc.msds,
                    generateFilename(doc.name, "MSDS"),
                    doc.name,
                    "MSDS"
                  )
                }
                disabled={
                  downloadingStates[`${doc.name}-MSDS`] || doc.msds === "#"
                }
                className="group flex items-center justify-center border-b md:border-b-0 md:border-t-0  border-t border-darkgreen gap-2 text-sm font-bold text-[#32A849] px-3 py-2 flex-1 transition hover:bg-[#32A849] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed sm:text-base xl:text-lg 2xl:text-xl"
              >
                {downloadingStates[`${doc.name}-MSDS`]
                  ? "Downloading..."
                  : "MSDS"}
                <img
                  src={download}
                  alt="download"
                  className="h-5 w-5 transition duration-300 hover:invert group-hover:brightness-125 md:h-6 md:w-6 2xl:h-8 2xl:w-8"
                />
              </button>

              {/* Divider for sm and up only */}
              <div className="hidden sm:block w-px bg-[#A2A2A2] h-8 self-center" />

              {/* COR */}
              <button
                onClick={() =>
                  handleDownload(
                    doc.cor,
                    generateFilename(doc.name, "COR"),
                    doc.name,
                    "COR"
                  )
                }
                disabled={
                  downloadingStates[`${doc.name}-COR`] || doc.cor === "#"
                }
                className="group flex items-center justify-center gap-2 text-sm font-bold text-[#32A849] px-3 py-2 flex-1 transition hover:bg-[#32A849] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed sm:text-base xl:text-lg 2xl:text-xl"
              >
                {downloadingStates[`${doc.name}-COR`]
                  ? "Downloading..."
                  : "COR"}
                <img
                  src={download}
                  alt="download"
                  className="h-5 w-5 transition duration-300 hover:invert group-hover:brightness-125 md:h-6 md:w-6 2xl:h-8 2xl:w-8"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DocumentGrid;