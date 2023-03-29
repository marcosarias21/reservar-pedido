import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { optionsCompany } from '../../helpers/optionsCompany';
import { optiosMenu } from '../../helpers/optionsMenu';

const ModalForm = () => {
  const { register, handleSubmit, control } = useForm();

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
              <div className='mb-3'>
                <label htmlFor='type'>Tipo de menu:</label>
                <Controller name="type" control={control} defaultValue="" render={({ field }) => (
                    <Select options={optiosMenu} value={optiosMenu.value}
                      onChange={(e) => field.onChange(e?.value)} />
                )}
                />
              </div>
              <div>
              <label htmlFor='type'>Para que empresa:</label>
                <Controller name="empresa" control={control} defaultValue="" render={({ field }) => (
                  <Select options={optionsCompany} value={optionsCompany.value}
                    onChange={(e) => field.onChange(e?.value)} />
                )}
                />
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
