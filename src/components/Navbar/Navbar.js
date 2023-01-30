import { NavLink } from 'react-router-dom';
import { DropdownAdmin } from '../DropdownAdmin';
import { DropdownUser } from '../DropdownUser';

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" to="/home">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            </li>
          </ul>
          <div>
            {
              user.rol === 'Admin' ? <DropdownAdmin user={user} /> : <DropdownUser user={user} />
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
