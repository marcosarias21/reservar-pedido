import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEdit, MdSave, MdDelete } from 'react-icons/md';
import useDeleteMenu from '../../hooks/useDeleteMenu';
import useHandleMenu from '../../hooks/useHandleMenu';
import './menusadmin.scss';

const MenusAdmin = ({ nombre, empresa, _id }) => {
  const { register, handleSubmit } = useForm();
  const [edit, setEdit] = useState(false);
  const handleMenu = useHandleMenu();
  const deleteMenu = useDeleteMenu();

  return (
      <tbody className='border-table-body'>
        <tr className='row table-row'>
          <td className='d-none'>
            <input value={_id} className="form-control fw-bold border-0" {...register('id')} readOnly/>
          </td>
          <td className='col-7 col-sm-5 col-md-5 col-lg-6 col-xl-6 col-xxl-6'>
            {
            edit
              ? <input type="text" defaultValue={nombre} className="form-control border-0" {...register('nombre')} />
              : <input type="text" value={nombre} className="form-control fw-bold border-0" readOnly/>
              }
          </td>
          <td className='col-5 col-sm-5 col-md-5 col-lg-4 col-xl-4 col-xxl-5'>
            <select className="form-select border-0" aria-label="Default select example" disabled={edit === false} {...register('empresa')}>
              <option selected> {empresa}</option>
              <option value={empresa === 'Refinor' ? 'Ypf' : 'Refinor'}>{empresa === 'Refinor' ? 'Ypf' : 'Refinor'}</option>
              <option value={empresa === 'Ambas' ? 'Ypf' : 'Ambas'}>{empresa === 'Ambas' ? 'Ypf' : 'Ambas'}</option>
            </select>
          </td>
          <td className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-1'>
            <button className="btn btn-primary" title='Editar menu' onClick={() => setEdit(!edit)}><MdEdit /></button>
            <button type='submit' className="btn btn-success mx-1" title='Guardar cambios' onClick={handleSubmit(handleMenu)}><MdSave /></button>
            <button className="btn btn-danger" title='Eliminar menu' onClick={handleSubmit(deleteMenu)}><MdDelete /></button>
          </td>
        </tr>
      </tbody>
  );
};

export default MenusAdmin;
