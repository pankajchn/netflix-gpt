import GPTSearchBar from "./GPTSearchBar";
import SearchResultsList from "./SearchResultsList";

const GPTSearch = () => {
  return (
    <div className="relative top-[69px] h-screen text-center bg-black">
      
      <GPTSearchBar />
      <SearchResultsList />
    </div>
  );
};
export default GPTSearch;

