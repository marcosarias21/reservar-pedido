import { createContext, useState } from 'react';

const menuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);

  const data = { menuData, setMenuData };

  return (<menuContext.Provider value={data}> {children} </menuContext.Provider>);
};

export default menuContext;
