import { useContext } from 'react';
import { RegisterForm } from '../../components/RegisterForm';
import alertContext from '../../provider/AlertContext';

const Register = () => {
  const { showAlert, message } = useContext(alertContext);

  return (
    <RegisterForm showAlert={showAlert} message={message} />
  );
};
export default Register;
