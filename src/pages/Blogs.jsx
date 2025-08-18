import BlogsList from "../components/Blogs/BlogsList";
import Categories from "../components/Blogs/Categories";
import Tags from "../components/Blogs/Tags";
import FreeInspection from "../components/Blogs/FreeInspection";
import RecentBlogs from "../components/Blogs/RecentBlogs";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/Services/ServicesHero";
import BlogsHeroImg from '@/assets/Blogs/heroImg.webp'; // Adjust the path as necessary
import SearchBar from "../components/Blogs/SearchBar";

const BlogsPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesHero
        title="Latest News"
        breadcrumb="Home > Blogs"
        bgImg={BlogsHeroImg}
      />

      <div className="w-full min-h-screen flex flex-col">
        <div className="flex flex-col md:flex-row px-4 md:px-2 lg:px-16 xl:px-32 gap-4">

          {/* Left Side - Blogs (60%) */}
          <div className="w-full md:w-[60%] ">
            <BlogsList />
          </div>

          {/* Right Side - Search Bar (40%) */}
          <div className="w-full md:w-[40S%] ml-16 mt-12 flex flex-col">
            <SearchBar />
            <FreeInspection />
            <RecentBlogs />
            <Categories />
            <Tags />
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
};

export default BlogsPage;
