import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import DOCHeroImg from '@/assets/Documents/HeroImg.png'; // Adjust the path as necessary
//import Documents from "../components/Documents/Documents" // Assuming you have a Documents component
import ContactReq from "../components/Home/ContactReq" // Assuming you have a ContactReq component
import Footer from "../components/Footer" // Assuming you have a Footer component
import DocumentsGrid from "../components/Documents/DocumentsGrid" // Assuming you have a DocumentsGrid component


const DocumentsPage = () => {
  return (
    <>
    <div className="relative">
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