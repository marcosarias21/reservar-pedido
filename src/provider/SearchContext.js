import { useContext, createContext, useState } from 'react';

const searchContext = createContext();
const searchToggleContext = createContext();
export const SearchProvider = ({ children }) => {
  const [searchUser, setSearchUser] = useState('');

  return (
    <searchToggleContext.Provider value={setSearchUser}>
      <searchContext.Provider value={searchUser}>
        {children}
      </searchContext.Provider>
    </searchToggleContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(searchContext);
};

export const useSearchHandleContext = () => {
  return useContext(searchToggleContext);
};
