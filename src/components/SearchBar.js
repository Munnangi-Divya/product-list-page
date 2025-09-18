import React from "react";


const SearchBar = ({ value, onChange }) => {
  return (
    <div className={`search-wrapper ${value ? "filled" : ""}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`search-input ${value ? "typing" : ""}`}
      />
      <label className="search-label">Search products...</label>
      <span className="search-icon">🔍</span>
      {value && (
        <button className="clear-btn" onClick={() => onChange("")}>
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;

