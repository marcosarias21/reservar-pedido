const ListOrder = ({ pedido, hora }) => {
  console.log(pedido);
  return (
    <ul className="list-group">
      <li className="list-group-item">Dia:{hora} Pedido:{pedido}</li>
    </ul>
  );
};

export default ListOrder;
