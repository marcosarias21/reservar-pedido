import { useContext } from 'react';
import userContext from '../../provider/UserContext';

const OffCanvasUser = () => {
  const { setDataUser } = useContext(userContext);
  return (
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Detalles</a>
        <ul className="dropdown-menu dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">Mis pedidos</a>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => setDataUser(null)}>Cerrar Sesion</button>
          </li>
        </ul>
        </li>
      </ul>
    </div>
  );
};

export default OffCanvasUser;
