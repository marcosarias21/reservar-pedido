import { createContext, useState } from 'react';

const alertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const data = {
    message,
    setMessage,
    showAlert,
    setShowAlert,
  };

  return (<alertContext.Provider value={data}>{children}</alertContext.Provider>);
};

export default alertContext;
