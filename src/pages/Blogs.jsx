import BlogsList from "../components/Blogs/BlogsList";
import Categories from "../components/Blogs/Categories";
import Tags from "../components/Blogs/Tags";
import FreeInspection from "../components/Blogs/FreeInspection";
import RecentBlogs from "../components/Blogs/RecentBlogs";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/Services/ServicesHero";
import BlogsHeroImg from '/src/assets/Blogs/heroImg.png'; // Adjust the path as necessary
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

      <div className="w-full min-h-screen bg-gray-100 flex flex-col">
  <div className="flex flex-1 px-4 md:px-8 lg:px-16 xl:px-32 gap-6">
    {/* Left Side - Blogs */}
    <div className="flex-[6]">
      <BlogsList />
    </div>

    {/* Right Side - Sidebar */}
    <div className="flex-[4] flex flex-col space-y-6">
      <SearchBar /> {/* Add your search component here */}
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
