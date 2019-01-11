import React from "react";

const SearchBox = ({ placeholder, onSearch }) => {
  return (
    <input
      type="text"
      className="form-control my-4"
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
};

export default SearchBox;
