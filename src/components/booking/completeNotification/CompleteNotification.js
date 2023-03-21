import React from 'react';
import {useNavigate} from "react-router-dom";
import './styles.css';

function CompleteNotification({bookingId}) {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate("/");
        event.preventDefault();
        window.scrollTo(0, 0);
    }
    return (
        <div className={'complete-notification-container'}>
            <h2>Booking has been accepted</h2>
            <h1>Booking ID: {bookingId}</h1>
            <button onClick={handleSubmit}>Back to HOME</button>
        </div>
    );
}

export default CompleteNotification;