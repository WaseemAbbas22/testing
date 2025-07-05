import { FaCalendarAlt } from "react-icons/fa";
import ImgSide from "../../assets/Blogs/image.png";

const RecentBlogs = () => {
  const recentBlogs = [
    { id: 1, img: ImgSide, title: "Termite Control", date: "01 Jul 2025" },
    { id: 2, img: ImgSide, title: "Bed Bug Solutions", date: "02 Jul 2025" },
    { id: 3, img: ImgSide, title: "Mosquito Prevention", date: "03 Jul 2025" },
    { id: 4, img: ImgSide, title: "Rodent Management", date: "04 Jul 2025" },
    { id: 5, img: ImgSide, title: "Ant Control", date: "05 Jul 2025" },
  ];

  return (
    <div className="bg-gray-200 rounded shadow">
      <div className="bg-green-600 text-white px-4 py-2 rounded-t">
        <h3 className="text-lg font-semibold">Recent Blogs</h3>
      </div>
      <div className="p-4">
        {recentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center space-x-2 py-2 border-b border-black"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="rounded w-12 h-12 object-cover"
            />
            <div>
              <p className="text-sm font-bold">{blog.title}</p>
              <div className="flex items-center text-xs text-gray-500">
                <FaCalendarAlt className="mr-1" /> {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
