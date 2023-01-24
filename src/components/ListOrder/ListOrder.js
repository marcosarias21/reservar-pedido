const ListOrder = ({ pedido, hora }) => {
  console.log(pedido);
  return (
    <ul className="list-group">
      <li className="list-group-item">{hora} - {pedido}</li>
    </ul>
  );
};

export default ListOrder;
