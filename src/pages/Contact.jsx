import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import TopBar from "../components/TopBar"
import ContactHeroImg from '/src/assets/Contact/heroImg.png'; // Adjust the path as necessary
import ContactUs from "../components/Contact/ContactUs"
import Footer from "../components/Footer";
import Location from "../components/Contact/Location"

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
    )
}

export default Contact;