import Navbar from "../components/Navbar";
import ServicesHero from "../components/Services/ServicesHero";
import TopBar from "../components/TopBar";
import ContactHeroImg from "@/assets/Contact/heroImg.webp"; // Adjust the path as necessary
import ContactUs from "../components/Contact/ContactUs";
import Footer from "../components/Footer";
import Location from "../components/Contact/Location";
//import ContactUsForm from "../components/Contact/ContactUsForm";

const Contact = () => {
  return (
    <>
      <div>
        <TopBar />
        <Navbar />
        <ServicesHero
          title="Contact Us"
          breadcrumb="Home > Contact Us"
          bgImg={ContactHeroImg}
        />
        <ContactUs />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
