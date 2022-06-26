import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="fa fa-search" />
        </span>
        <input
          type="text"
          className="form-control"
          id="search-box"
          name="searchQue"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
};

export default SearchBar;
