import ProductTable from '../components/ProductTable';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import jsonData from '../../src/data.json';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  console.log(jsonData);
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable data={jsonData} />
    </>
  );
}

export default ProductsPage;
