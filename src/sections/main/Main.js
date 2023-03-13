import React from "react";
import restaurantFood from "../../assets/restauranfood.jpg";
import Special from "../../components/special/Special";
import Testimonial from "../../components/testimonial/Testimonial";
import About from "../../components/about/About";

export default function Main() {
  return (
    <div>
      <Special />
      <Testimonial />
      <About />
    </div>
  );
}
