import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesHero from '@/components/Services/ServicesHero'
import HMheroImg from "@/assets/Pests/housemouseHero.png"
import HouseMousePage from '@/components/Pests/Rodent/housemouseSection'

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