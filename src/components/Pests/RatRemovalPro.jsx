const RatRemovalPro = () => {
  const steps = [
    {
      number: "1",
      title: "Inspection & Assessment",
      desc: "Our trained technicians inspect your entire property to locate entry points, nests, and signs of rat activity. We assess the extent of the infestation and identify the best treatment options."
    },
    {
      number: "2",
      title: "Customized Removal Plan",
      desc: "Based on the inspection, we create a tailored plan that may include:\nHumane Trapping: Safe traps placed in strategic spots to catch rats quickly.\nBait Stations: Secure, tamper-resistant bait boxes, safe for use around pets and children.\nExclusion Work: We seal all gaps, cracks, and holes to stop rats from re-entering."
    },
    {
      number: "3",
      title: "Monitoring & Follow up",
      desc: "Our trained technicians inspect your entire property to locate entry points, nests, and signs of rat activity. We assess the extent of the infestation and identify the best treatment options."
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white py-10">
      <h2 className="text-4xl font-bold mb-2 text-black">Our Rat Removal Process</h2>
      <p className="text-gray-600 text-sm mb-8">
        We use a proven, multi-step process for safe and effective rat removal
      </p>

      <div className="flex w-4/5 justify-between items-start relative">
        {/* Green dotted line behind boxes */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-[13%] w-[74%] border-t-2 border-green-700 border-dotted z-0"></div>

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`bg-gray-100 rounded shadow p-4 text-left relative ${
              index === 1 ? "h-68" : "h-50"
            } w-[30%] z-10`}
          >
            {/* Number in larger green box at very top-left corner */}
            <div className="absolute -top-3 -left-3 bg-green-700 text-white text-base font-bold rounded-md px-3 py-2 shadow">
              {step.number}
            </div>

            <div className="mt-10 whitespace-pre-line">
              <h3 className="text-green-700 text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-xs">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatRemovalPro;
