import { Email, Search, ShoppingBasket } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./header.css";

export default function Header() {
  const [{ basket, logginUser }, dispatch] = useStateValue();

  const logOutUser = () => {
    if (logginUser) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://www.pngitem.com/pimgs/m/1-11991_amazon-logo-transparent-background-image-amazon-logo-white.png"
          alt="Logo"
        />
      </Link>
      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <Search className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        {/*first Link*/}
        <Link to={!logginUser && "/login"} className="headerLink">
          <div onClick={logOutUser} className="headerOption">
            <span className="headerOptionOne">Hello {logginUser?.email}</span>
            <span className="headerOptionTwo">
              {logginUser ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/*second Link*/}
        <Link to="/" className="headerLink">
          <div className="headerOption">
            <span className="headerOptionOne">Returns</span>
            <span className="headerOptionTwo">& Orders</span>
          </div>
        </Link>
        {/*third Link*/}
      </div>
      <Link to="/checkout" className="headerLink">
        <div className="headerOptionBasket">
          <ShoppingBasket />
          <span className="headerOptionTwo headerProductCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}
