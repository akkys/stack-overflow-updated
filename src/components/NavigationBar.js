import React from "react";
import logo from "../so-logo.png";

import SearchBar from "./SearchBar";

const NavigationBar = ({ formSubmit }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img
          src={logo}
          alt="logo"
          style={{ width: "150px", height: "35px", marginLeft: "30px" }}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0"></ul>
          <form className="col-md-8 mt-3 mx-5" onSubmit={formSubmit}>
            <SearchBar />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
