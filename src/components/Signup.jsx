import { useRef, useState } from "react";
import { validateSignUpData } from "../utils/validation.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { BG_LARGE, NETFLIX_LOGO } from "../utils/constants.js";

const Signup = () => {
  const navigate = useNavigate();

  const [isUserSignIn, setIsUserSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleSignUp = () => setIsUserSignIn(!isUserSignIn);

  const email = useRef(null);
  const password = useRef(null);

  const auth = getAuth();

  const handleSignUp = async () => {
    const message = validateSignUpData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);

    if (message) return;

    if (!isUserSignIn) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        navigate("/browse");
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
        navigate("/browse");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " - " + errorMessage);
      }
    }
  };

  return (
    <div className="h-screen relative ">
      <img src={BG_LARGE} alt="bg large" className=" bg-opacity-50" />

      <div className="absolute top-8 left-36 z-20">
        <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[26rem] h-[30rem] max-h-[60rem] absolute top-32 left-[35rem] bg-black bg-opacity-80 rounded-md"
      >
        <div>
          <h2 className="text-white text-3xl ms-12 mt-6 font-bold">
            {isUserSignIn ? "Sign In" : "Sign Up"}
          </h2>
        </div>

        <div className="my-10">
          {!isUserSignIn && (
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full max-w-xs px-3 py-4 bg-gray-800 bg-opacity-70 ms-12 rounded-md text-white"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="input input-bordered w-full max-w-xs px-3 py-4 bg-gray-800 bg-opacity-70 ms-12 mt-3 rounded-md text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs px-3 py-4 bg-gray-800 bg-opacity-70 my-3 ms-12 rounded-md text-white"
          />
          <p className="text-red-600 text-center">{errorMsg}</p>
          <button
            type="submit"
            className="btn bg-red-800 w-[20rem] mt-3 ms-12 py-3 px-2 text-white font-semibold rounded-md"
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
