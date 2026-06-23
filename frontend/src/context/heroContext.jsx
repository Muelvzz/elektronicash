import React, { createContext, useContext, useMemo } from "react";
import homepageData from "../info/homepage.json";

export const HomePageContext = createContext(homepageData);

export const HomePageProvider = ({ children }) => {
  const value = useMemo(() => ({ homepage: homepageData }), []);

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  
  if (context === undefined) {
    throw new Error("useHomePage must be used within a HomePageProvider");
  }
  
  return context;
};