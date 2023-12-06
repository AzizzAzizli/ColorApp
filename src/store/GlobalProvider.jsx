import React, { createContext, useState } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [colors, setColors] = useState({});
  const [allPalettes,setAllPalettes] = useState([])
  let values = {
    colors,
    setColors,
    allPalettes,
    setAllPalettes,
  };

  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  );
};
