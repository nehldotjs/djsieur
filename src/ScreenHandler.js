import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";

function ScreenHandler() {
  return (
    <Routes>
      <Route path="/djsieur/" exact element={<HomeScreen />} />
    </Routes>
  );
}

export default ScreenHandler;
