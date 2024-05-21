import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import About from "./screens/About";
// import Contact from "./screens/Contact";
import Events from "./screens/Events";

function ScreenHandler() {
  return (
    <Routes>
      <Route path="/djsieur/" exact element={<HomeScreen />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/event" exact element={<Events />} />
      {/* <Route path="/contact" exact element={<Contact />} /> */}
    </Routes>
  );
}

export default ScreenHandler;
