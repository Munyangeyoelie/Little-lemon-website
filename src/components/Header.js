import Nav from "./Nav";
import logo from "../assets/icons/Logo.png";

import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default Header;
