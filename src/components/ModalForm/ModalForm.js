import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { optionsCompany } from '../../helpers/optionsCompany';
import { optiosMenu } from '../../helpers/optionsMenu';
import { SelectOptions } from '../SelectOptions';

const ModalForm = () => {
  const { register, handleSubmit } = useForm();

  const createMenu = async (data) => {
    const resp = await fetch('http://localhost:8000/menu', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    if (resp.ok) {
      Swal.fire(
        'Success!',
        json.message,
        'success',
      );
    }
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Menu</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Nombre del menu:</label>
                <input type="text" className="form-control" id="recipient-name" {...register('nombre')} />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">Imagen del menu:</label>
                <input type="text" className="form-control" placeholder='Ingrese la url de una imagen. Ej: https://...' id="recipient-name" {...register('imagen')} />
              </div>
              <div className="mb-3">
                <SelectOptions options={optiosMenu} register={register} type='type' selectDesc='Tipo de menu' />
              </div>
              <div className="mb-3">
                <SelectOptions options={optionsCompany} register={register} type='empresa' selectDesc='Empresa' />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" onClick={handleSubmit(createMenu)} className="btn btn-success">Crear Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
