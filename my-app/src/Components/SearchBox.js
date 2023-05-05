import React from 'react';
import '../css/SearchBox.css';

const SearchBox = () => {
  return (
    <div className="search-box-container">
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

export default SearchBox;
