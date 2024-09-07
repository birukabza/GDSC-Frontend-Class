import React from "react";
import search_logo from "../assets/images-icons/search.png";

const SearchBar = ({ search, inputRef }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search(inputRef.current.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        onKeyDown={handleKeyDown}
        ref={inputRef}
        type="text"
        placeholder="Enter a city"
        autoFocus
      />
      <img
        onClick={() => search(inputRef.current.value)}
        src={search_logo}
        alt="Search icon"
      />
    </div>
  );
};

export default SearchBar;
