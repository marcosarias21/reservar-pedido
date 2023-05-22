import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/images/backgroundimage.png';
import './hero.scss';

const Hero = () => {
  return (
    <div className="row hero-section gx-0">
      <div className="col-12 col-sm-12 col-md-12 d-flex flex-column justify-content-center align-items-center px-5">
        <div className='width-box'>
          <div className="d-flex">
            <h1 className="text-color-title fw-bold">Reserva</h1>
            <div className="d-flex flex-column justify-content-center ms-3">
              <span className="fw-bold">Tu</span>
              <span className="fw-bold">Pedido</span>
            </div>
          </div>
          <div className='d-flex flex-column mt-2'>
            <h6 className='fw-bold'>Hace la reserva de tu pedido en pocos clicks</h6>
              <div className='mt-4 text-center'>
                <button className='btn btn-secondary py-3 px-4 fw-bold'><Link to='/menus' className='text-decoration-none text-light '>Reserva Ahora</Link></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
