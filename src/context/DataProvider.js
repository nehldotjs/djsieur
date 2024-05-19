import React, { createContext, useContext, useState, useEffect } from "react";

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
  hour = hour ? hour : 12; // the hour '0' should be '12'

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

// Custom hook to use the data
const useData = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return time;
};

// DataProvider component to wrap the application and provide the context
const DataProvider = ({ children }) => {
  const time = useData();
  return <DataContext.Provider value={time}>{children}</DataContext.Provider>;
};

// Custom hook to access the DataContext
const useDataContext = () => {
  return useContext(DataContext);
};

export { DataProvider, useDataContext, DataContext };
