import React from 'react';
import MenuCard from "../card/menuCard/MenuCard";
import brochette from "../../assets/bruchetta.svg";
import greekSalad from "../../assets/greek salad.jpg";
import lemonDessert from "../../assets/lemon dessert.jpg";
import "./styles.css";

function Special(props) {

    const specialMenus = [
        {
            title: "Brochette",
            price: "$15.00",
            description: "Skewered meats, veggies & fruits grilled to perfection. Served with dipping sauces, rice, and salad. A delicious and satisfying meal.",
            image: brochette,
        },
        {
            title: "Greek Salad",
            price: "$10.00",
            description: "Our Greek salad features a colorful medley of fresh greens, juicy tomatoes, crisp cucumbers, tangy feta cheese, briny olives, and a zesty vinaigrette dressing.",
            image: greekSalad,
        },
        {
            title: "Lemon Cake",
            price: "$7.50",
            description: "Indulge in our moist and fluffy lemon cake, bursting with tangy citrus flavor and topped with a sweet and creamy glaze.Indulge in our moist and fluffy lemon cake, bursting with tangy citrus flavor and topped with a sweet and creamy glaze.",
            image: lemonDessert,
        },
    ]

    return (
        <div className={"special-container"}>
            <div className={"special-container-title"}>
                <h1>Specials</h1>
                <button>Online Delivery</button>
            </div>
            <div className={"special-container-content"}>
                {specialMenus.map(specialMenu => {
                    return <MenuCard {...specialMenu} />
                })}
            </div>
        </div>
    );
}

export default Special;