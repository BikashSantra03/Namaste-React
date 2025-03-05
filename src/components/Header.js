import { LOGO_URL } from "../utils/constatnt";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const handleLogoClick = () => {
    <Navigate to="/" />;
    window.location.reload();
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser)

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
            >
              Cart
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

          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
