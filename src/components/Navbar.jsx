import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { useState } from "react";

const Navbar = () => {
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

  return (
    <div>
      <div className="navbar bg-black">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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

        <div className="relative left-72">
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
            <div className="absolute right-0 mt-40 w-32  shadow-lg rounded-lg overflow-hidden z-50">
              <ul className="bg-white text-black">
                <li
                  onClick={handleSignOut}
                  className="px-4 py-2  cursor-pointer"
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
