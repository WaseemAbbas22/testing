import TopBar from '/src/components/TopBar'
import Navbar from '/src/components/Navbar'
import Footer from '/src/components/Footer'
import ServicesHero from '/src/components/Services/ServicesHero'
import HMheroImg from "/src/assets/Pests/housemouseHero.png"

const Ant = () => {
    return (
        <>
            <div>
                <TopBar />
                <Navbar />
                <ServicesHero
                    title="Professional Rat Removal Services"
                    breadcrumb="Home > Pests > Rodent"
                    bgImg={HMheroImg}
                />
                <Footer />
            </div>
        </>
    )
}

export default Ant; 