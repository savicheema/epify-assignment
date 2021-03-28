import React from "react";
import "./search.css";

const Search = ({ searchString, updateSearchString }) => (
  <div className="search">
    <input
      type="text"
      className="search-input"
      placeholder="search"
      value={searchString}
      onChange={updateSearchString}
    />
  </div>
);

export default Search;
