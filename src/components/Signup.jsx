import { useRef, useState } from "react";
import { validateSignUpData } from "../utils/validation.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../utils/firebase.js";

const Signup = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

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
        const res = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        setShowToast(true);
        setTimeout(function () {
          setShowToast(false);
        }, 3000);

        console.log(res);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " - " + errorMessage);
      }
    } else {
      try {
        const res = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log(res);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " - " + errorMessage);
      }
    }
  };

  return (
    <div className="h-screen relative ">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
        alt="Netflix Background"
        className=" bg-opacity-50"
      />

      <div className="absolute top-8 left-36 z-20">
        {/* Netflix Logo */}
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-44"
        />
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
            className="btn btn-wide bg-red-800 w-[20rem] mt-3 ms-12 py-3 px-2 text-white font-semibold rounded-md"
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

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Sign up successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
