import ProductTable from '../components/ProductTable';
import SearchBar from '../components/SearchBar';

function ProductsPage() {
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable />
      <p>This is the products page!</p>
    </>
  );
}

export default ProductsPage;
