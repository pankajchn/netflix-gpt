import { getAuth, signOut } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { useState } from "react";
import searchIcon from "../../assets/search_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPTSearchComponent } from "../utils/gptSearchSlice.js";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const isShowGPTSearchComponent = useSelector(
    (store) => store.gptSearch?.gptSearchComponent
  );

  const auth = getAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const showGPTSearchComponent = () => {
    dispatch(toggleGPTSearchComponent());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="navbar flex justify-between bg-black fixed z-[1]">
      <div>
        <img src={NETFLIX_LOGO} className="w-28 md:w-32 cursor-pointer" />
      </div>
      <div className="me-2 md:me-8">
        {isShowGPTSearchComponent && (
          <div className="md:me-9 font-poppins hidden md:block">
            <select
              name="languages"
              className="outline-none py-[5px]"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {!isShowGPTSearchComponent ? (
          <div className="me-4 md:me-3 md:px-2 md:border-[1px] rounded-sm md:hover:bg-gray-900">
            <button
              className="flex items-center text-xl"
              onClick={showGPTSearchComponent}
            >
              <span className="font-poppins">gpt</span>
              <img className="ms-[2px]" src={searchIcon} />
            </button>
          </div>
        ) : (
          <div className="me-4 md:me-7 md:px-2 md:border-[1px] rounded-sm md:hover:bg-gray-900">
            <button
              onClick={showGPTSearchComponent}
              className="font-poppins md:text-[18px]"
            >
              Home
            </button>
          </div>
        )}

        <div className="relative left-[10px] md:left-4">
          <button
            className="flex justify-between mt-[6px] md:mt-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={USER_AVATAR} className="md:w-8" />
            <span
              className={`ms-[2px] md:ms-[5px] ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ▲
            </span>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-8 w-32  shadow-lg rounded-lg overflow-hidden">
              <ul className="border-2 border-white bg-[#191919] rounded-lg">
                <li
                  onClick={handleSignOut}
                  className="px-4 py-2 z-[1] text-white cursor-pointer"
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
