import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEdit, MdSave, MdDelete } from 'react-icons/md';
import './menusadmin.scss';

const MenusAdmin = ({ nombre, empresa, _id }) => {
  console.log(_id);
  const { register, handleSubmit } = useForm();
  const [edit, setEdit] = useState(false);
  const handleMenu = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (edit === true) alert('Podes seleccionar los campos que podes editar');
  }, [edit]);
  return (
      <table className='table'>
        <tbody>
          <tr>
            <td className='col-2'>
              <input value={`#${_id}`} className="form-control fw-bold border-0" {...register('_id')} readOnly/>
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
                <option value={empresa} selected> {empresa}</option>
                <option value={empresa === 'Refinor' ? 'Ypf' : 'Refinor'}>{empresa === 'Refinor' ? 'Ypf' : 'Refinor'}</option>
                <option value="Ambas">Ambas</option>
              </select>
            </td>
            <td className='col-3'>
              <button className="btn btn-primary" onClick={() => setEdit(!edit)}><MdEdit /></button>
              <button type='submit' className="btn btn-success mx-1" onClick={handleSubmit(handleMenu)}><MdSave /></button>
              <button className="btn btn-danger"><MdDelete /></button>
            </td>
          </tr>
        </tbody>
      </table>
  );
};

export default MenusAdmin;
