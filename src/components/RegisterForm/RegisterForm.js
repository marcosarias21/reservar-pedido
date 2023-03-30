import { useForm } from 'react-hook-form';
import useRegister from '../../hooks/useRegister';
import './registerform.scss';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = useRegister();
  return (
      <form onSubmit={handleSubmit(onSubmit)} className='form-bg'>
        <h4 className='text-center mt-3 mb-5 fw-bold'>Registro</h4>
        <div className='d-flex justify-content-center mb-3'>
          <div className='form-floating me-3'>
            <input type="text" className="form-control" id="floatingName" {...register('nombre', { required: true })} maxLength='25' placeholder="Nombre" required />
            <label htmlFor="floatingName">Nombre</label>
          </div>
          <div className='form-floating'>
            <input type="text" className="form-control" id="floatingLastName" {...register('apellido')} placeholder="Apellido" required />
            <label htmlFor="floatingLastName">Apellido</label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" {...register('email')} placeholder="name@example.com" required />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" {...register('password')} placeholder="Password" required />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <select className="form-select form-select-md mt-4" aria-label="Default select example" {...register('empresa')} required>
          <option selected disabled>Empresa</option>
          <option value="Refinor">Refinor</option>
          <option value="Ypf">Ypf</option>
        </select>
        <div className='d-flex justify-content-center my-3'>
          <button type='submit' className='btn btn-primary w-100 px-5 py-3 fw-bold text-center'> Crear Cuenta </button>
        </div>
      </form>
  );
};

export default RegisterForm;
