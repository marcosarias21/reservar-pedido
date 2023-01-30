import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './menus.scss';

const Menus = ({ imagen, nombre }) => {
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
    if (resp.ok) {
      Swal.fire(
        'Success!',
        'Reservaste un pedido!',
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
        <button onClick={addProduct} className="btn btn-outline-primary ">Reservar pedido</button>
      </div>
    </div>
  );
};

export default Menus;
