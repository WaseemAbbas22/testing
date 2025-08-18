import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import DOCHeroImg from '@/assets/Documents/HeroImg.webp'; // Adjust the path as necessary
//import Documents from "../components/Documents/Documents" // Assuming you have a Documents component
import ContactReq from "../components/Home/ContactReq" // Assuming you have a ContactReq component
import Footer from "../components/Footer" // Assuming you have a Footer component
import DocumentsGrid from "../components/Documents/DocumentsGrid" // Assuming you have a DocumentsGrid component
import SEO from "../components/SEO.jsx"


const DocumentsPage = () => {
  const documentsData = {
    "@context": "http://schema.org/",
    "@type": "LocalBusiness",
    name: "Accurate Pest Control Services LLC Dubai",
    image: "https://accuratepestcontrol.ae/",
    priceRange: "150 To 300 AED",
    telephone: "+971 52 449 6173",
    url: "https://accuratepestcontrol.ae/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai - UAE",
      addressLocality: "Dubai",
      addressRegion: "",
      addressCountry: "United Arab Emirates",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday", "Saturday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/accuratepestcontrolservices/",
      "https://www.instagram.com/accuratepestcontrolservices",
      "https://www.linkedin.com/company/accurate-pest-control-services-llc",
      "https://twitter.com/AccuratePestC",
      "https://www.pinterest.com/accuratepestcontrolservice/",
      "https://youtube.com/@AccuratePestControlServices",
    ],
  };

  return (
    <>
    <div className="relative">
        <SEO
        title="Dubai Municipality Pest Control | Trusted Services"
        description="Get certified pest control in Dubai with municipality-approved experts. Fast response, safe chemicals & guaranteed satisfaction. Call us today!"
        author="Muhammad Waqas Chughtai"
        copyright="Accurate Pest Control Services LLC"
        robots="index, follow"
        structuredData={documentsData}
      />
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Documents"
          breadcrumb="Home > Documents"
          bgImg={DOCHeroImg}
        />
       {/* // <Documents /> */}
        <DocumentsGrid />   
        <br />
        <br />
        <ContactReq />
        
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed
          bottom-6
          left-6
          z-50
          bg-white
          text-darkgreen
          text-2xl
          font-extrabold
          px-6
          py-3
          rounded-full
          shadow
          hover:bg-gray-100
          transition
        "
      >
        ↑
      </button>

      {/* Footer */}
      <Footer />
    </div>
    </>   
  )
}

export default DocumentsPage;