import React from "react";
import logo from "./../assets/img/logo.svg";
import basketIcon from "./../assets/img/basket.svg";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img alt="market-logo" src={logo} />
        </div>
        <div className="button pointer">
          <img alt="market-shopping" src={basketIcon} /> ₺ 39.97
        </div>
      </div>
    </>
  );
};

export default Navbar;
