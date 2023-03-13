import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className={"footer-container"}>
        <div className={"footer-container-logo"}>
            <img src={logo}/>
        </div>
        <div className={"footer-container-doormat"}>
        <h3>Doormat Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Online Order</li>
          <li>Login</li>
        </ul>
        </div>
        <div className={"footer-container-contact"}>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Mobile Number</li>
          <li>Customer Service</li>
          <li>Email</li>
        </ul>
        </div>
        <div className={"footer-container-social-media"}>
        <h3>Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Snapchat</li>
          <li>Tiktok</li>
          <li>Zomato</li>
        </ul>
        </div>
    </div>
  );
}
