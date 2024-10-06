import { useEffect, useState } from "react";
import { useData } from "../../../context/dataContext";
import axios from "axios";

const SearchBar = () => {
  const {
    selectedLang,
    enteredWord,
    setEnteredWord,
    wordError,
    setwordError,
    setShowWordBoxes,
    serchEntered,
    setSerchEntered,
    handleSearch,
  } = useData();

  const containsFarsi = /[\u0600-\u06FF]/.test(enteredWord);
  const containsEnglish = /[a-zA-Z]/.test(enteredWord);

  const handleEnterKeyPress = async (event) => {
    if (event.key === "Enter" && !wordError && enteredWord !== "") {
      handleSearch();
      setShowWordBoxes(true);
      setSerchEntered(true);
    }
  };

  const errorText =
    selectedLang === "ir"
      ? "زبان و واژه تطابق ندارند"
      : "Language and word mismatch";

  useEffect(() => {
    const errorText =
      selectedLang === "ir"
        ? "زبان و واژه تطابق ندارند"
        : "Language and word mismatch";

    if (
      (containsFarsi && selectedLang !== "ir") ||
      (containsEnglish && selectedLang !== "en")
    ) {
      setwordError(errorText);
    } else {
      setwordError(null);
    }
  }, [selectedLang, enteredWord, containsFarsi, containsEnglish]);

  const handleInputChange = (e) => {
    const word = e.target.value;

    const regex = /^[a-zA-Z\u0600-\u06FF\s]*$/;
    if (regex.test(word)) {
      setEnteredWord(word);
    }

    if (
      (containsFarsi && selectedLang !== "ir") ||
      (containsEnglish && selectedLang !== "en")
    ) {
      setwordError(errorText);
    } else {
      setwordError(null);
    }
  };

  return (
    <div className="w-full md:w-max">
      <input
        type="text"
        onKeyDown={handleEnterKeyPress}
        placeholder={
          selectedLang === "ir"
            ? "کلمه مورد نظرتو بنویس..."
            : "Please write your desired word..."
        }
        className={`${
          wordError
            ? "border-red-600 text-red-600"
            : "border-[#6D7FDD] text-[#1136FF]"
        } w-full md:w-[33.125rem] h-[3.875rem] border bg-transparent rounded-[0.9375rem] outline-none searchbar px-[1.5625rem]`}
        value={enteredWord}
        onChange={handleInputChange}
        style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
      />
      <p
        className={`text-red-600 h-[1rem] ${
          selectedLang === "ir" ? "text-right" : "text-left"
        }`}
        style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
      >
        {wordError}
      </p>
    </div>
  );
};

export default SearchBar;
