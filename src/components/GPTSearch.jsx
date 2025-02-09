import GPTSearchBar from "./GPTSearchBar";
import SearchResultsList from "./SearchResultsList";

const GPTSearch = () => {
  return (
    <div className="relative top-40 text-center">
      <GPTSearchBar />
      <SearchResultsList/>
    </div>
  );
};
export default GPTSearch;
