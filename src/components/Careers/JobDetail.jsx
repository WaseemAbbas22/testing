import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/Services/ServicesHero';
import JobDetailHero from "@/assets/Career/JobDetailHero.webp"
import JobForm from '@/components/Careers/JobForm';
import Jobdetailtext from '@/components/Careers/Jobdetailtext';

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

