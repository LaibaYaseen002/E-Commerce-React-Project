import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onSelectProduct, onToggleFavourite }) => {
  if (products.length === 0) {
    return <p id="no-products">No Products Found</p>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={() => onSelectProduct(product)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
};

export default ProductList;
