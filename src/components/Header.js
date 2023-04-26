import React from "react";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="manager.png" alt="manager" width="40" height="40" />
          <span className="p-4 ">Manage Clients and Their Projects</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
