import React from "react";

const ProductFilter = ({ onSort }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => onSort("price-asc")}>Sort by Price (Asc)</button>
      <button onClick={() => onSort("price-desc")}>Sort by Price (Desc)</button>
      <button onClick={() => onSort("rating-asc")}>Sort by Rating (Asc)</button>
      <button onClick={() => onSort("rating-desc")}>
        Sort by Rating (Desc)
      </button>
    </div>
  );
};

export default ProductFilter;
