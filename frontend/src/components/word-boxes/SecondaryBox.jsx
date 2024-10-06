import { useData } from "../../context/dataContext";

const SecondaryBox = ({
  title,
  textPosition,
  number,
  letters,
  numbers_list,
  type,
}) => {
  const { selectedLang } = useData();

  return (
    <div className="relative secondary-box w-full py-[1rem] border-b-light">
      <div
        className={`text-center flex flex-col items-center gap-[0.5rem] w-full ${textPosition}`}
        style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
      >
        <div
          className="flex items-center flex-col gap-[0.2rem]"
          style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
        >
          <span
            className="text-[#3430FF] font-medium"
            style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
          >
            {title}
          </span>

          <span
            className={`text-[#69696F] text-[0.8rem] font-medium word-box-sub ${
              selectedLang === "en" ? "min-w-[11.2rem]" : "min-w-[9.3rem]"
            }  mb-[-0.2rem]`}
            style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
          >
            {selectedLang === "ir" ? (
              <>در ابجد {type} برابر است </>
            ) : (
              <>in Simspanle {type} equals</>
            )}
          </span>

          <span
            className="text-[#817EFF] font-medium"
            style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
          >
            {number}
          </span>
        </div>

        <div
          className="flex flex-col justify-center text-[#817EFF] flex-wrap"
          style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
        >
          <div
            className={`flex items-center flex-wrap justify-center ${
              selectedLang === "en" ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {letters?.map((letter, index) => (
              <span key={index}>
                <span className="flex flex-col items-center min-w-[2rem]">
                  <span>{letter}</span>
                  <span
                    className={`bg-[#817EFF] h-[1px] w-[14px] mt-[0.05rem] min-w-[1rem]`}
                  ></span>
                </span>
                <span className="min-w-[2rem] text-center">
                  {numbers_list[index]}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBox;
