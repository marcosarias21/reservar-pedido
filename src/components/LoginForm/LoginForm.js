import { useForm } from 'react-hook-form';
import './loginform.scss';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form-bg'>
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
    </form>
  );
};

export default LoginForm;
