import { dataFood } from '../../helpers/dataCarousel';
import './carousel.scss';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="false">
      <div className="carousel-inner">
        {dataFood.map(data => <div key={data.nameFood} className={`carousel-item ${data.active}`}>
        <div className="card card-carousel row">
            <div className="card-body col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <div>
                <h6 className="card-title text-success">{data.subtitle}</h6>
                <h1 className="card-text color-main fw-bold">{data.nameFood}</h1>
                <p>{data.description}</p>
                <div>
                  <a href={data.link} className="btn button-main ">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
              <img src={data.image} className='img-carousel' alt="..."/>
            </div>
          </div>
        </div>)}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
