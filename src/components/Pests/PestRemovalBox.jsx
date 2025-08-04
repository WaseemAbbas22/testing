import React from "react";
import PropTypes from "prop-types";

const PestRemovalBox = ({
  heading = "Our Cockroach Removal Process",
  subtitle = "Efficient and safe Cockroach removal tailored to your space.",
  steps = [
    {
      number: "1",
      title: "Inspection & Assessment",
      desc: "Our trained technicians inspect your entire property to locate entry points, nests, and signs of rat activity. We assess the extent of the infestation and identify the best treatment options.",
    },
    {
      number: "2",
      title: "Customized Removal Plan",
      desc: "Based on the inspection, we create a tailored plan that may include:\nHumane Trapping: Safe traps placed in strategic spots to catch rats quickly.\nBait Stations: Secure, tamper-resistant bait boxes, safe for use around pets and children.\nExclusion Work: We seal all gaps, cracks, and holes to stop rats from re-entering.",
    },
    {
      number: "3",
      title: "Monitoring & Follow up",
      desc: "Our trained technicians inspect your entire property to locate entry points, nests, and signs of rat activity. We assess the extent of the infestation and identify the best treatment options.",
    },
  ],
  className = "",
}) => {
  return (
    <div className={`w-full flex flex-col items-center bg-white py-10 ${className}`}>
      <h2 className="text-4xl font-bold mb-2 text-black/90 3xl:text-[50px]">{heading}</h2>
      <p className="text-black/50 text-sm mb-8 3xl:text-lg">{subtitle}</p>

      <div className="flex w-[70%] h-[45vh] justify-between items-start relative">
        {/* Green dotted line behind boxes */}
        <div className="absolute top-2 transform translate-y-24 left-[13%] w-[74%] border-t-2 border-darkgreen border-dashed"></div>

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`bg-bggray rounded shadow p-8 text-gray text-left relative border border-[#E0E0E0] hover:border-darkgreen ${
              index === 1
                ? "h-[200px] sm:h-[220px] md:h-[250px] lg:h-[270px] xl:h-[300px] 2xl:h-[320px] 3xl:h-[340px]"
                : "h-[160px] sm:h-[180px] md:h-[190px] lg:h-[200px] xl:h-[220px] 2xl:h-[240px] 3xl:h-[320px]"
            } w-[30%] z-10`}
          >
            {/* Number Box (Left Upper Corner) */}
            <div className="absolute top-0 left-0 bg-darkgreen text-white rounded-ee-3xl rounded-ss-md   w-10 h-10 
            3xl:h-16 3xl:w-16 3xl:text-4xl 3xl:rounded-ee-[30px] 
            flex items-center justify-center text-2xl italic font-semibold">
              {index + 1}
            </div>

            <div className="mt-4 3xl:pt-10 whitespace-pre-line">
              <h3 className="text-black/80 text-lg font-semibold mb-2 3xl:text-[28px] 3xl:leading-tight">
                {step.title}
              </h3>
              <p className="mb-8 text-[#666666] text-[13px] font-xs -space-y-4 3xl:text-lg text-justify 3xl:leading-tight">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
PestRemovalBox.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

export default PestRemovalBox;
