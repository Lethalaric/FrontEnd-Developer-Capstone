import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <div className={"nav-container"}>
      <img src={logo} alt="logo" />
      <ul className={"nav-navigation-menu"}>
        <li><Link to={"/"}>HOME</Link></li>
        <li><Link to={"/about"}>ABOUT</Link></li>
        <li><Link to={"/menu"}>MENU</Link></li>
        <li><Link to={"/reservation"}>RESERVATIONS</Link></li>
        <li><Link to={"/order-online"}>ORDER ONLINE</Link></li>
        <li><Link to={"/login"}>LOGIN</Link></li>
      </ul>
    </div>
  );
}
