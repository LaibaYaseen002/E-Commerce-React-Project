import React from "react";

const Sidebar = ({ onFilter }) => {
  return (
    <div className="w-64 p-6 bg-gray-200">
      <h2 className="font-semibold mb-4">Filters</h2>

      <h3 className="font-medium mb-2">Category</h3>
      <select
        onChange={(e) => onFilter("category", e.target.value)}
        className="w-full p-2 mb-4"
      >
        <option value="">All Categories</option>
        <option value="Phones">Phones</option>
        <option value="Laptops">Laptops</option>
        <option value="Watches">Watches</option>
        <option value="Sports">Sports</option>
        <option value="Electronics">Electronics</option>
      </select>

      <h3 className="font-medium mb-2">Brand</h3>
      <select
        onChange={(e) => onFilter("brand", e.target.value)}
        className="w-full p-2"
      >
        <option value="">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Dell">Dell</option>
        <option value="Nike">Nike</option>
      </select>
    </div>
  );
};

export default Sidebar;
