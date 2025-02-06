/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import Signup from "./components/Signup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(function () {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({ uid: user.uid, email: user.email, name: user.displayName })
        );
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <Signup />
    </div>
  );
};
export default App;
