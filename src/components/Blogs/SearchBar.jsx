import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="bg-bggray rounded shadow p-3">
      <div className="flex items-center border border-gray-300 rounded overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 outline-none"
        />
        <button className="bg-green-600 text-white px-4 py-3">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
