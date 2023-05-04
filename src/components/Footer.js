import logo from "../assets/icons/Logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="one">
          <img src={logo} alt="Secondary Logo" />
        </div>
        <div className="two">
          <ul>
            <h5>Navigation</h5>
            <li>
              <Link to="/" className="a">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="a">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="a">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="a">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order" className="a">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" className="a">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Contact</h5>
            <li>
              <a id="nav" href="#">
                Phone Number
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Email
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>

            <li>
              <a id="nav" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                LinkedIn
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
