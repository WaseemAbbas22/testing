import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import ServicesHero from "../components/Services/ServicesHero"
import SectorHeroImg from '@/assets/Sectors/heroImg.webp'; // Adjust the path as necessary
import Footer from "../components/Footer";
import SectorsPage from "../components/SectorPages";
//import FreeInspection from "../components/Blogs/FreeInspection";

const Sectors = () => {
    return (
        <div>
            <TopBar />
            <Navbar />
            <ServicesHero
                title="Sectors"
                breadcrumb="Home > Sectors"
                bgImg={SectorHeroImg}
            />
           <SectorsPage />
            <Footer />
        </div>
    )
}

export default Sectors;