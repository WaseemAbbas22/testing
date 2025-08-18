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
      list: [
        "Safe trapping methods to quickly capture mice in crowded situations",
        "For the best results, hide places to feed for pets and children. Sealing off any openings and structural cracks is necessary to stop further attack.",
      ],
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
    <div
      className={`w-full flex flex-col items-center bg-bggray py-6 3xl:py-10 ${className}`}
    >
      <h2 className="text-4xl font-bold mb-2 text-black/90 3xl:text-[50px] text-center">
        {heading}
      </h2>
      <p className="text-black/50 text-sm mb-8 3xl:text-lg">{subtitle}</p>

      <div className="flex flex-col md:flex-row w-[85%] md:w-[73%] justify-between items-stretch gap-8 md:gap-16 3xl:gap-20 relative">
        {/* Green dotted line */}
        <div
          className="
      absolute 
      z-0 
      border-darkgreen border-dashed 
      md:top-2 md:left-[13%] md:w-[74%] md:border-t-2 
      top-4 left-[50%] -translate-x-1/2 w-0 h-[90%] border-l-2
      md:translate-x-0 md:translate-y-24 md:h-0
    "
        ></div>

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`
          relative z-10 flex flex-col justify-start bg-white rounded shadow p-6 border border-[#E0E0E0] hover:border-darkgreen
          w-full md:w-[30%] h-auto 
          ${index === 1 ? "min-h-[100%]" : "flex-1"}
        `}
          >
            {/* Number Box */}
            <div className="absolute top-0 left-0 bg-darkgreen text-white rounded-ee-3xl rounded-ss-md w-10 h-10 3xl:h-16 3xl:w-16 3xl:text-4xl 3xl:rounded-ee-[30px] flex items-center justify-center text-2xl italic font-semibold">
              {step.number}
            </div>

            <div className="mt-6 3xl:mt-12 whitespace-pre-line flex-grow flex flex-col ">
              <h3 className="text-black/80 text-xl font-semibold mb-2 3xl:text-[28px] xl:leading-tight 3xl:leading-tight">
                {step.title}
              </h3>
              <p className="text-[#666666] text-[13px] font-xs text-justify xl:leading-[1.2] 3xl:text-lg 3xl:leading-tight">
                {step.desc}
              </p>
              {step.list && step.list.length > 0 && (
                <ul className="text-[#666666] text-[13px] font-xs 3xl:text-lg xl:leading-[1] 3xl:leading-snug xl:space-y-1 3xl:space-y-2 mt-2">
                  {step.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {/* Custom bullet circle */}
                      <div className="mt-2 w-2 h-2 rounded-full bg-darkgreen shrink-0" />
                      <p className="text-justify leading-snug">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
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
