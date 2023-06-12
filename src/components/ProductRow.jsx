function ProductRow({ data }) {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.price}</td>
    </tr>
  );
}

export default ProductRow;
