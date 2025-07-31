import React, { useState } from 'react';

// You'll need to import your download icon
import download from "/src/assets/Documents/downloadImg.png";

const chemicalDocuments = [
  {
    name: "Ajman Approved Chemicals",
    validity: "17-Jan-2025",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Ecatrol IC3",
    validity: "01-Dec-2026",
    msds: "/DocumentFiles/Ecotrol-D-IC3-MSDS.pdf.pdf",
    cor: "/DocumentFiles/Ecotrol-IC3-COR-2025.pdf",
  },
  {
    name: "Tandem",
    validity: "31-Jan-2026",
    msds: "/DocumentFiles/Tandem-reg-.pdf",
    cor: "/DocumentFiles/Temprid SC COR2028.pdf",
  },
  {
    name: "Penta 250 FP",
    validity: "03-Dec-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Maxforce Prime Roach Gel",
    validity: "10-Dec-2025",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
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
    msds: "public/DocumentFiles/Deltacid-Speedy-Msds.pdf",
    cor: "public/DocumentFiles/Deltacid-Speedy-COR.pdf",
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
    msds: "public/DocumentFiles/Ratimor Wax Blocks MSDS 2024.pdf",
    cor: "public/DocumentFiles/Ratimor Wax Blocks COR 2024.pdf",
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
    msds: "public/DocumentFiles/CYMINA 10 MSDS.pdf",
    cor: "public/DocumentFiles/Cymina 10 COR 12042026.pdf",
  },
  {
    name: "Protevta",
    validity: "Valid Till (---)",
    msds: "public/DocumentFiles/Provecta MSDS.pdf",
    cor: "public/DocumentFiles/Provecta COR.pdf",
  },
  {
    name: "Delta Park",
    validity: "01-Dec-2026",
    msds: "public/DocumentFiles/Delta-Park-MSDS.pdf",
    cor: "public/DocumentFiles/DELTA-PARK-COR.pdf",
  },
  {
    name: "Sindoxa",
    validity: "17-June-2026",
    msds: "public/DocumentFiles/Sindoxa-MSDS.pdf",
    cor: "/DocumentFiles/Sindoxa-COR.pdf",
  },
  {
    name: "Surefire Spectrum",
    validity: "10-June-2026",
    msds: "public/DocumentFiles/Surefire-Spectrum-200SC-MSDS.pdf",
    cor: "public/DocumentFiles/Surefire-Spectrum-200-SC-MOCCE.pdf",
  },
  {
    name: "Magnum Cockroach Gel",
    validity: "01-Dec-2025",
    msds: "public/DocumentFiles/Magnum MSDS.pdf",
    cor: "public/DocumentFiles/Magnum COR2025.pdf",
  },
  {
    name: "Pestphos",
    validity: "07-Apr-2026",
    msds: "public/DocumentFiles/pestphos msds 2019.pdf",
    cor: "public/DocumentFiles/Pestphos COR.pdf",
  },
  {
    name: "Temprid",
    validity: "07-Apr-2026",
    msds: "public/DocumentFiles/Temprid SC MSDS.pdf",
    cor: "public/DocumentFiles/Temprid SC COR2028.pdf",
  },
  {
    name: "Intice Gel",
    validity: "30-Dec-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Intice Granules",
    validity: "30-Dec-2026",
    msds: "/DocumentFiles/",
    cor: "/DocumentFiles/",
  },
  {
    name: "Thifast",
    validity: "01-Feb-2026",
    msds: "public/DocumentFiles/Thifast 10 WG Fly Bait MSDS.pdf",
    cor: "public/DocumentFiles/Thifast 10 WG Fly Bait COR2022.pdf",
  },
  {
    name: "Agita WG",
    validity: "01-June-2026",
    msds: "public/DocumentFiles/Agita-10-WG-MSDS.pdf",
    cor: "public/DocumentFiles/Agita-10-WG-COR-2028.pdf",
  },
  {
    name: "Acetellic Ec 50",
    validity: "12-May-2026",
    msds: "public/DocumentFiles/Actellic50 MSDS.pdf",
    cor: "public/DocumentFiles/Actellic COR 2023.pdf",
  },
  {
    name: "Cymina Plus EC",
    validity: "12-Feb-2027",
    msds: "/DocumentFiles/Cymina Plus MSDS.pdf",
    cor: "public/DocumentFiles/Cymina Plus COR 21022027.pdf",
  },
  {
    name: "Quick Bayt Granules",
    validity: "01-Sep-2026",
    msds: "/DocumentFiles/Quick Bayt GR MSDS.pdf",
    cor: "/DocumentFiles/COR Quick Bayt Granules.pdf",
  }
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
      setDownloadingStates(prev => ({ ...prev, [downloadKey]: true }));
      setDownloadErrors(prev => ({ ...prev, [downloadKey]: null }));

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || `${docName}-${type}.pdf`;
      
      // Force download attribute and add to DOM temporarily
      link.setAttribute('download', filename || `${docName}-${type}.pdf`);
      link.style.display = 'none';
      
      document.body.appendChild(link);
      
      // Trigger download
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        setDownloadingStates(prev => ({ ...prev, [downloadKey]: false }));
      }, 100);
      
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadErrors(prev => ({ 
        ...prev, 
        [downloadKey]: `Download failed: ${error.message}` 
      }));
      
      // Alternative method: open in new tab
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (fallbackError) {
        alert(`Unable to download ${type} for ${docName}. Please try right-click and "Save As".`);
      } finally {
        setDownloadingStates(prev => ({ ...prev, [downloadKey]: false }));
      }
    }
  };

  // Generate filename from document name and type
  const generateFilename = (docName, type) => {
    const cleanName = docName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
    return `${cleanName}-${type}.pdf`;
  };



  return (
    <div className="w-[90%] xl:w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 sm:gap-4 mt-10">
      {chemicalDocuments.map((doc, i) => (
        <div
          key={i}
          className="flex flex-col justify-between bg-[#32A8491A] rounded-lg shadow transition border border-[#32A849] h-full sm:h-[300px] lg:h-[150px] 2xl:h-[200px] 3xl:h-[210px] hover:shadow-lg hover:scale-105"
        >
          {/* Top Content */}
          <div className="flex flex-col justify-between items-center px-6 py-2 flex-grow">
            <h2 className="flex text-black/80 justify-center items-center font-bold text-sm md:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl text-center">
              {doc.name}
            </h2>

            <div className="text-[#444444] text-center">
              <p className="text-xs md:text-sm xl:text-sm 2xl:text-lg 3xl:text-xl font-semibold">Valid Till</p>
              <p className="text-xs md:text-sm xl:text-sm 2xl:text-lg 3xl:text-xl">({doc.validity})</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full rounded-md bg-[#EAEAEA] overflow-hidden border-t border-[#32A849]">
            {/* MSDS */}
            <button
              onClick={() => handleDownload(doc.msds, generateFilename(doc.name, 'MSDS'), doc.name, 'MSDS')}
              disabled={downloadingStates[`${doc.name}-MSDS`] || doc.msds === "#"}
              className="group flex items-center justify-center gap-2 text-sm md:text-base xl:text-lg 2xl:text-xl font-bold text-[#32A849] px-3 py-1 flex-1 transition hover:bg-[#32A849] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloadingStates[`${doc.name}-MSDS`] ? 'Downloading...' : 'MSDS'}
              <img
                src={download}
                alt="download"
                className="h-5 w-5 md:h-6 md:w-6 2xl:h-8 2xl:w-8 transition duration-300 group-hover:invert group-hover:brightness-125"
              />
            </button>

            <div className="w-px bg-[#A2A2A2] h-8 self-center" />

            {/* COR */}
            <button
              onClick={() => handleDownload(doc.cor, generateFilename(doc.name, 'COR'), doc.name, 'COR')}
              disabled={downloadingStates[`${doc.name}-COR`] || doc.cor === "#"}
              className="group flex items-center justify-center gap-2 text-sm md:text-base xl:text-lg 2xl:text-xl font-bold text-[#32A849] px-3 py-2 flex-1 transition hover:bg-[#32A849] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloadingStates[`${doc.name}-COR`] ? 'Downloading...' : 'COR'}
              <img
                src={download}
                alt="download"
                className="h-5 w-5 md:h-6 md:w-6 2xl:h-8 2xl:w-8 transition duration-300 group-hover:invert group-hover:brightness-125"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentGrid;