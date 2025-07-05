import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import DOCHeroImg from '/src/assets/About/step1.png'; // Adjust the path as necessary
import Documents from "../components/Documents/Documents" // Assuming you have a Documents component
import ContactReq from "../components/Home/ContactReq" // Assuming you have a ContactReq component
import Footer from "../components/Footer" // Assuming you have a Footer component
import DocumentsGrid from "../components/Documents/DocumentsGrid" // Assuming you have a DocumentsGrid component


const DocumentsPage = () => {
  return (
    <>
    <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Documents"
          breadcrumb="Home > Documents"
          bgImg={DOCHeroImg}
        />
        <Documents />
        <DocumentsGrid />   
        <br />
        <br />
        <ContactReq />
        
        <Footer />
    </div>
    </>   
  )
}

export default DocumentsPage;