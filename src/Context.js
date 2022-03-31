import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location,setLocation] = useState({});
  const [page,setPage] = useState({page:'',links:[]})

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text,coordinate) => {
    // find method will get me the correct page that matches 
    // the page that is coming from the botton
    // if the text that is coming from the botton matches the page value in sublinks
    const page = sublinks.find((link)=>link.page === text);
    // console.log(page) brings out the object of that particular page that is onmouseover
    setPage(page)
    setLocation(coordinate)

    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppProvider;
