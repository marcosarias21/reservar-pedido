import { OffCanvasAdmin } from '../OffCanvasAdmin';
import { OffCanvasUser } from '../OffCanvasUser';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">{user?.rol}: {user?.nombre} {user?.apellido} </span>
        <span className="navbar-brand" href="#">Empresa: {user?.empresa} </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">{user?.nombre} {user?.apellido}</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {user?.rol === 'Cliente' ? <OffCanvasUser /> : <OffCanvasAdmin /> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
