import React, { createContext, useContext, useMemo } from "react";
import homepageData from "../info/homepage.json";

export const HomeContext = createContext(homepageData);

export const HomePageProvider = ({ children }) => {
  const value = useMemo(() => ({ homepage: homepageData }), []);

  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  );
};

export const HomePageContext = () => {
  const context = useContext(HomeContext);
  
  if (context === undefined) {
    throw new Error("homePageContext must be used within a HomePageProvider");
  }
  
  return context;
};