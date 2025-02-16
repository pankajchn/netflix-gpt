/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import Signup from "./components/Signup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Browse from "./components/Browse";
import YoutubePlayer from "./components/YoutubePlayer";

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
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/player/:id" element={<YoutubePlayer />} />
      </Routes>
    </div>
  );
};
export default App;
