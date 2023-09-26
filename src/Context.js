import React, { createContext, useContext, useState } from "react";

export const inputData = createContext();

export const useContextValue = () => {
  return useContext(inputData);
};

export default function GlobalCOmponents(
  { children }) {
  const [getData, setData] = useState("");
  function gettingData(data) {
    setData(data);
  }
  return (
    <>
      <inputData.Provider value={{ getData, gettingData }}>
        {children}
      </inputData.Provider>
    </>
  );
}
