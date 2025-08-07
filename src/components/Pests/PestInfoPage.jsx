import PropTypes, { number } from "prop-types";

const PestInfoPage = ({
  title,
  scientificName,
  description,
  Heading1,
  desc1,
  desc3,
  desc4,
  ListDesc1,
  ListDesc3,
  ListDesc4,
  Enddesc1,
  desc2,
  ListDesc2,
  Enddesc2,
  Enddesc3,
  Enddesc4,
  Heading2,
  Heading3,
  Heading4,
  pestDescription,
  habits,
  habitat,
  label,
  ctaHeading,
  ctaText,
  ctaButtonText,
}) => {
  return (
    <div className="bg-white w-full sm:w-[75%]  py-12 mx-auto text-gray-800">
  {/* Heading */}
  <h1 className="text-[21px] font-bold">
    {title} <span className="text-darkgreen">{scientificName}</span>
  </h1>

  {/* Description */}
  <p className="mb-3 text-[13px] text-gray xl:leading-tight">
    {description.split("\n").map((line, idx) => (
      <span key={idx}>
        {line}
        <br />
      </span>
    ))}
  </p>

  {/* Pest Description */}
  <div className="mb-3 ">
    <h2 className="text-[16px] font-semibold">{Heading1}</h2>
    <p className="text-[13px] font-sm text-gray">{desc1} </p>
    <p className="text-sm font-sm text-gray">{ListDesc1} </p>

    <ul className="list-disc list-inside mb-1 text-darkgreen">
      {pestDescription.map(({ label, number, value }, i) => (
        <li key={i} className="marker:text-green-600 text-gray text-[13px]">
          <strong className="text-black/70 text-[13px]">{label}</strong> {number} {value}
        </li>
      ))}
    </ul>
     <p className="text-sm font-sm mb-0 text-gray">{Enddesc1} </p>

  </div>

  {/* Habits */}
  <div className="mb-3">
    <h2 className="text-[16px] font-semibold">{Heading2}</h2>
    <p className="text-[13px] font-sm text-gray">{desc2} </p>
    <p className="text-[13px] font-sm mb-0 text-gray">{ListDesc2} </p>

    <ul className="list-disc text-gray text-[13px] list-inside ">
      {habits.map((item, i) => (
        <li key={i} className="marker:text-green-600 text-[13px]">
          {item}
        </li>
      ))}
    </ul>
    <p className="text-[13px] font-sm text-gray">{Enddesc2} </p>

  </div>

  {/* Habitat */}
  <div className="mb-3">
    <h2 className="text-[16px] font-semibold ">{Heading3}</h2>
     <p className="text-[13px] font-sm  text-gray">{desc3} </p>
     <p className="text-[13px] font-sm  text-gray">{ListDesc3} </p>

    <ul className="list-disc list-inside text-[13px] text-gray">
      {habitat.map((item, i) => (
        <li key={i} className="marker:text-green-600 text-[13px]">
         <strong className="text-black/70 text-[13px]">{label}</strong> {item}
        </li>
      ))}
    </ul>
      <p className="text-[13px] font-sm text-gray">{Enddesc3} </p>

  </div>
  
  {/* Habitat */}
  <div className="mb-10">
    <h2 className="text-[16px] font-semibold">{Heading4}</h2>
     <p className="text-[13px] font-sm text-gray">{desc4} </p>
     <p className="text-[13px] font-sm text-gray">{ListDesc4} </p>

    <ul className="list-disc list-inside text-[13px] text-gray">
      {habitat.map((item, i) => (
        <li key={i} className="marker:text-green-600 text-[13px]">
          {item}
        </li>
      ))}
    </ul>
      <p className="text-[13px] font-sm text-gray">{Enddesc4} </p>

  </div>

  
  {/* Call to Action */}
  <div>
    <div className="bg-[#0C520A] text-white rounded shadow-md justify-center py-2 space-y-2 items-center text-center rounded-lg h-[23vh]">
      <h3 className="text-[24px] font-semibold">{ctaHeading}</h3>
      <p className="text-[13px] justify-center w-[70%] mx-auto">
        {ctaText.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <button className="bg-white  text-green-800 font-semibold text-xs px-5 py-1 rounded hover:bg-gray-100 transition">
        {ctaButtonText}
      </button>
    </div>
  </div>
</div>

  );
};

PestInfoPage.propTypes = {
  title: PropTypes.string.isRequired,
  scientificName: PropTypes.string,
  description: PropTypes.string,
  Heading1: PropTypes.string,
  desc1: PropTypes.string,
 
  ListDesc1: PropTypes.string,
  ListDesc4: PropTypes.string,
  ListDesc3: PropTypes.string,
  Enddesc1: PropTypes.string,
  Enddesc2: PropTypes.string,
  Enddesc3: PropTypes.string,
  Enddesc4: PropTypes.string,
  pestDescription: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      number: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  Heading2: PropTypes.string,
 
  desc2: PropTypes.string,
  label: PropTypes.string,
  desc3: PropTypes.string,
  desc4: PropTypes.string,
  ListDesc2: PropTypes.string,
  habits: PropTypes.arrayOf(PropTypes.string),
  Heading3: PropTypes.string,
  habitat: PropTypes.arrayOf(PropTypes.string),
  Heading4: PropTypes.string,
  threats: PropTypes.arrayOf(PropTypes.string),
  ctaHeading: PropTypes.string,
  ctaText: PropTypes.string,
  ctaButtonText: PropTypes.string,
};

export default PestInfoPage;
