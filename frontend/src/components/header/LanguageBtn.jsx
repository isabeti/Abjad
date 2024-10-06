const LanguageBtn = ({ children, active, onClick }) => {
  return (
    <button
      className={`jump w-[5.25rem] h-[2.5rem] text-white rounded-[0.625rem] flex justify-center items-center font-bold text-[1.25rem] ${
        active ? "bg-[#1136FF]" : "bg-[#635FF9]"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LanguageBtn;
