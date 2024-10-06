import { useData } from "../../context/dataContext";
import LanguageBtn from "./LanguageBtn";
import Search from "./search/Search";
import LogoImage from "../../assets/images/A letter Logo design_20240420_174948_0000.png";
import { useEffect } from "react";

const Header = () => {
  const { selectedLang, handleSelectLang, setEnteredWord } = useData();

  return (
    <div className="w-full relative flex flex-col items-center z-20 mt-[1rem]">
      {/* logo */}
      <div className="w-[10rem] mb-[-1rem]">
        <img src={LogoImage} alt="" className="object-cover" />
      </div>

      <h2
        className="font-bold title text-center"
        style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
      >
        {selectedLang === "ir"
          ? "لطفا برای استفاده، یک کلمه یا یک عدد را تایپ کنید."
          : "Please type a word or a number to use."}
      </h2>

      <Search />

      <div className="flex items-center gap-[15px] mt-[1rem]">
        <LanguageBtn
          active={selectedLang === "ir" && true}
          onClick={() => {
            handleSelectLang("ir");
            setEnteredWord("");
          }}
        >
          IR
        </LanguageBtn>
        <LanguageBtn
          active={selectedLang === "en" && true}
          onClick={() => {
            handleSelectLang("en");
            setEnteredWord("");
          }}
        >
          EN
        </LanguageBtn>
      </div>
    </div>
  );
};

export default Header;
