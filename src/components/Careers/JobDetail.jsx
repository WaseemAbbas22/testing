import TopBar from '/src/components/TopBar';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import ServicesHero from '/src/components/Services/ServicesHero';
import JobDetailHero from "/src/assets/Career/JobDetailHero.png"
import JobForm from '/src/components/Careers/JobForm';
import Jobdetailtext from '/src/components/Careers/Jobdetailtext';

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
                <div className='flex flex-row w-full'>
                    <div className='w-[50%]'>
                        <Jobdetailtext />
                    </div>
                    <div className='w-[50%] mr-20' >
                        <JobForm />
                        
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default JobDetail;

