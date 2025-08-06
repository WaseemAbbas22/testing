import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import TopBar from "../components/TopBar"
import ContactHeroImg from '@/assets/Contact/heroImg.png'; // Adjust the path as necessary
import ContactUs from "../components/Contact/ContactUs"
import Footer from "../components/Footer";
import Location from "../components/Contact/Location"
import ContactUsForm from "../components/Contact/ContactUsForm";

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
                <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mt-12 px-4">
                    Contact Our Team Today & Say Goodbye to Pests
                </h2>

                <div className='flex flex-row w-full'>
                    <div className='w-[50%]'>
                        <ContactUs />
                    </div>
                    <div className='w-[50%]' >
                        <ContactUsForm />

                    </div>
                </div>
                <Location />
                <Footer />
            </div>
        </>
    )
}

export default Contact;