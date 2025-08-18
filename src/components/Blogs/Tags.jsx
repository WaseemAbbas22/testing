// src/components/Blogs/Tags.jsx

const Tags = () => {
  const tags = [
    "Ants", "Cockroaches", "Termites", "Bed Bugs", "Mosquitoes",
    "Rodents", "Flies", "Wasps", "Spiders", "Fleas",
    "Mites", "Beetles", "Ticks", "Silverfish", "Centipedes",
    "Moths", "Gnats", "Scorpions", "Earwigs", "Weevils",
  ];

  return (
    <div className="bg-bggray rounded shadow mt-5">
      <div className="bg-green-600 text-white px-4 py-2 rounded-t">
        <h3 className="text-lg font-semibold">Tags</h3>
      </div>
      <div className="p-2 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-white text-xs px-2 py-1 font-xs text-gray rounded cursor-pointer hover:bg-green-600 hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
