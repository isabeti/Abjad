import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [selectedLang, setSelectedLang] = useState("ir");
  const [enteredWord, setEnteredWord] = useState("");
  const [wordError, setwordError] = useState("");
  const [showWordBoxes, setShowWordBoxes] = useState(false);
  const [serchEntered, setSerchEntered] = useState("ir");
  const [showTable, setShowTable] = useState(false);
  const [boxesData, setBoxesData] = useState(null);
  const [selectedFilterValue, setSelectedFilterValue] = useState("همه");

  const filterOptions =
    selectedLang === "ir"
      ? [
          { label: "همه", icon: "bx bxl-github" },
          { label: "کبیر", icon: "bx bxl-instagram" },
          { label: "صغیر", icon: "bx bxl-facebook-circle" },
          { label: "وسیط", icon: "bx bxl-linkedin-square" },
        ]
      : [
          { label: "all", icon: "bx bxl-github" },
          { label: "hebrew", icon: "bx bxl-instagram" },
          { label: "english", icon: "bx bxl-facebook-circle" },
          { label: "simple", icon: "bx bxl-linkedin-square" },
        ];

  const handleSelectLang = (lang) => {
    setSelectedFilterValue(selectedLang === "ir" ? "All" : "همه");
    setSelectedLang(lang);
    setShowWordBoxes(false);
    serchEntered === lang && localStorage.setItem("selectedLang", lang);
  };

  const handleFilterOptionClick = (value) => {
    setSelectedFilterValue(value);
  };

  const handleSearch = async () => {
    const data = { word: enteredWord };
    try {
      const response = await axios.post(
        "http://backend/api/v1/calculator/",
        data
      );
      setShowTable(true);
      localStorage.setItem("selectedLang", selectedLang);
      setBoxesData(response.data.box_data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        selectedFilterValue,
        setSelectedFilterValue,
        data,
        loading,
        handleSearch,
        boxesData,
        selectedLang,
        handleSelectLang,
        enteredWord,
        setEnteredWord,
        wordError,
        setwordError,
        showWordBoxes,
        setShowWordBoxes,
        serchEntered,
        setSerchEntered,
        showTable,
        filterOptions,
        handleFilterOptionClick,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
