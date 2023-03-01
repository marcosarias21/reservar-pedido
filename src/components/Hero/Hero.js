import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/images/backgroundimage.png';
import './hero.scss';

const Hero = () => {
  return (
    <div className="row hero-section gx-0">
      <div className="col-6 d-flex flex-column justify-content-center align-items-center px-5">
        <div className='w-50'>
          <div className="d-flex">
            <h1 className="text-color-title fw-bold">Reserva</h1>
            <div className="d-flex flex-column justify-content-center ms-3">
              <span className="fw-bold">Tu</span>
              <span className="fw-bold">Pedido</span>
            </div>
          </div>
          <div className='d-flex flex-column mt-2'>
            <h6 className='fw-bold'>Hace la reserva de tu pedido en pocos clicks</h6>
              <div className='mt-4'>
                <button className='btn btn-dark py-3 px-4 fw-bold'><Link to='/menus' className='text-decoration-none text-light '>Reserva Ahora</Link></button>
              </div>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center">
        <img className='img-hero' src={backgroundImg} />
      </div>
    </div>
  );
};

export default Hero;
