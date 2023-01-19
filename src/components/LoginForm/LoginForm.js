import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Alert } from '../Alert';
import './loginform.scss';

const LoginForm = ({ showAlert, message }) => {
  const { register, handleSubmit } = useForm();
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
    console.log(json);
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
      <h4 className='text-center mt-3 mb-5 fw-bold'>Login</h4>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('email')} />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register('password')} />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className='d-flex justify-content-center my-3'>
        <button type='submit' className='btn btn-primary w-100 px-5 py-3 fw-bold text-center'>Loguearse</button>
      </div>
      {showAlert ? <Alert message={message} /> : null }
    </form>
  );
};

export default LoginForm;
