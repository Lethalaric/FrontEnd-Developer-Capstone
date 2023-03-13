import React from "react";
import restaurantFood from "../../assets/restauranfood.jpg";
import "./styles.css";

export default function Header() {
  return (
      <div className={"header-container"}>
          <div className={"header-container-title"}>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
          </div>
          <div className={"header-container-content"}>
              <p>
                  Welcome to Little Lemon Restaurant, where we are passionate about providing our customers with the freshest, highest quality ingredients and exceptional service in a warm and inviting atmosphere. Our chefs are committed to creating innovative and delicious dishes that showcase the best of seasonal produce, and our friendly staff are dedicated to ensuring that every guest has a memorable dining experience.
                  <br/>
                  <br/>
                  From the moment you step through our doors, you will be greeted with a smile and a welcoming atmosphere. Whether you are joining us for a romantic dinner for two or a celebratory gathering with friends and family, we have the perfect table waiting for you. Our menu features a range of classic and contemporary dishes, all made from scratch with the finest ingredients available. From our mouthwatering steaks and seafood to our delectable desserts, there is something to please every palate.
                  <br/>
                  <br/>
                  We take pride in our commitment to sustainability and supporting local farmers, and we strive to create a positive impact in our community. At Little Lemon Restaurant, we believe that every guest deserves an exceptional dining experience, and we are dedicated to exceeding your expectations. Join us for a meal and discover why we are one of the most popular restaurants in town.
              </p>
              <img src={restaurantFood} alt="restaurant food" />
          </div>
          <button>Reserve a table</button>
      </div>

  );
}
