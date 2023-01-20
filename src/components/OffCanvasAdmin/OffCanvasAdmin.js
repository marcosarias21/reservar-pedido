import { Link } from 'react-router-dom';

const OffCanvasAdmin = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.href = '/login';
  };
  return (
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Detalles</a>
        <ul className="dropdown-menu dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">Clientes</a>
          </li>
          <li>
            <Link className="dropdown-item" to="/menus">Menus</Link>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => logOut()}>Cerrar Sesion</button>
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
