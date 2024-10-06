import React, { useState } from "react";
import { useData } from "../../context/dataContext";

const slides = [
  {
    title_fa: "نکته سوم",
    title_en: "Point one:",
    content_fa:
      "درباره ماشین حساب انگلیسی Gematria. English Gematria Calculator یک ماشین حساب آنلاین برای یافتن ارزش یک کلمه یا یک عبارت در gimatria است، اما نه تنها، بلکه در پایگاه داده عبارات و کلمات بیشتری را جستجو می کند که در مقدار gematria برابر با عنصر جستجو شده است.",
    content_en:
      "About the English Gematria Calculator. The English Gematria Calculator is an online calculator to find the value of a word or phrase in gematria, but not only that, it also searches a database for more phrases and words that equal the searched gematria value.",
  },
  {
    title_fa: "نکته اول",
    title_en: "Point two:",
    content_fa:
      "درباره ماشین حساب انگلیسی Gematria. English Gematria Calculator یک ماشین حساب آنلاین برای یافتن ارزش یک کلمه یا یک عبارت در gimatria است، اما نه تنها، بلکه در پایگاه داده عبارات و کلمات بیشتری را جستجو می کند که در مقدار gematria برابر با عنصر جستجو شده است.",
    content_en:
      "About the English Gematria Calculator. The English Gematria Calculator is an online calculator to find the value of a word or phrase in gematria, but not only that, it also searches a database for more phrases and words that equal the searched gematria value.",
  },
  {
    title_fa: "نکته دوم",
    title_en: "Point three:",
    content_fa:
      "درباره ماشین حساب انگلیسی Gematria. English Gematria Calculator یک ماشین حساب آنلاین برای یافتن ارزش یک کلمه یا یک عبارت در gimatria است، اما نه تنها، بلکه در پایگاه داده عبارات و کلمات بیشتری را جستجو می کند که در مقدار gematria برابر با عنصر جستجو شده است.",
    content_en:
      "About the English Gematria Calculator. The English Gematria Calculator is an online calculator to find the value of a word or phrase in gematria, but not only that, it also searches a database for more phrases and words that equal the searched gematria value.",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { selectedLang } = useData();

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel h-[28rem] md:h-max overflow-hidden md:overflow-visible relative z-50">
      <button
        onClick={nextSlide}
        className="absolute z-50 md:right-[35.8rem] right-[1.25rem] next"
      >
        <svg
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="29.5" cy="29.5" r="29.5" fill="#3E3AFF" />
          <path
            d="M19 30H39M39 30L30 21M39 30L30 39"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </button>
      <div className="slides-container flex">
        {slides.map((slide, index) => {
          let position = index - activeIndex;
          if (position < 0) position += slides.length;
          if (position > slides.length / 2) position -= slides.length;
          let slideClass = "slide";
          if (position === 1) {
            slideClass += " active order-2";
          }
          if (position === 0) {
            slideClass += "prev order-3";
          }
          if (position === 2) {
            slideClass += "next order-1";
          }
          return (
            <div
              key={index}
              className={`${slideClass} py-[1.75rem] px-[1.875rem]`}
              style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
            >
              <span className="text-[#3F3AFF] font-bold">
                {selectedLang === "ir" ? slide.title_fa : slide.title_en}
              </span>
              <p
                className="text-[#817EFF] text-[0.875rem] slide-content font-medium mt-[0.75rem]"
                style={{ direction: selectedLang === "en" ? "ltr" : "rtl" }}
              >
                {selectedLang === "ir" ? slide.content_fa : slide.content_en}
              </p>
            </div>
          );
        })}
      </div>
      <button
        onClick={prevSlide}
        className="absolute z-50 md:left-[35.9rem] left-[1.25rem] prev"
      >
        <svg
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="29.5" cy="29.5" r="29.5" fill="#3E3AFF" />
          <g clip-path="url(#clip0_201_226)">
            <path
              d="M39.2075 30.2078H19.2075M19.2075 30.2078L28.2075 39.2078M19.2075 30.2078L28.2075 21.2078"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_201_226">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="matrix(-1 0 0 -1 41.2075 42.2078)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Slider;
