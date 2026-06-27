import React, { createContext, useContext, useRef } from "react";
import homepageData from "../info/homepage.json";

export const HomeContext = createContext(null);

export const HomePageProvider = ({ children }) => {
  const value = useRef(homepageData);

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
  
  return context.current;
};