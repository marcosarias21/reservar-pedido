import { createContext, useState } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState();

  const data = { dataUser, setDataUser };

  return (<userContext.Provider value={data}> {children} </userContext.Provider>);
};

export default userContext;
