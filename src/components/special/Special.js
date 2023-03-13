import React from 'react';
import MenuCard from "../menuCard/MenuCard";
import "./styles.css";

function Special(props) {
    return (
        <div className={"special-container"}>
            <div className={"special-container-title"}>
                <h1>Specials</h1>
                <button>Online Delivery</button>
            </div>
            <div className={"special-container-content"}>
                <MenuCard></MenuCard>
                <MenuCard></MenuCard>
                <MenuCard></MenuCard>
            </div>
        </div>
    );
}

export default Special;