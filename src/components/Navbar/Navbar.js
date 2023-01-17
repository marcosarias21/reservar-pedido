import { useContext } from 'react';
import userContext from '../../provider/UserContext';

const Navbar = ({ dataUser }) => {
  const { setDataUser } = useContext(userContext);
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">Cliente: {dataUser?.nombre} {dataUser?.apellido} </span>
        <span className="navbar-brand" href="#">Empresa: {dataUser?.empresa} </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">{dataUser?.nombre} {dataUser?.apellido}</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-primary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Detalles
                </a>
                <ul className="dropdown-menu dropdown-menu">
                  <li><a className="dropdown-item" href="#">Mis pedidos</a></li>
                  <li><button className="dropdown-item" onClick={() => setDataUser(null)}>Cerrar Sesion</button></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
