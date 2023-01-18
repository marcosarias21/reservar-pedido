import React, { useContext } from 'react';
import { Container } from '../../components/Container';
import { LoginForm } from '../../components/LoginForm';
import alertContext from '../../provider/AlertContext';

const Login = () => {
  const { message, showAlert } = useContext(alertContext);
  return (
    <Container>
      <LoginForm showAlert={showAlert} message={message} />
    </Container>
  );
};

export default Login;
