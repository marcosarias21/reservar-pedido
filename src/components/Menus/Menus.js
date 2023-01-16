/* eslint-disable no-underscore-dangle */
import { useContext, useEffect, useState } from 'react';
import userContext from '../../provider/UserContext';

const Menus = ({ imagen, nombre, id }) => {
  const { dataUser } = useContext(userContext);
  const [data, setData] = useState({
    nombre,
    id,
  });
  const addProduct = async (pedido, uid) => {
    setData({ nombre: pedido, id: uid });
    const resp = await fetch('http://localhost:8000/users', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await resp.json();
  };

  useEffect(() => {
    addProduct();
  }, []);

  return (
    <div className="card col-4">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <button onClick={() => addProduct(nombre, dataUser._id)} className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
};

export default Menus;
