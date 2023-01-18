import { useContext } from 'react';
import { Container } from '../../components/Container';
import { RegisterForm } from '../../components/RegisterForm';
import alertContext from '../../provider/AlertContext';

const Register = () => {
  const { showAlert, message } = useContext(alertContext);

  return (
    <Container>
      <RegisterForm showAlert={showAlert} message={message} />
    </Container>
  );
};
export default Register;
