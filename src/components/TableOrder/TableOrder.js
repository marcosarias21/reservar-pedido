const TableOrder = ({ hora, pedido }) => {
  return (
    <tbody>
      <tr>
        <td className="col-2">
          <p>{hora}</p>
        </td>
        <td className="col-10">
          <p>{pedido}</p>
        </td>
      </tr>
    </tbody>
  );
};

export default TableOrder;
