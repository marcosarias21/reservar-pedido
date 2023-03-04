import pollo from '../../assets/images/platopollo.jpg';
import { dataFood } from '../../helpers/dataCarousel';
import './carousel.scss';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="false">
      <div className="carousel-inner">
        {dataFood.map(data => <div key={data.nameFood} className={`carousel-item ${data.active}`}>
        <div className="card card-carousel row">
            <div className="card-body col-6 d-flex flex-column justify-content-center ">
              <h6 className="card-title text-success">{data.subtitle}</h6>
              <h1 className="card-text text-primary">{data.nameFood}</h1>
              <p>{data.description}</p>
              <a href={data.link} className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="col-6">
              <img src={data.image} className="card-img-top" alt="..."/>
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
