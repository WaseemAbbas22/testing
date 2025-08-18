import { FaCalendarAlt } from "react-icons/fa";
import ImgSide from "../../assets/Blogs/image.webp";

const RecentBlogs = () => {
  const recentBlogs = [
    { id: 1, img: ImgSide, title: "How to kill roaches around the home fast", date: "01 Jul 2025" },
    { id: 2, img: ImgSide, title: "How to kill roaches around the home fast", date: "02 Jul 2025" },
    { id: 3, img: ImgSide, title: "How to kill roaches around the home fast", date: "03 Jul 2025" },
    { id: 4, img: ImgSide, title: "How to kill roaches around the home fast", date: "04 Jul 2025" },
    { id: 5, img: ImgSide, title: "How to kill roaches around the home fast", date: "05 Jul 2025" },
  ];

  return (
    <div className="bg-bggray rounded shadow mt-5 bg-[#F0F0F0]">
      <div className="bg-[#32A849] text-white px-4 py-4 rounded-t">
        <h3 className="text-lg font-semibold">Recent Blogs</h3>
      </div>
      <div className="p-4">
        {recentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center space-x-2 py-4 border-b border-gray-400"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="rounded w-[70px] h-[70px] object-cover"
            />
            <div className="ml-2 text-gray">
              <p className="text-sm font-semibold mb-3">{blog.title}</p>
              <div className="flex text-xs text-gray-500">
                <FaCalendarAlt className="mb-2" /> {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
