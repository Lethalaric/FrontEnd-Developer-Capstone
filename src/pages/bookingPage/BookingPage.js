import React, {useReducer, useState} from 'react';
import {Outlet} from "react-router-dom";
import "./styles.css";

function BookingPage(props) {

    return (
        <>
            <div className={"booking-container"}>
                <Outlet/>
            </div>
        </>
    );
}

export default BookingPage;