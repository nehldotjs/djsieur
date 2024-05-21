import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenHandler from "./ScreenHandler";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataProvider";
import { PropStateContext } from "./context/PropStateContext";

const App = () => {
  return (
    <Router>
      <PropStateContext>
        <DataProvider>
          <div className="App">
            <Nav />
            <ScreenHandler />
            <Footer />
          </div>
        </DataProvider>
      </PropStateContext>
    </Router>
  );
};

export default App;
