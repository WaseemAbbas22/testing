const Categories = () => {
  // Define your categories array here
  const categoryList = [
    "Ant",
    "COCKROCHES",
    "Red Bugs",
    "Rodents",
    "Flies",
    "Mopsquitoes",
    "Spiders",
    "Venoumous",
    "Termites",
    "Birds",
  ];

  return (
    <div className="bg-bggray rounded shadow mt-5">
      <div className="bg-darkgreen text-white px-4 py-2 rounded-t">
        <h3 className="text-lg font-semibold">Categories</h3>
      </div>
      <ul className="px-3 py-2">
        {categoryList.map((category, i) => (
          <li
            key={i}
            className="text-xs text-gray font-semibold cursor-pointer py-2 border-b border-[#C4C4C4] flex items-center font-poppins"
          >
            <span className="mr-1">→</span> {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
