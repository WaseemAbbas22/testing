import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Blog2 from "../../assets/Blogs/blog2.webp";
import Blog3 from "../../assets/Blogs/blog3.webp";
import lastsec from "@/assets/Home/lastsec.webp";
import Blog1 from "../../assets/Blogs/blog1.webp";

const blogs = [
  { id: 1, img: Blog1, title: "Pest Control Tips, Insights & Expert Advice", desc: "Stay informed with the latest pest prevention tips, seasonal advice, and expert insights from our certified technicians. Whether you're dealing with termites, cockroaches...", date: "01 Jul 2025",Link:"/bloggen" },
  { id: 2, img: Blog2, title: "Expert Tips from UAE Pest Specialists", desc: "Get insider knowledge straight from the professionals. Our blog covers real issues faced by homeowners and businesses in the UAE — with clear, practical solutions...", date: "02 Jul 2025" ,Link:"/bloggen"},
  { id: 3, img: Blog3, title: "Smarter Pest Control Starts Here", desc: "Whether you're a first-time homeowner or a facility manager, our blog gives you the tools to stay ahead of pests. Find DIY prevention hacks, product comparisons, service guides...", date: "03 Jul 2025",Link:"/bloggen" },
  { id: 4, img: Blog1, title: "Smarter Pest Control Starts Here", desc: "Whether you're a first-time homeowner or a facility manager, our blog gives you the tools to stay ahead of pests. Find DIY prevention hacks, product comparisons, service guides...", date: "04 Jul 2025" ,Link:"/bloggen"},
  { id: 5, img: Blog2, title: "Pest Control Tips, Insights & Expert Advice", desc: "Stay informed with the latest pest prevention tips, seasonal advice, and expert insights from our certified technicians. Whether you're dealing with termites, cockroaches...", date: "05 Jul 2025",Link:"/bloggen" },
  { id: 6, img: Blog3, title: "Expert Tips from UAE Pest Specialists", desc: "Get insider knowledge straight from the professionals. Our blog covers real issues faced by homeowners and businesses in the UAE — with clear, practical solutions...", date: "06 Jul 2025" ,Link:"/bloggen"},
  { id: 7, img: Blog1, title: "Smarter Pest Control Starts Here", desc: "Whether you're a first-time homeowner or a facility manager, our blog gives you the tools to stay ahead of pests. Find DIY prevention hacks, product comparisons, service guides...", date: "07 Jul 2025",Link:"/bloggen" },
  { id: 8, img: Blog2, title: "Smarter Pest Control Starts Here", desc: "Whether you're a first-time homeowner or a facility manager, our blog gives you the tools to stay ahead of pests. Find DIY prevention hacks, product comparisons, service guides...", date: "08 Jul 2025",Link:"/bloggen" },
  { id: 9, img: Blog3, title: "Pest Control Tips, Insights & Expert Advice", desc: "Stay informed with the latest pest prevention tips, seasonal advice, and expert insights from our certified technicians. Whether you're dealing with termites, cockroaches...", date: "09 Jul 2025",Link:"/bloggen" },
  { id: 10, img: Blog1, title: "Expert Tips from UAE Pest Specialists", desc: "Get insider knowledge straight from the professionals. Our blog covers real issues faced by homeowners and businesses in the UAE — with clear, practical solutions...", date: "10 Jul 2025",Link:"/bloggen" },
];

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-[700px] py-12 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="flex flex-col rounded w-full">
            <img src={blog.img} alt={blog.title} className="mb-3 w-full h-auto rounded-lg" />
            <h3 className="text-base font-semibold mb-1">{blog.title}</h3>
            <img src={lastsec} alt="Last Section" className="h-2 w-auto mt-1" />

            <p className="text-xs mb-4">{blog.desc}</p>
            <div className="flex justify-between items-center mt-auto">
              <Link
                to={`${blog.Link}`} // replaced your button with Link for routing
                className="bg-green-600 text-[10px] text-white px-3 py-1 rounded flex items-center gap-1"
              >
                Read More <span>→</span>
              </Link>
              <div className="flex items-center text-[9px] text-gray-500">
                <FaCalendarAlt className="mr-1" /> {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
