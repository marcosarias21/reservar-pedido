import { useContext } from 'react';
import userContext from '../../provider/UserContext';
import { OffCanvasAdmin } from '../OffCanvasAdmin';
import { OffCanvasUser } from '../OffCanvasUser';

const Navbar = ({ dataUser }) => {
  const { setDataUser } = useContext(userContext);
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">{dataUser?.rol}: {dataUser?.nombre} {dataUser?.apellido} </span>
        <span className="navbar-brand" href="#">Empresa: {dataUser?.empresa} </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">{dataUser?.nombre} {dataUser?.apellido}</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          {dataUser?.rol === 'Cliente' ? <OffCanvasUser /> : <OffCanvasAdmin /> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
