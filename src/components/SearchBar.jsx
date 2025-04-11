import React from "react";

const SearchBar = ({ value, onSearch }) => {
  return (
    <input
      type="text"
      id="search-bar"
      placeholder="Search Product..."
      value={value}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 border rounded"
    />
  );
};
export default SearchBar;
