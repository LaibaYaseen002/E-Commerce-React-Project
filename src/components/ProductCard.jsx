import React from "react";

const ProductCard = ({
  product,
  onSelect = () => {},
  onToggleFavourite = () => {},
}) => {
  return (
    <div className="product-card w-full bg-white p-4 rounded shadow">
      <img src={product.imageUrl} alt={product.productName} />
      <h3>{product.productName}</h3>

      <p>Category: {product.category}</p>

      <p>Price: ${product.price}</p>

      <p>Rating: {product.rating}</p>

      <p>Description: {product.description}</p>
      <p>
        Brand: {product.brand.name} ({product.brand.country})
      </p>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() => onToggleFavourite(product.id)}
      >
        {product.favorite ? "Unfavourite " : "Favourite "}
      </button>
      <button>View</button>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
};
export default ProductCard;
