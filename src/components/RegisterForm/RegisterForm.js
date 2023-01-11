import { useForm } from 'react-hook-form';
import './registerform.scss';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const resp = await fetch('http://localhost:8000/users', {
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
    <section className="d-flex flex-column justify-content-center align-items-center form-container">
      <form onSubmit={handleSubmit(onSubmit)} className='form-bg'>
        <h4 className='text-center mt-3 mb-5 fw-bold'>Registro</h4>
        <div className='d-flex justify-content-center mb-3'>
          <div className='form-floating me-3'>
            <input type="text" className="form-control" id="floatingName" {...register('nombre')} placeholder="Nombre" />
            <label htmlFor="floatingName">Nombre</label>
          </div>
          <div className='form-floating'>
            <input type="text" className="form-control" id="floatingLastName" {...register('apellido')} placeholder="Apellido" />
            <label htmlFor="floatingLastName">Apellido</label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" {...register('email')} placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" {...register('password')}placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className='d-flex justify-content-center my-3'>
          <button type='submit' className='btn btn-primary w-100 px-5 py-3 fw-bold text-center'> Crear Cuenta </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
