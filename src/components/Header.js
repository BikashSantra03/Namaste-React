import { LOGO_URL } from "../utils/constatnt";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo" />
        </div>
      </Link>

      <div className="navitems">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cart
            </Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              btnText == "Login" ? setBtnText("LogOut") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
