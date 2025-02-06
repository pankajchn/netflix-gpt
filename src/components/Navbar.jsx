import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { useState } from "react";
import searchIcon from "../../assets/search_icon.svg";
import { useDispatch } from "react-redux";
import { toggleGPTSearchComponent } from "../utils/gptSearchSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();

  const auth = getAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const showGPTSearchComponent = () => {
    dispatch(toggleGPTSearchComponent());
  };

  return (
    <div>
      <div className="navbar bg-black fixed z-[1]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <img src={NETFLIX_LOGO} className="w-32 cursor-pointer" />
        </div>
        <div className="navbar-center hidden lg:flex relative right-[35rem]">
          <ul className="menu menu-horizontal px-1 font-poppins">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>TV Shows</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>New & Popular</a>
            </li>
            <li>
              <a>My List</a>
            </li>
          </ul>
        </div>

        <div className="mr-3 font-poppins">
          <select name="languages">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="mr-2">
          <button
            className="flex items-center gap-2"
            onClick={showGPTSearchComponent}
          >
            <span className="font-poppins">GPT Search</span>
            <img src={searchIcon} />
          </button>
        </div>

        <div className="relative left-4">
          <button
            className="flex justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={USER_AVATAR} />
            <span className={`ms-[5px] ${isOpen ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-40 w-32  shadow-lg rounded-lg overflow-hidden">
              <ul className="border-2 border-white bg-[#191919] rounded-lg">
                <li
                  onClick={handleSignOut}
                  className="px-4 py-2 underline z-[1] text-white cursor-pointer"
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
