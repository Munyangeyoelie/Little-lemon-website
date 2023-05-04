import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" className="a">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/" className="a">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
