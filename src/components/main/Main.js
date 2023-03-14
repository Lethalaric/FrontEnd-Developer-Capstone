import React from "react";
import restaurantFood from "../../assets/restauranfood.jpg";
import Special from "../special/Special";
import Testimonial from "../testimonial/Testimonial";
import About from "../about/About";

export default function Main() {
  return (
    <div>
      <Special />
      <Testimonial />
      <About />
    </div>
  );
}
