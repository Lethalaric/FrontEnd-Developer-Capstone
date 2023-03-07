import React from "react";
import MenuCard from "../../components/menuCard/MenuCard";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import restaurantFood from "../../assets/restauranfood.jpg";

export default function Main() {
  return (
    <div>
      <div>
        <h1>Specials</h1>
        <button>Online Delivery</button>
        <div>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
          <MenuCard></MenuCard>
        </div>
      </div>
      <div>
        <h1>Testimonials</h1>
        <div>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </div>
      </div>
      <div>
        <h1>About</h1>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sit amet aliquam quam. Aenean lobortis, leo eget elementum
          condimentum, metus nisl ultrices lorem, ac aliquam elit neque at erat.
          Phasellus eu pellentesque purus. In ut orci imperdiet ante hendrerit
          congue. Nunc porttitor tincidunt tortor, in sodales nunc scelerisque
          consequat. Nullam felis odio, semper at libero et, ultricies aliquam
          urna. Nullam faucibus finibus quam id consectetur.
        </p>
        <img src={restaurantFood} alt="restaurant food" />
        <button>Reserve a table</button>
      </div>
    </div>
  );
}
