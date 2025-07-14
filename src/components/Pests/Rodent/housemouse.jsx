import TopBar from '/src/components/TopBar'
import Navbar from '/src/components/Navbar'
import Footer from '/src/components/Footer'
import ServicesHero from '/src/components/Services/ServicesHero'
import HMheroImg from "/src/assets/Pests/housemouseHero.png"
import HouseMousePage from '/src/components/Pests/Rodent/housemouseSection'

const housemouse = () => {
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
                <HouseMousePage />
                <Footer />
            </div>
        </>
    )
}

export default housemouse;