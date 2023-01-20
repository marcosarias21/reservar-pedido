import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEdit, MdSave, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import './menusadmin.scss';

const MenusAdmin = ({ nombre, empresa, _id }) => {
  const { register, handleSubmit } = useForm();
  const [edit, setEdit] = useState(false);

  const handleMenu = async (data) => {
    const resp = await fetch('http://localhost:8000/menu', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    if (resp.ok) {
      Swal.fire(
        'Success!',
        'Usuario editado correctamente!',
        'success',
      );
      window.location.reload();
    }
  };

  const deleteMenu = async (data) => {
    const resp = await fetch('http://localhost:8000/menu', {
      method: 'DELETE',
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
      window.location.reload();
    }
  };

  return (
      <tbody>
        <tr>
          <td className='col-3'>
            <input value={_id} className="form-control fw-bold border-0" {...register('id')} readOnly/>
          </td>
          <td className='col-4'>
            {
            edit
              ? <input type="text" defaultValue={nombre} className="form-control fw-bold border-0" {...register('nombre')} />
              : <input type="text" value={nombre} className="form-control fw-bold border-0" readOnly/>
              }
          </td>
          <td className='col-4'>
            <select className="form-select border-0" aria-label="Default select example" disabled={edit === false} {...register('empresa')}>
              <option selected> {empresa}</option>
              <option value={empresa === 'Refinor' ? 'Ypf' : 'Refinor'}>{empresa === 'Refinor' ? 'Ypf' : 'Refinor'}</option>
              <option value={empresa === 'Ambas' ? 'Ypf' : 'Ambas'}>{empresa === 'Ambas' ? 'Ypf' : 'Ambas'}</option>
            </select>
          </td>
          <td className='col-3'>
            <button className="btn btn-primary" onClick={() => setEdit(!edit)}><MdEdit /></button>
            <button type='submit' className="btn btn-success mx-1" onClick={handleSubmit(handleMenu)}><MdSave /></button>
            <button className="btn btn-danger" onClick={handleSubmit(deleteMenu)}><MdDelete /></button>
          </td>
        </tr>
      </tbody>
  );
};

export default MenusAdmin;
