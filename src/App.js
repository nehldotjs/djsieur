import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ScreenHandler from "./ScreenHandler";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataProvider";

const App = () => {
  return (
    <Router>
      <DataProvider>
        <div className="App">
          <Nav />
          <ScreenHandler />
          <Footer />
        </div>
      </DataProvider>
    </Router>
  );
};

export default App;
