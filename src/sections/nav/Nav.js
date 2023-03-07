import React from "react";
import logo from "../../assets/logo.svg";

export default function Nav() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATIONS</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </div>
  );
}
