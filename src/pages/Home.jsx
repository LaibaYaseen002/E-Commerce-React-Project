import { useState } from "react";
import Header from "../components/Header";

import ProductDetail from "../components/ProductDetail";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import products from "../data/products";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  const handleFilter = (type, value) => {
    const filtered = products.filter((product) => {
      if (type === "category" && value) {
        return product.category === value;
      } else if (type === "brand" && value) {
        return product.brand === value;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };
  const handleSort = (criteria) => {
    const sorted = [...filteredProducts];
    if (criteria === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (criteria === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (criteria === "rating-asc") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (criteria === "rating-desc") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    setFilteredProducts(sorted);
  };
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };
  const handleToggleFavorite = (productId) => {
    const updatedProducts = filteredProducts.map((product) =>
      product.id === productId
        ? { ...product, favorite: !product.favorite }
        : product
    );
    setFilteredProducts(updatedProducts);
  };

  return (
    <div>
      <Header />

      <div className="flex">
        <Sidebar onFilter={handleFilter} />

        <div className="filters-container">
          <SearchBar onSearch={handleSearch} />

          <ProductFilter onFilter={handleFilter} onSort={handleSort} />

          <ProductList
            products={filteredProducts}
            onSelectProduct={handleSelectProduct}
            onToggleFavourite={handleToggleFavorite}
          />

          {selectedProduct && <ProductDetail product={handleSelectProduct} />}
        </div>
      </div>
    </div>
  );
};
export default Home;
