import aboutHeroImg from '@/assets/About/heroImg.png';
import ServicesHero from "../components/Services/ServicesHero"
import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import AboutCompany from "../components/About/AboutCompany" 
import OurTeam from '../components/Home/OurTeam';
import Certificates from "../components/About/Certificates"
import Messages from "../components/About/Messages"
// import OurTeam from "../components/About/OurTeam" // Assuming you have an OurTeam

const About = () => {
  return (
    <>
      <div className="relative">
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

