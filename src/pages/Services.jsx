import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import ServicesHero from "../components/Services/ServicesHero"
import ServicesSection from "../components/Services/ServicesSection"
import Process from "../components/Home/Process"
import ContactRequest from "../components/Home/ContactReq"
import ServicesTabs from "../components/Services/ServicesTabs"
import ServicesHeroImg from '/src/assets/Services/step2.png'; // Adjust the path as necessary
import ServicesImg from '/src/assets/Services/step2.png'; // Adjust the path as necessary

const Services = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Services"
          breadcrumb="Home > Services"
          bgImg={ServicesHeroImg}
        />
        <ServicesSection
          title="Services"
          description="Detailed services text here..."
          buttonText="Call For Services"
          image={ServicesImg}
        />
        <ServicesTabs />
        <Process />
        <ContactRequest />
        <Footer />

      </div>
    </>
  )
}

export default Services