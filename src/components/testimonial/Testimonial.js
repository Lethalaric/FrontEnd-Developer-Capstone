import React from 'react';
import ReviewCard from "../reviewCard/ReviewCard";
import "./styles.css";

function Testimonial(props) {
    return (
        <div className={"testimonial-container"}>
            <h1>Testimonials</h1>
            <div className={"testimonial-container-content"}>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    );
}

export default Testimonial;