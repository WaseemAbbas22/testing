import PropTypes, { number } from "prop-types";

const PestInfoPage = ({
  title,

  Int,
  descInt,
  ListDescInt,
  Int2,
  descInt2,
  ListDescInt2,
  scientificName,
  description,
  List,
  additional,
  Heading5,
  desc5,
  Enddesc5,
  ListDesc5,

  Heading1,
  desc1,
  desc3,
  desc4,
  ListDesc1,
  ListDesc3,
  ListDesc4,
  Enddesc1,
  Enddesc1_2,
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
  threats,
  label,
  ctaHeading,
  ctaText,
  ctaButtonText,
}) => {
  return (
    <div className="bg-white w-[85%] sm:w-[75%]  py-12 3xl:py-20 mx-auto text-gray-800">
      {/* Heading */}
      <h1 className="text-[32px] xl:text-[21px] 3xl:text-[32px] font-bold">
        {title} <span className="text-darkgreen">{scientificName}</span>
      </h1>
      {/* Description */}
      <p className="mb-3 text-[13px] 3xl:text-[18px] text-[#666666] xl:leading-tight">
        {description.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </p>

      {/* Additional Headings */}
      <div className="mb-3 ">
        <h2 className="text-[22px] xl:text-[16px] 3xl:text-[22px] font-semibold">
          {Int}
        </h2>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {descInt}{" "}
        </p>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {ListDescInt}{" "}
        </p>
      </div>

      {/* Pest Description */}
      <div className="mb-3 ">
        <h2 className="text-[22px] xl:text-[16px] 3xl:text-[22px] font-semibold">
          {Heading1}
        </h2>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {desc1}{" "}
        </p>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {ListDesc1}{" "}
        </p>

        <ul className="list-disc list-inside mb-1 text-darkgreen">
          {pestDescription.map(({ label, number, value }, i) => (
            <li
              key={i}
              className="marker:text-green-600 text-[#666666] text-[13px] 3xl:text-[18px] "
            >
              <strong className="text-[#666666] text-[13px] 3xl:text-[18px]">
                {label}
              </strong>{" "}
              {number} {value}
            </li>
          ))}
        </ul>
        <p className="text-[13px] 3xl:text-[18px] font-sm mb-0 text-[#666666]">
          {Enddesc1_2}{" "}
        </p>
        <ul className="list-disc text-[#666666] text-[13px] list-inside ">
          {List.map((item, i) => (
            <li
              key={i}
              className="marker:text-green-600 text-[13px] 3xl:text-[18px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[13px] 3xl:text-[18px] font-sm mb-0 text-[#666666]">
          {Enddesc1}{" "}
        </p>
      </div>

      {/* Additional Headings 2.0 */}
      <div className="mb-3 ">
        <h2 className="text-[22px] xl:text-[16px] 3xl:text-[22px] font-semibold">
          {Int2}
        </h2>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {descInt2}{" "}
        </p>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {ListDescInt2}{" "}
        </p>
      </div>

      {/* Habits */}
      <div className="mb-3">
        <h2 className="text-[22px] xl:text-[16px] 3xl:text-[22px] font-semibold">
          {Heading2}
        </h2>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {desc2}{" "}
        </p>
        <p className="text-[13px] 3xl:text-[18px] font-sm mb-0 text-[#666666]">
          {ListDesc2}{" "}
        </p>

        <ul className="list-disc text-[#666666] text-[13px] list-inside ">
          {habits.map((item, i) => (
            <li
              key={i}
              className="marker:text-green-600 text-[13px] 3xl:text-[18px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {Enddesc2}{" "}
        </p>
      </div>

      {/* Habitat */}
      <div className="mb-3">
        <h2 className="text-[22px] xl:text-[16px] 3xl:text-[22px] font-semibold ">
          {Heading3}
        </h2>
        <p className="text-[13px] 3xl:text-[18px] font-sm  text-[#666666]">
          {desc3}{" "}
        </p>
        <p className="text-[13px] 3xl:text-[18px] font-sm  text-[#666666]">
          {ListDesc3}{" "}
        </p>

        <ul className="list-disc list-inside text-[13px] 3xl:text-[18px] text-[#666666]">
          {habitat.map(({ label, number, value }, i) => (
            <li
              key={i}
              className="marker:text-green-600 text-[13px] 3xl:text-[18px]"
            >
              <strong className="text-[#666666] text-[13px] 3xl:text-[18px]">
                {label}
              </strong>{" "}
              {number} {value}
            </li>
          ))}
        </ul>
        <p className="text-[13px]  3xl:text-[18px] font-sm text-[#666666]">
          {Enddesc3}{" "}
        </p>
      </div>

      {/* Habitat */}
      <div className="mb-6">
        <h2 className="text-[22px] xl:text-[16px] 3xl:text-[22px] font-semibold">
          {Heading4}
        </h2>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {desc4}{" "}
        </p>
        <p className="text-[13px]  3xl:text-[18px] font-sm text-[#666666]">
          {ListDesc4}{" "}
        </p>

        <ul className="list-disc list-inside text-[13px] 3xl:text-[18px] text-[#666666]">
          {threats.map((item, i) => (
            <li
              key={i}
              className="marker:text-green-600 text-[13px] 3xl:text-[18px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {Enddesc4}{" "}
        </p>
      </div>

      {/* Additional */}
      <div className="mb-10">
        <h2 className="text-[22px] xl:text-[16px] 3xl:text-[22px] font-semibold">
          {Heading5}
        </h2>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {desc5}{" "}
        </p>
        <p className="text-[13px]  3xl:text-[18px] font-sm text-[#666666]">
          {ListDesc5}{" "}
        </p>

        <ul className="list-disc list-inside text-[13px] 3xl:text-[18px] text-[#666666]">
          {additional.map((item, i) => (
            <li
              key={i}
              className="marker:text-green-600 text-[13px] 3xl:text-[18px]"
            >
              {item.value}
            </li>
          ))}
        </ul>
        <p className="text-[13px] 3xl:text-[18px] font-sm text-[#666666]">
          {Enddesc5}{" "}
        </p>
      </div>

      {/* Call to Action */}
      <div>
        <div className="bg-[#0C520A] text-white rounded shadow-md flex flex-col items-center justify-center py-2 space-y-2 3xl:space-y-2 text-center rounded-lg h-auto sm:h-[23vh]">
          <h3 className="text-[20px] xl:text-[28px] 3xl:text-[40px] font-semibold m-0 ">
            {ctaHeading}
          </h3>
          <p className="text-xs xl:text-[13px] 3xl:text-[18px] leading-tight w-[90%] sm:w-[60%] mx-auto">
            {ctaText.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <button className="bg-white text-[#0C520A] font-semibold text-xs 3xl:text-[18px] px-5 py-1 3xl:px-6 3xl:py-2 rounded hover:bg-gray-100 transition">
            {ctaButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

PestInfoPage.propTypes = {
  title: PropTypes.string.isRequired,
  Int: PropTypes.string,
  descInt: PropTypes.string,
  ListDescInt: PropTypes.string,

  Int2: PropTypes.string,
  descInt2: PropTypes.string,
  ListDescInt2: PropTypes.string,
  Link: PropTypes.string,

  scientificName: PropTypes.string,
  description: PropTypes.string,
  Heading1: PropTypes.string,
  desc1: PropTypes.string,
  desc5: PropTypes.string,

  ListDesc1: PropTypes.string,
  ListDesc4: PropTypes.string,
  ListDesc3: PropTypes.string,
  ListDesc5: PropTypes.string,
  Enddesc1_2: PropTypes.string,
  Enddesc1: PropTypes.string,
  Enddesc5: PropTypes.string,
  Enddesc2: PropTypes.string,
  Enddesc3: PropTypes.string,
  Enddesc4: PropTypes.string,
  List: PropTypes.arrayOf(PropTypes.string),
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
  habitat: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      number: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      number: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  Heading4: PropTypes.string,
  Heading5: PropTypes.string,

  threats: PropTypes.arrayOf(PropTypes.string),
  ctaHeading: PropTypes.string,
  ctaText: PropTypes.string,
  ctaButtonText: PropTypes.string,
};

export default PestInfoPage;

// import PestInfoPage from "../PestInfoPage";
// import TopBar from "../../TopBar";
// import Footer from "@/components/Footer";
// import Navbar from "../../Navbar";
// import ServicesHero from "../../Services/ServicesHero";
// import RodentHeroImg from "@/assets/Pests/Rodent/rodenthero.png";

// const JumpingSpider = () => {
//   return (
//     <>
//     <TopBar />
//       <Navbar />
//       <ServicesHero
//         title="House Spider"
//         breadcrumb="Home > Pests > Details"
//         bgImg={RodentHeroImg}
//       />
//     <PestInfoPage
//       title="Black Widow Spider"
//       scientificName=""
//       description=""

//       Int=""
//       descInt=""
//       ListDescInt=""

//       Int2=""
//       descInt2=""
//       ListDescInt2=""

//       Heading1=""
//       desc1=""
//       ListDesc1=""
//       pestDescription={[]}
//       Enddesc1=""

//       Heading2=""
//       desc2=""
//       ListDesc2=""
//       habits={[]}
//       Enddesc2=""

//       Heading3=""
//       desc3=""
//       ListDesc3=""
//       habitat={[]}
//       Enddesc3=""

//       Heading4=""
//       desc4=""
//       ListDesc4=""
//       threats={[]}
//       Enddesc4=""

//       Heading5=""
//       desc5=""
//       ListDesc5=""
//       additional={[]}
//       Enddesc5=""

//       ctaHeading=""
//       ctaText=""
//       ctaButtonText=""
//     />
//     <Footer />
//     </>
//   );
// };

// export default JumpingSpider;
