import React, { useState, useRef } from "react";
import { useData } from "../context/dataContext";

const SelectOption = () => {
  const {
    selectedLang,
    filterOptions,
    selectedFilterValue,
    setSelectedFilterValue,
    handleFilterOptionClick,
  } = useData();

  const [isActive, setIsActive] = useState(false);

  const selectRef = useRef(null);

  const toggleSelect = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`custom-select relative z-[50] !text-[#52545B] ${
        isActive ? "active" : ""
      }`}
    >
      <button
        className="select-button border border-[#1136FF]"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isActive}
        aria-controls="select-dropdown"
        onClick={toggleSelect}
        ref={selectRef}
      >
        <span className="selected-value">{selectedFilterValue}</span>
        <span className="arrow"></span>
      </button>
      <ul
        className="select-dropdown bg-[#CDCDEE]"
        role="listbox"
        id="select-dropdown"
      >
        {filterOptions.map((option) => (
          <li
            key={option.label}
            role="option"
            tabIndex="0"
            onClick={() => {
              handleFilterOptionClick(option.label);
              setIsActive(false);
            }}
          >
            <input type="radio" id={option.label} name="social-account" />
            <label htmlFor={option.label} className=" capitalize">
              <i className={option.icon}></i>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectOption;
