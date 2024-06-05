import React, { createContext, useContext, useState, useEffect } from "react";

import E1 from "../assets/Elvis/1.jpg";
import E2 from "../assets/Elvis/2.jpg";
import E3 from "../assets/Elvis/3.jpg";
import E4 from "../assets/Elvis/4.jpg";

import EModel from "../assets/model.png";

// Create the context
const DataContext = createContext();

// Helper function to get the current time in 12-hour format with AM/PM and date
const getCurrentTime = () => {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns month index from 0-11
  const year = date.getFullYear();
  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12;
  hour = hour ? hour : 12;

  return {
    hour,
    minute: minute < 10 ? "0" + minute : minute,
    second: second < 10 ? "0" + second : second,
    ampm,
    day,
    month: month < 10 ? "0" + month : month,
    year
  };
};

const useData = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { time, E1, E2, E3, E4, EModel };
};

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={useData()}>{children}</DataContext.Provider>
  );
};

const useDataContext = () => {
  return useContext(DataContext);
};

export { DataProvider, useDataContext, DataContext };
