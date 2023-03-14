import React from "react";
import brochette from "../../../assets/bruchetta.svg";
import "./styles.css";

export default function MenuCard({title, price, description, image}) {
  return (
      <div className={"menu-card-container"}>
          <img src={image} alt={title + " image"}/>
          <div className={"menu-card-container-title"}>
              <h3>{title}</h3>
              <h3>{price}</h3>
          </div>
          <p>{description}</p>
          <button>Order a Delivery</button>
      </div>
  );
}
