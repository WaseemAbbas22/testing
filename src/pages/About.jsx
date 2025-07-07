import aboutHeroImg from '/src/assets/About/heroImg.png';
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
      <div>
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
        <Footer />

      </div>
    </>
  )
}

export default About


// your about us bg image

// Inside your About Us page

