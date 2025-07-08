import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import ServicesHero from "../components/Services/ServicesHero"
import ServicesSection from "../components/Services/ServicesSection"
import BlogsHeroImg from '/src/assets/Career/heroImg.png'; // Adjust the path as necessary
import ServicesImg from '/src/assets/Career/image99.png'; // Adjust the path as
import Footer from "../components/Footer"
//import Careers from "../components/Careers/Careers" 
import CareersList from "../components/Careers/Careers";

const Careers = () => {
    return (
        <>
            <div>
                <TopBar />
                <Navbar />
                <ServicesHero
                    title="Careers"
                    breadcrumb="Home > Careers"
                    bgImg={BlogsHeroImg}
                />
                <ServicesSection
                    title={
                        <div>
                            <div className="text-4xl font-bold text-gray-800 mb-1">
                                Join Dubai's Pest-Free Mission
                            </div>
                            <div className="text-gray font-semibold justify-center text-xl">
                                Explore Job Openings In Dubai & Be Part of Something Great!
                            </div>
                        </div>
                    }
                    description="Accurate Pest Control Dubai, UAE invites you to join Dubai’s pest-free mission and secure job openings in Dubai that blend purpose with professional growth. As a leader in eco-friendly pest management, we safeguard Dubai’s global reputation—protecting luxury hotels, thriving businesses, and vibrant communities from invasive pests. Our team uses cutting-edge technology, from AI-driven monitoring to sustainable treatments, ensuring Dubai remains pristine and healthy. Whether you’re a technician, sales expert, or operations leader, you’ll enjoy tailored training, competitive benefits, and opportunities to advance in a fast-growing industry. Apply now and help shape a cleaner, safer future for Dubai—your skills matter here!"
                    image={ServicesImg}
                />

                <CareersList />
                <Footer />
            </div>
        </>
    )
}

export default Careers;