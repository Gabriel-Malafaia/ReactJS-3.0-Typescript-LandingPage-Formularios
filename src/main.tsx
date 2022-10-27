import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomeContextProvider } from "./context/Home";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HomeContextProvider>
      <GlobalStyles />
      <ToastContainer />
      <App />
    </HomeContextProvider>
  </React.StrictMode>
);
