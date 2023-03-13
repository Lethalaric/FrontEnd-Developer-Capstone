import React from "react";
import brochette from "../../assets/bruchetta.svg";
import "./styles.css";

export default function MenuCard() {
  return (
      <div className={"menu-card-container"}>
          <img src={brochette} alt={"brochette image"}/>
          <div className={"menu-card-container-title"}>
              <h3>Brochette</h3>
              <h3>$12.99</h3>
          </div>
          <p>Skewered meats, veggies & fruits grilled to perfection. Served with dipping sauces, rice, and salad. A delicious and satisfying meal.</p>
          <button>Order a Delivery</button>
      </div>
  );
}
