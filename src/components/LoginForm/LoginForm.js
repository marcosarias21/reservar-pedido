import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import './loginform.scss';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = useLogin();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
      <h4 className='text-center mt-3 mb-5 fw-bold'>Login</h4>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('email')} required/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register('password')} required/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className='d-flex flex-column justify-content-center my-3'>
        <button type='submit' className='btn btn-primary w-100 px-5 py-3 fw-bold text-center'>Loguearse</button>
        <Link className='text-center mt-3' to='/register'> No tenes cuenta? Registrate!</Link>
      </div>
    </form>
  );
};

export default LoginForm;
