// src/components/Blogs/Categories.jsx

const Categories = () => {
  return (
    <div className="bg-gray-200 rounded shadow">
      <div className="bg-green-600 text-white px-4 py-2 rounded-t">
        <h3 className="text-lg font-semibold">Categories</h3>
      </div>
      <ul className="p-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="text-sm font-bold cursor-pointer py-2 border-b border-black flex items-center"
          >
            <span className="mr-1">→</span> Category {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
