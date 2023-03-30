import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const useLogin = () => {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const resp = await fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    if (resp.ok) {
      localStorage.setItem('User', JSON.stringify(json));
      navigate('/home');
      if (json.user.rol === 'admin') { navigate('/admin'); }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: json.message,
      });
    }
  };
  return onSubmit;
};

export default useLogin;
