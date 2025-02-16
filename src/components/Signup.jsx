import { useRef, useState } from "react";
import { validateSignUpData } from "../utils/validation.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { BG_LARGE, NETFLIX_LOGO } from "../utils/constants.js";

const Signup = () => {
  const navigate = useNavigate();

  const [isUserSignIn, setIsUserSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleSignUp = () => setIsUserSignIn(!isUserSignIn);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const auth = getAuth(app);

  const handleSignUp = async () => {
    const message = validateSignUpData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);

    if (message) return;

    if (!isUserSignIn) {
      if (!name.current.value) return setErrorMsg("Please enter your name");

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName: name.current.value });
        navigate("/");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " - " + errorMessage);
      }
    } else {
      try {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        navigate("/");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " - " + errorMessage);
      }
    }
  };

  return (
    <div className="bg-black h-screen relative">
      <img
        src={BG_LARGE}
        alt="bg large"
        className="hidden md:block fixed inset-0 bg-opacity-50 bg-gradient-to-r from-black to-transparent opacity-40 "
      />

      <div className="absolute top-[8px] left-4 md:top-8 md:left-36 z-20 text-center rounded-lg">
        <img
          src={NETFLIX_LOGO}
          alt="logo"
          className="fill-[#e50914] w-32 md:w-44"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full px-5 md:w-[28rem] absolute top-20 md:top-32 md:left-[35rem] bg-[#000000b3] rounded-md md:px-16 md:py-12"
      >
        <div>
          <h2 className="text-white text-3xl md:text-3xl mt-6 font-bold md:text-left">
            {isUserSignIn ? "Sign In" : "Sign Up"}
          </h2>
        </div>

        <div className="my-10">
          {!isUserSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="input border-gray-600 w-full  md:px-3 md:py-7 bg-transparent md:bg-[#161616b3] bg-opacity-70 rounded-md text-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="input border-gray-600 w-full md:px-3 md:py-7 bg-transparent md:bg-[#161616b3] bg-opacity-70 mt-3 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="input  border-gray-600 w-full px-5 md:px-3 md:py-7 bg-transparent md:bg-[#161616b3] bg-opacity-70 my-3 rounded-md text-white"
          />
          <p className="text-red-800 text-center">{errorMsg}</p>
          <button
            type="submit"
            className="btn bg-[#e50914] text-[18px] md:text-base w-full mt-4 text-white font-semibold rounded-md hover:bg-[#e50914] hover:bg-opacity-80"
            onClick={handleSignUp}
          >
            {isUserSignIn ? "Sign In" : "Sign Up"}
          </button>
        </div>
        {isUserSignIn ? (
          <p className="text-white text-center ">
            New to Netflix?{" "}
            <span
              className="font-semibold cursor-pointer hover:underline"
              onClick={toggleSignUp}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-white text-center ">
            Existing user?{" "}
            <span
              className="font-semibold cursor-pointer hover:underline"
              onClick={toggleSignUp}
            >
              Sign in now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
