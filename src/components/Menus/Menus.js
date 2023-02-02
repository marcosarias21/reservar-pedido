import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './menus.scss';

const Menus = ({ imagen, nombre }) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const user = JSON.parse(localStorage.getItem('User'));
  const [data, setData] = useState({
    id: '',
    nuevoPedido: '',
    hora: '',
  });

  const addProduct = async () => {
    const resp = await fetch('http://localhost:8000/users', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
    console.log(json);
    if (resp.ok) {
      Swal.fire(
        'Confirmado!',
        `Reservaste ${json.nuevoPedido}`,
        'success',
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: json.message,
      });
    }
  };

  useEffect(() => {
    const date = new Date();
    setData({
      email: user?.user.email,
      nuevoPedido: nombre,
      hora: date.toLocaleDateString(),
    });
  }, [data.nuevoPedido]);

  return (
    <div className="card col-3 mt-5 mx-1">
      <img src={imagen} className="card-img-top pt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <button onClick={() => setConfirmOrder(!confirmOrder)} className="btn btn-outline-primary ">Reservar pedido</button>
        {confirmOrder ? <div className='d-flex flex-column'>
                          <h5 className='text-dark'>Estas por reservar {nombre}</h5>
                          <button className='btn btn-danger mb-2' onClick={() => setConfirmOrder(false)}>Cancelar</button>
                          <button className='btn btn-success' onClick={addProduct}>Confirmar</button>
                        </div> : null}
      </div>
    </div>
  );
};

export default Menus;
