import TopBar from '/src/components/TopBar';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import ServicesHero from '/src/components/Services/ServicesHero';
import JobDetailHero from "/src/assets/Career/JobDetailHero.png"
import JobForm from '/src/components/Careers/JobForm';

const JobDetail = () => {
    return (
        <>
            <div>
                <TopBar />
                <Navbar />
                <ServicesHero
                    title="Career"
                    breadcrumb="Home > Career "
                    bgImg={JobDetailHero}
                />
                <JobForm />
                <JobDetail />
                <Footer />
            </div>
        </>
    );
};

export default JobDetail