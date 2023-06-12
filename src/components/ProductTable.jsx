import ProductRow from './ProductRow';

function ProductTable({ data }) {
  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => (
            <ProductRow key={obj.id} data={obj} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
