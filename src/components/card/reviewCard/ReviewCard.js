import React from "react";
import avatar from "../../../assets/avatar-110d53c987b703ac6a2cef9f87db8be6.png";
import "./styles.css";

export default function ReviewCard({rating, image, name, review}) {
  return (
      <div className={"review-card-container"}>
        <div className={"review-card-container-title"}>
          <h3>Rating: </h3>
          <h3>{rating}</h3>
        </div>
        <div className={"review-card-container-content"}>
          <div className={"review-card-container-content-left-side"}>
            <img className={"review-card-container-avatar"} src={image} alt={name+" image"}/>
            <h3>{name}</h3>
          </div>
          <div className={"review-card-container-content-right-side"}>
            <p>{review}</p>
          </div>
        </div>
      </div>
  );
}
