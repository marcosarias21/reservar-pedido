const Menus = ({ imagen, nombre }) => {
  return (
    <div className="card col-4">
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Menus;
