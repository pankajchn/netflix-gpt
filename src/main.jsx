import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore.js";
import Browse from "./components/Browse.jsx";
import GPTSearch from "./components/GPTSearch.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <StrictMode>
      <BrowserRouter basename="/">
        <Routes>
          <Route>
            <Route path="/" element={<App />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/gpt-search" element={<GPTSearch />} />
          </Route>
        </Routes>
      </BrowserRouter>{" "}
    </StrictMode>
  </Provider>
);
