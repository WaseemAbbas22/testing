import React from "react";
import Select from "react-select";
import pkFlag from "../assets/Home/pak.png";
import gbFlag from "../assets/Home/uk.png";

const languageOptions = [
  {
    value: "UR",
    label: (
      <div className="flex items-center">
        <img
          src={pkFlag}
          alt="Urdu"
          className="mr-2"
          style={{ width: "23px", height: "15px", objectFit: "cover" }}
        />
        <span className="text-green-400">اردو</span>
      </div>
    ),
  },
  {
    value: "EN",
    label: (
      <div className="flex items-center">
        <img
          src={gbFlag}
          alt="English"
          className="mr-2"
          style={{ width: "23px", height: "15px", objectFit: "cover" }}
        />
        <span className="text-green-400">English</span>
      </div>
    ),
  },
];

const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
  width = {
    default: "90px",
    sm: "100px",
    md: "110px",
    lg: "120px",
    xl: "130px",
    "2xl": "140px",
    "3xl": "150px",
    "4xl": "160px",
  },
  height = {
    default: "30px",
    sm: "35px",
    md: "40px",
    lg: "45px",
    xl: "50px",
    "2xl": "55px",
    "3xl": "60px",
    "4xl": "65px",
  },
}) => {
  const handleChange = (option) => {
    setSelectedLanguage(option.value);
  };

  return (
    <div
      className={`
        w-[${width.default}] sm:w-[${width.sm}] md:w-[${width.md}] lg:w-[${width.lg}]
        xl:w-[${width.xl}] 2xl:w-[${width["2xl"]}] 3xl:w-[${width["3xl"]}] 4xl:w-[${width["4xl"]}]
        h-[${height.default}] sm:h-[${height.sm}] md:h-[${height.md}] lg:h-[${height.lg}]
        xl:h-[${height.xl}] 2xl:h-[${height["2xl"]}] 3xl:h-[${height["3xl"]}] 4xl:h-[${height["4xl"]}]
      `}
    >
      <Select
        options={languageOptions}
        value={languageOptions.find((c) => c.value === selectedLanguage) || null}
        onChange={handleChange}
        isSearchable={false}
        styles={{
          control: (provided) => ({
            ...provided,
            minHeight: "100%",
            height: "100%",
            border: "none",
            boxShadow: "none",
            borderRadius: "0.375rem", // rounded-md
          }),
          valueContainer: (provided) => ({
            ...provided,
            height: "100%",
            padding: "0 6px",
          }),
          input: (provided) => ({
            ...provided,
            margin: 0,
          }),
          indicatorsContainer: (provided) => ({
            ...provided,
            height: "100%",
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            padding: "0 8px",
          }),
        }}
      />
    </div>
  );
};

export default LanguageSelector;
