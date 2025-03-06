import { LOGO_URL } from "../utils/constatnt";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router";

import { FaCartShopping } from "react-icons/fa6";

import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const handleLogoClick = () => {
    <Navigate to="/" />;
    window.location.reload();
  };

  const onlineStatus = useOnlineStatus();

  const { userName } = useContext(UserContext);

  // subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items); //used to read from store

  return (
    <div className="flex  justify-between items-center m-4">
      <div className=" w-32 h-32 ">
        <Link to="/">
          <img src={LOGO_URL} className="logo" onClick={handleLogoClick} />
        </Link>
      </div>

      <div className="navitems">
        <ul className="flex flex-wrap font-bold gap-8 justify-center items-center">
          <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
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
              to="/grocery"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
              className="flex relative"
            >
              <div className="relative">
                <FaCartShopping className="text-2xl" />
                {cartItems.length > 0 && (
                  <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                  >
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </li>

          <button
            className="bg-[orange] rounded-lg py-2 px-4 cursor-pointer hover:bg-[#f6bb4d] hover:scale-110 duration-250 ease-in"
            onClick={() => {
              btnText == "Login" ? setBtnText("LogOut") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
          {btnText === "LogOut" && <li>{userName}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
