import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const StateContext = createContext();

// Custom hook to use the state
const useAnimationState = () => {
  const [animation, setAnimation] = useState({
    navBtn: false,
    sideMenu: false
  });

  return { animation, setAnimation };
};

// Context provider component
const PropStateContext = ({ children }) => {
  const animationState = useAnimationState();

  return (
    <StateContext.Provider value={animationState}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to access the StateContext
const useStateContext = () => {
  return useContext(StateContext);
};

export { PropStateContext, useStateContext };
