import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";

export default function Nav() {
  return (
    <div className={"nav-container"}>
      <img src={logo} alt="logo" />
      <ul className={"nav-navigation-menu"}>
        <li><a>HOME</a></li>
        <li><a>ABOUT</a></li>
        <li><a>MENU</a></li>
        <li><a>RESERVATIONS</a></li>
        <li><a>ORDER ONLINE</a></li>
        <li><a>LOGIN</a></li>
      </ul>
    </div>
  );
}
