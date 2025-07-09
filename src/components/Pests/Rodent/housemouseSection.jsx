const HouseMousePage = () => {
  return (
    <div className="bg-white w-full px-0 py-10 max-w-4xl mx-40 text-gray-800">
      {/* Heading */}
      <h1 className="text-xl font-bold mb-2">
        About House Mouse <span className="text-darkgreen">(Mus musculus)</span>
      </h1>

      {/* Description */}
      <p className="mb-4 text-xs text-gray">
        The house mouse is one of the most common and troublesome pests found in homes and commercial buildings worldwide.<br />
        Small but persistent, these rodents easily adapt to indoor environments and can multiply rapidly if not controlled.
      </p>

      {/* Pest Description */}
      <h2 className="text-lg font-semibold mb-0">Pest Description</h2>
      <ul className="list-disc list-inside mb-2 text-darkgreen space-y-1">
        <li className="text-gray text-xs"><strong className="text-black/70 text-sm">Color:</strong> Light brown to gray with a lighter-colored belly</li>
        <li className="text-gray text-xs"><strong className="text-black/70 text-sm">Legs:</strong> 4</li>
        <li className="text-gray text-xs"><strong className="text-black/70 text-sm">Shape:</strong> Small slender body with a pointed nose and large ears</li>
        <li className="text-gray text-xs"><strong className="text-black/70 text-sm">Size:</strong> Body length about 2.5 – 4 inches long; tail about the same as body; weight ranges from 0.5–1 ounce</li>
        <li className="text-gray text-xs"><strong className="text-black/70 text-sm">Antennae:</strong> None</li>
        <li className="text-gray text-xs"><strong className="text-black/70 text-sm">Region:</strong> Found globally, especially in human dwellings</li>
      </ul>

      {/* Habits */}
      <h2 className="text-lg font-semibold mb-0">Habits</h2>
      <ul className="list-disc text-gray text-sm list-inside mb-4 space-y-1">
        <li className="marker:text-green-600 text-xs">House mice are active mostly at night, searching for food and nesting material.</li>
        <li className="marker:text-green-600 text-xs">They are curious by nature and will explore new spaces quickly.</li>
        <li className="marker:text-green-600 text-xs">They build nests in hidden, undisturbed areas using shredded paper, fabric, or insulation.</li>
        <li className="marker:text-green-600 text-xs">Mice prefer to feed on grains and seeds but will eat almost anything available.</li>
      </ul>

      {/* Habitat */}
      <h2 className="text-lg font-semibold mb-0">Habitat</h2>
      <ul className="list-disc list-inside mb-4 text-sm text-gray space-y-1">
        <li className="marker:text-green-600 text-xs">Indoors, house mice live in walls, cabinets, attics, basements, and storage areas close to food and water sources.</li>
        <li className="marker:text-green-600 text-xs">Outdoors, they can nest in fields, gardens, and garages but usually move indoors during cold weather.</li>
        <li className="marker:text-green-600 text-xs">They can squeeze through holes as small as a dime to gain entry into buildings.</li>
      </ul>

      {/* Threats */}
      <h2 className="text-lg font-semibold mb-0">Threats</h2>
      <ul className="list-disc list-inside mb-10 text-sm text-gray space-y-1">
        <li className="marker:text-green-600 text-xs">House mice contaminate food with droppings and urine, which can spread harmful bacteria like salmonella.</li>
        <li className="marker:text-green-600 text-xs">Their constant gnawing damages furniture, food packaging, electrical wiring, and insulation – increasing fire hazards.</li>
        <li className="marker:text-green-600 text-xs">Mice can trigger allergies and asthma, especially in children and sensitive individuals.</li>
        <li className="marker:text-green-600 text-xs">Due to rapid reproduction, a small mouse problem can quickly turn into a large infestation.</li>
      </ul>

      {/* Call to Action */}
      <div className="bg-[#0C520A] text-white rounded shadow-md justify-center p-6 text-center w-[110%] rounded-lg h-[28vh]">
        <h3 className="text-2xl font-semibold mb-1">Protect Your Home from House Mice</h3>
        <p className="mb-4 text-xs justify-center">
          If you notice droppings, gnaw marks, or scratching noises in your home, don't wait for the problem to grow.
          Our professional <br /> pest control team offers safe, effective, and discreet house mouse removal to protect your family and property.
        </p>
        <button className="bg-white text-green-800 font-semibold text-xs px-5 py-1 rounded hover:bg-gray-100 transition">
          Call us today for a free inspection
        </button>
      </div>
    </div>
  );
};

export default HouseMousePage;
