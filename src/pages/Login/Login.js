import React, { useContext } from 'react';
import { LoginForm } from '../../components/LoginForm';
import alertContext from '../../provider/AlertContext';

const Login = () => {
  const { message, showAlert } = useContext(alertContext);
  return (
    <>
      <LoginForm showAlert={showAlert} message={message} />
    </>
  );
};

export default Login;
