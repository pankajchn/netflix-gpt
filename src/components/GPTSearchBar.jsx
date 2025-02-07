import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  return (
    <div>
      <form className="flex justify-center">
        <input
          placeholder={lang[langKey].placeholder}
          className="px-5 py-4 w-[30rem] bg-white rounded-sm text-black"
        />
        <button className="bg-red-600 text-white px-5 py-4 font-bold font-poppins rounded-e-sm hover:bg-opacity-80">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GPTSearchBar;
