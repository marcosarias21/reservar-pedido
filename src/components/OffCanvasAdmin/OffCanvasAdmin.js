import { Link } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';

const OffCanvasAdmin = () => {
  const logOut = useLogout();
  return (
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Detalles</a>
        <ul className="dropdown-menu dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/admin/clients">Clientes</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/admin/menus">Menus</Link>
          </li>
          <li>
            <button className="dropdown-item" onClick={logOut}>Cerrar Sesion</button>
          </li>
        </ul>
        </li>
      </ul>
      <form className="d-flex mt-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar Cliente" aria-label="Search" />
        <button className="btn btn-success" type="submit">Buscar</button>
       </form>
    </div>
  );
};

export default OffCanvasAdmin;
