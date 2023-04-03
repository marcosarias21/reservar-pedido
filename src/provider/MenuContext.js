import { createContext, useState } from 'react';

const menuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [searchMenu, setSearchMenu] = useState('');

  const data = {
    menuData,
    setMenuData,
    setFilteredMenu,
    filteredMenu,
    searchMenu,
    setSearchMenu,
  };

  return (<menuContext.Provider value={data}> {children} </menuContext.Provider>);
};

export default menuContext;
