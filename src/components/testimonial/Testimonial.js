import React from 'react';
import ReviewCard from "../reviewCard/ReviewCard";
import avatar1 from "../../assets/avatar-110d53c987b703ac6a2cef9f87db8be6.png";
import avatar2 from "../../assets/avatar-113a0920a59324e2041b23279933e411.png";
import avatar3 from "../../assets/avatar-112169d64826edc74529e60aa2b4a0e5.png";
import avatar4 from "../../assets/avatar-115904d69dfafb9b9822e17e3cac13f1.png";
import "./styles.css";

function Testimonial(props) {
    const reviews = [
        {
            rating: "5/5",
            image: avatar1,
            name: "Jeremy",
            review: "Delicious food, friendly staff, cozy atmosphere - highly recommended!",
        },
        {
            rating: "4.5/5",
            image: avatar2,
            name: "Ningguang",
            review: "Excellent food and service, would highly recommend to anyone visiting the area.",
        },
        {
            rating: "5/5",
            image: avatar3,
            name: "Jessica",
            review: "The atmosphere was cozy and welcoming, and the menu had a great selection of dishes.",
        },
        {
            rating: "1/5",
            image: avatar4,
            name: "Arnold",
            review: "Disappointed with the small portion sizes, but the flavors were on point.",
        },
    ]

    return (
        <div className={"testimonial-container"}>
            <h1>Testimonials</h1>
            <div className={"testimonial-container-content"}>
                {reviews.map(review => {
                    return <ReviewCard {...review}/>
                })}
            </div>
        </div>
    );
}

export default Testimonial;