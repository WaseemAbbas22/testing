import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import ServicesHero from "../components/Services/ServicesHero"
import ServicesSection from "../components/Services/ServicesSection"
import Process from "../components/Home/Process"
import ContactRequest from "../components/Home/ContactReq"
import ServicesTabs from "../components/Services/ServicesTabs"
import ServicesHeroImg from '@/assets/Services/heroImg.webp'; // Adjust the path as necessary
import ServicesImg from '@/assets/Services/step2.webp'; // Adjust the path as necessary

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
          title="Our Services"
          description="At Accurate Pest Control, we understand that protecting your home or business from pests is about more than just treatments — it’s about creating a safe, healthy, and comfortable space for you, your family, your employees, and your customers. That’s why our services go far beyond standard pest removal. We provide comprehensive, science-backed pest management solutions tailored to your unique environment, using the latest tools and eco-friendly methods to deliver results that last. From routine inspections and targeted treatments to ongoing monitoring and prevention, our certified professionals work diligently to ensure pests are not just controlled but kept away for good. Whether you’re facing a sudden infestation or want to prevent one before it starts, trust Accurate Pest Control to handle every detail with care, efficiency, and a commitment to your peace of mind. Experience service excellence that protects what matters most — every single day."
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