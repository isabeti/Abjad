import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";

const Search = () => {
  return (
    <div className="w-full flex justify-between md:justify-center mt-[1.0625rem] gap-[0.6875rem]">
      <SearchBtn />
      <SearchBar />
    </div>
  );
};

export default Search;
