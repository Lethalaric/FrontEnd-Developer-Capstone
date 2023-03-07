import React from "react";
import restaurantFood from "../../assets/restauranfood.jpg";

export default function Header() {
  return (
    <div>
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sit amet aliquam quam. Aenean lobortis, leo eget elementum condimentum,
        metus nisl ultrices lorem, ac aliquam elit neque at erat. Phasellus eu
        pellentesque purus. In ut orci imperdiet ante hendrerit congue. Nunc
        porttitor tincidunt tortor, in sodales nunc scelerisque consequat.
        Nullam felis odio, semper at libero et, ultricies aliquam urna. Nullam
        faucibus finibus quam id consectetur.
      </p>
      <img src={restaurantFood} alt="restaurant food" />
      <button>Reserve a table</button>
    </div>
  );
}
