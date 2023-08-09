import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/theme";
import "./assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { MainNavigation } from "./components/MainNavigation";
import loader from "../src/assets/images/loader.gif";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="loader-wrapper">
          <img src={loader} alt="loader" />
        </div>
        <MainNavigation />
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
