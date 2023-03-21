import React from 'react';
import './styles.css';
import {useNavigate} from "react-router-dom";

function Confirmation({bookingData}) {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate("/booking/complete");
    }

    return (
        <div className={"confirmation-container"}>
            {bookingData.bookingId !== null &&
                <h1>Booking ID: {bookingData.bookingId}</h1>
            }

            {bookingData.userInfo !== null &&
                <div className={"confirmation-container-user-info-content"}>
                    <p>Prefix</p>
                    <p>{bookingData.userInfo.prefix}</p>
                    <p>First Name</p>
                    <p>{bookingData.userInfo.firstName}</p>
                    <p>Last Name</p>
                    <p>{bookingData.userInfo.lastName}</p>
                    <p>Mobile Number</p>
                    <p>{bookingData.userInfo.mobileNumber}</p>
                    <p>Email</p>
                    <p>{bookingData.userInfo.email}</p>
                </div>
            }

            {bookingData.dateInfo !== null &&
                <div className={"confirmation-container-date-info-content"}>
                    <p>Date</p>
                    <p>{bookingData.dateInfo.date.toLocaleDateString()}</p>
                    <p>TimeFrame</p>
                    <p>{bookingData.dateInfo.timeframe}</p>
                </div>
            }

            {bookingData.tableInfo !== null &&
                <div className={"confirmation-container-table-info-content"}>
                    <p>Number Of Guests</p>
                    <p>{bookingData.tableInfo.numberOfGuests}</p>
                    <p>Near Window</p>
                    <p>{bookingData.tableInfo.isNearWindow ? "true" : "false"}</p>
                    <p>Using Sofa</p>
                    <p>{bookingData.tableInfo.isUsingSofa ? "true" : "false"}</p>
                    <p>Smoking Allowed</p>
                    <p>{bookingData.tableInfo.allowSmoking ? "true" : "false"}</p>
                </div>
            }

            <button onClick={handleSubmit}>Confirm</button>
        </div>
    );
}

export default Confirmation;