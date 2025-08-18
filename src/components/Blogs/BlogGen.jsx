import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import BlogsHeroImg from "@/assets/Blogs/BlogHero.webp"
import SearchBar from "./SearchBar";
import FreeInspection from "./FreeInspection";
import RecentBlogs from "./RecentBlogs";
import Categories from "./Categories";
import Tags from "./Tags";
import BlogDetail from "./BlogDetail";

const BlogGen = () => {
    return (
        <>
            <div>
                <TopBar />
                <Navbar />
                <ServicesHero
                    title="5 Eco-Friendly Pest Control Method You Should Know About"
                    breadcrumb=""
                    bgImg={BlogsHeroImg}
                />
                <div className="w-full min-h-screen flex flex-col">
                    <div className="flex flex-col md:flex-row mx-10">

                        {/* Left Side - Blogs (60%) */}
                        <div className="w-full md:w-[70%] mr-10">
                            <BlogDetail />
                        </div>

                        {/* Right Side - Search Bar (40%) */}
                        <div className="w-full md:w-[30%] mr-20 mt-12 flex flex-col">
                            <SearchBar />
                            <FreeInspection />
                            <RecentBlogs />
                            <Categories />
                            <Tags />
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default BlogGen