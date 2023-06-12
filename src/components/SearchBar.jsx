function SearchBar() {
  return (
    <>
      <form className="searchBar">
        <div>
          <label>Search: </label>
          <input type="text" id="search" name="search" size="50" />
        </div>
        <br />
        <div>
          <input type="checkbox" id="inStock" name="inStock" />
          <label>Only show products in stock</label>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
