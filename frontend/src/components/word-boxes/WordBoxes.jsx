import { useData } from "../../context/dataContext";
import SecondaryBox from "./SecondaryBox";

const WordBoxes = () => {
  const { boxesData } = useData();

  const lang = localStorage.getItem("selectedLang");

  return (
    <div className="w-full md:w-[53%] flex justify-start px-[1rem] mx-auto z-50">
      <div className="flex flex-col gap-[1rem] justify-center items-start w-full h-full mt-[1.75rem] md:ml-[-4.5rem] word-boxes z-50">
        <SecondaryBox
          letters={
            lang === "ir" ? boxesData?.kabir.letters : boxesData?.hebrew.letters
          }
          numbers_list={
            lang === "ir"
              ? boxesData?.kabir.list_abjad_number
              : boxesData?.hebrew.list_abjad_number
          }
          type={lang === "ir" ? "کبیر" : "hebrew"}
          title={lang === "ir" ? boxesData?.kabir.word : boxesData?.hebrew.word}
          textPosition="right-[-3.5rem] top-[1rem]"
          number={
            lang === "ir"
              ? boxesData?.kabir.abjad_number
              : boxesData?.hebrew.abjad_number
          }
          // values={values?.kabir.parts}
          background={
            <svg
              width="293"
              height="172"
              viewBox="0 0 293 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M292.203 18.6956C292.203 8.7145 284.112 0.623188 274.131 0.623188H129.23C123.802 0.623188 118.661 3.06326 115.229 7.26886L5.3732 141.878C-4.2601 153.682 4.13882 171.377 19.3747 171.377H274.131C284.112 171.377 292.203 163.285 292.203 153.304V18.6956Z"
                stroke="url(#paint0_linear_201_296)"
                stroke-width="1.24638"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_296"
                  x1="292.826"
                  y1="0"
                  x2="-108.856"
                  y2="185.459"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0500FF" />
                  <stop offset="1" stop-color="#DB5CAD" />
                </linearGradient>
              </defs>
            </svg>
          }
        />
        {/* 
        <PrimaryBox
          type='کبیر' title={lang === 'ir' ? lang === "ir" ? values[1].word_fa : values[1].word_en}
          sub={lang === "ir" ? values[1].sub_fa : values[1].sub_en}
          number={ lang === "ir" ? 
            lang === "ir" ? values[1].number_fa : values[1].number_en
          }
          values={values[1].parts}
        /> */}

        <SecondaryBox
          letters={
            lang === "ir"
              ? boxesData?.saghit.letters
              : boxesData?.english.letters
          }
          numbers_list={
            lang === "ir"
              ? boxesData?.saghit.list_abjad_number
              : boxesData?.english.list_abjad_number
          }
          type={lang === "ir" ? "سقیط" : "english"}
          title={
            lang === "ir" ? boxesData?.saghit.word : boxesData?.english.word
          }
          textPosition="right-[-3.5rem] top-[1rem]"
          number={
            lang === "ir"
              ? boxesData?.saghit.abjad_number
              : boxesData?.english.abjad_number
          }
          // values={values?.saghit.parts}
          background={
            <svg
              width="293"
              height="172"
              viewBox="0 0 293 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.623188 18.6956C0.623188 8.7145 8.71451 0.623188 18.6957 0.623188H163.596C169.024 0.623188 174.165 3.06326 177.597 7.26886L287.453 141.878C297.086 153.682 288.687 171.377 273.451 171.377H18.6956C8.71448 171.377 0.623188 163.285 0.623188 153.304V18.6956Z"
                stroke="url(#paint0_linear_201_297)"
                stroke-width="1.24638"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_297"
                  x1="0"
                  y1="0"
                  x2="401.682"
                  y2="185.459"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0500FF" />
                  <stop offset="1" stop-color="#DB5CAD" />
                </linearGradient>
              </defs>
            </svg>
          }
        />

        <SecondaryBox
          letters={
            lang === "ir" ? boxesData?.vasit.letters : boxesData?.simple.letters
          }
          numbers_list={
            lang === "ir"
              ? boxesData?.vasit.list_abjad_number
              : boxesData?.simple.list_abjad_number
          }
          type={lang === "ir" ? "وسیط" : "simple"}
          title={lang === "ir" ? boxesData?.vasit.word : boxesData?.simple.word}
          textPosition="right-[-3.5rem] top-[1rem]"
          number={
            lang === "ir"
              ? boxesData?.vasit.abjad_number
              : boxesData?.simple.abjad_number
          }
          // values={values?.vasit.parts}
          background={
            <svg
              width="293"
              height="172"
              viewBox="0 0 293 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.623188 18.6956C0.623188 8.7145 8.71451 0.623188 18.6957 0.623188H163.596C169.024 0.623188 174.165 3.06326 177.597 7.26886L287.453 141.878C297.086 153.682 288.687 171.377 273.451 171.377H18.6956C8.71448 171.377 0.623188 163.285 0.623188 153.304V18.6956Z"
                stroke="url(#paint0_linear_201_297)"
                stroke-width="1.24638"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_201_297"
                  x1="0"
                  y1="0"
                  x2="401.682"
                  y2="185.459"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0500FF" />
                  <stop offset="1" stop-color="#DB5CAD" />
                </linearGradient>
              </defs>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default WordBoxes;
