import { useData } from "../context/dataContext";
import Slider from "../components/slider/Slider";
import WordBoxes from "../components/word-boxes/WordBoxes";
import WordTable from "../components/word-table/WordTable";
import SelectOption from "./SelectOption";

const Content = () => {
  const { showWordBoxes } = useData();

  return (
    <>
      {showWordBoxes ? (
        <>
          <WordBoxes />
          <div className="flex w-full h-[10rem] relative z-[30] mb-[-5rem]">
            <SelectOption name="hi" />
          </div>
          <WordTable />
        </>
      ) : (
        <Slider />
      )}
    </>
  );
};

export default Content;
