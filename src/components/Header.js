import { LOGO_URL } from "../utils/constatnt";
import { useState } from "react";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
 
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>

      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>

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
