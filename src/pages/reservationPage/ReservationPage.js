import React, {useReducer, useState} from 'react';
import {Outlet} from "react-router-dom";
import "./styles.css";

function ReservationPage(props) {

    return (
        <>
            <div className={"reservation-container"}>
                <Outlet/>
            </div>
        </>
    );
}

export default ReservationPage;