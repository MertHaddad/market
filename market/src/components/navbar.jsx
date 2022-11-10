import React from "react";
import logo from "./../assets/img/logo.svg";
import basketIcon from "./../assets/img/basket.svg";
const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="navbar-logo">
          <img alt="market-logo" src={logo} />
        </div>
        <div class="button pointer">
          <img alt="market-shopping" src={basketIcon} /> ₺ 39.97
        </div>
      </div>
    </>
  );
};

export default Navbar;
