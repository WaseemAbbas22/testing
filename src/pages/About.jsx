import aboutHeroImg from '@/assets/About/heroImg.webp';
import ServicesHero from "../components/Services/ServicesHero"
import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AboutCompany from "../components/About/AboutCompany" 
import OurTeam from '../components/Home/OurTeam';
import Certificates from "../components/About/Certificates"
import Messages from "../components/About/Messages"
import SEO from "../components/SEO";
// import OurTeam from "../components/About/OurTeam" // Assuming you have an OurTeam

const About = () => {
  const structuredData = {
    "@context": "http://schema.org/",
    "@type": "Organization",
    name: "Accurate Pest Control Services LLC Dubai",
    logo: "https://accuratepestcontrol.ae/",
    url: "https://accuratepestcontrol.ae/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Warehouse No.1, Plot No. 247-289, Al Qusais Industrial Area 4, Dubai - UAE",
      addressLocality: "Dubai",
      addressRegion: "Al Qusais Industrial Area 4",
      addressCountry: "United Arab Emirates",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday", "Saturday"
        ],
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
        title="About Us | Dubai Municipality Approved Pest Control"
        description="Learn about our certified pest control company in Dubai. Dubai Municipality-approved experts offering safe, eco-friendly pest solutions for homes & businesses."
        author="Muhammad Waqas Chughtai"
        copyright="Accurate Pest Control Services LLC"
        robots="index, follow"
        structuredData={structuredData}
      />
        <TopBar />
        <Navbar />
        <ServicesHero
          title="About Us"
          breadcrumb="Home > About Us"
          bgImg={aboutHeroImg}
        />
        <AboutCompany />
        <Messages />
        <Certificates /> 
        <br />
        
        <OurTeam /> 
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

export default About


// your about us bg image

// Inside your About Us page

