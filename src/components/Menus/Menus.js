import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import userContext from '../../provider/UserContext';

const Menus = ({ imagen, nombre }) => {
  const { dataUser } = useContext(userContext);
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
    console.log(resp.ok);
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
        text: 'Algo salio mal!',
      });
    }
  };
  useEffect(() => {
    const date = new Date();
    setData({
      email: dataUser?.user.email,
      nuevoPedido: nombre,
      hora: date.toLocaleDateString(),
    });
  }, [data.nuevoPedido]);

  return (
    <div className="card col-4">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <button onClick={addProduct} className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
};

export default Menus;
