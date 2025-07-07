import React from "react";
import Select from "react-select";
import aeFlag from "../assets/Home/uae.png";
import pkFlag from "../assets/Home/pak.png";
import gbFlag from "../assets/Home/uk.png";

const countryOptions = [
  {
    value: "AE",
    label: (
      <div className="flex items-center">
        <img
          src={aeFlag}
          alt="UAE"
          className="mr-2"
          style={{ width: "23px", height: "15px", objectFit: "cover" }}
        />
        <span className="text-green-400">UAE</span>
      </div>
    ),
  },
  {
    value: "PK",
    label: (
      <div className="flex items-center">
        <img
          src={pkFlag}
          alt="Pakistan"
          className="mr-2"
          style={{ width: "23px", height: "15px", objectFit: "cover" }}
        />
        <span className="text-green-400">Pakistan</span>
      </div>
    ),
  },
  {
    value: "GB",
    label: (
      <div className="flex items-center">
        <img
          src={gbFlag}
          alt="UK"
          className="mr-2"
          style={{ width: "23px", height: "15px", objectFit: "cover" }}
        />
        <span className="text-green-400">ENG</span>
      </div>
    ),
  },
];

const CountrySelector = ({ selectedCountry, setSelectedCountry, width, height }) => {
  const handleChange = (option) => {
    setSelectedCountry(option.value);
  };

  return (
    <div style={{ width, height }}>
      <Select
        options={countryOptions}
        value={countryOptions.find(c => c.value === selectedCountry) || null}
        onChange={handleChange}
        isSearchable={false}
        styles={{
          control: (provided) => ({
            ...provided,
            minHeight: height,
            height: height,
            border: 'none',
            boxShadow: 'none',
          }),
          valueContainer: (provided) => ({
            ...provided,
            height: height,
            padding: '0 6px',
          }),
          input: (provided) => ({
            ...provided,
            margin: 0,
          }),
          indicatorsContainer: (provided) => ({
            ...provided,
            height: height,
          }),
          indicatorSeparator: () => ({
            display: 'none'
          }),
          dropdownIndicator: () => ({
            display: 'none'
          }),
        }}
      />
    </div>
  );
};

export default CountrySelector;
