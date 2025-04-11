import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) return <div>Select a product to see details</div>;

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full mb-4" />
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {product.rating}
      </p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
