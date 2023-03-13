import React from "react";
import avatar from "../../assets/avatar-110d53c987b703ac6a2cef9f87db8be6.png";
import "./styles.css";

export default function ReviewCard() {
  return (
      <div className={"review-card-container"}>
        <div className={"review-card-container-title"}>
          <h3>Rating: </h3>
          <h3>4.5/5</h3>
        </div>
        <div className={"review-card-container-content"}>
          <div className={"review-card-container-content-left-side"}>
            <img  className={"review-card-container-avatar"} src={avatar}/>
            <h3>Jeremy</h3>
          </div>
          <div className={"review-card-container-content-right-side"}>
            <p>Delicious food, friendly staff, cozy atmosphere - highly recommended!</p>
          </div>
        </div>
      </div>
  );
}
