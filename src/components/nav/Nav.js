import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
import {Link, useLocation} from "react-router-dom";

export default function Nav() {

    const location = useLocation();

    return (
        <div className={"nav-container"}>
            <img src={logo} alt="logo" />
            <ul className={"nav-navigation-menu"}>
                <li className={location.pathname === '/' ? 'active' : ''}><Link to={"/"}>HOME</Link></li>
                <li className={location.pathname.startsWith('/about') ? 'active' : ''}><Link to={"/about"}>ABOUT</Link></li>
                <li className={location.pathname.startsWith('/menu') ? 'active' : ''}><Link to={"/menu"}>MENU</Link></li>
                <li className={location.pathname.startsWith('/booking') ? 'active' : ''}><Link to={"/booking"}>BOOKING</Link></li>
                <li className={location.pathname.startsWith('/order-online') ? 'active' : ''}><Link to={"/order-online"}>ORDER ONLINE</Link></li>
                <li className={location.pathname.startsWith('/login') ? 'active' : ''}><Link to={"/login"}>LOGIN</Link></li>
            </ul>
        </div>
    );
}
