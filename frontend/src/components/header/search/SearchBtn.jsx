import { useData } from "../../../context/dataContext";

const SearchBtn = () => {
  const {
    wordError,
    enteredWord,
    setEnteredWord,
    handleSearch,
    setShowWordBoxes,
    selectedLang,
    serchEntered,
    setSerchEntered,
  } = useData();

  const handleEnterWord = () => {
    handleSearch();
    setShowWordBoxes(true);
    setSerchEntered(true);
  };

  return (
    <button
      className={`${
        wordError || enteredWord === "" ? "opacity-50" : "opacity-100"
      } w-[5.3125rem] h-[3.875rem] bg-[#1136FF] jump flex justify-center items-center rounded-[0.9375rem]`}
      disabled={wordError || enteredWord === "" ? true : false}
      onClick={handleEnterWord}
      onenter
    >
      <svg
        width="31"
        height="32"
        viewBox="0 0 31 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.5 31L23.2616 23.7617M23.2616 23.7617C24.4998 22.5235 25.4819 21.0536 26.152 19.4359C26.8221 17.8182 27.167 16.0843 27.167 14.3333C27.167 12.5823 26.8221 10.8485 26.152 9.23075C25.4819 7.61303 24.4998 6.14314 23.2616 4.90499C22.0235 3.66685 20.5536 2.68469 18.9359 2.01461C17.3182 1.34453 15.5843 0.999649 13.8333 0.999649C12.0823 0.999649 10.3484 1.34453 8.73073 2.01461C7.11302 2.68469 5.64312 3.66685 4.40498 4.90499C1.90443 7.40554 0.499634 10.797 0.499634 14.3333C0.499634 17.8696 1.90443 21.2611 4.40498 23.7617C6.90553 26.2622 10.297 27.667 13.8333 27.667C17.3696 27.667 20.7611 26.2622 23.2616 23.7617Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default SearchBtn;
