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

      <div className="flex w-4/5  h-[45vh] justify-between items-start relative ">
        {/* Green dotted line behind boxes */}
        <div className="absolute top-2 transform translate-y-24 left-[13%] w-[74%] border-t-2 border-darkgreen border-dotted z-0"></div>

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`bg-bggray rounded shadow p-6 text-gray text-left relative border border-[#E0E0E0] hover:border-darkgreen ${index === 1 ? "h-[250px]" : "h-[190px]"
              } w-[30%] z-10`}
          >

            {/* Number Box (Left Upper Corner) */}
            <div className="absolute top-0 left-0 bg-green-600 text-white rounded-ee-3xl rounded-ss-md w-10 h-10 flex items-center justify-center text-2xl italic font-semibold">
              {index + 1}
            </div>


            <div className="mt-4 whitespace-pre-line">
              <h3 className="text-black/80 text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className=" mb-8 text-[#666666] text-[13px] font-xs -space-y-4">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatRemovalPro;
