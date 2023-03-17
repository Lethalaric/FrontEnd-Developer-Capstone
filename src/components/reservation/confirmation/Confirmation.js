import React from 'react';
import './styles.css';
import {useNavigate} from "react-router-dom";

function Confirmation({reservationData}) {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate("/");
        event.preventDefault();
        window.scrollTo(0, 0);
    }

    return (
        <div className={"confirmation-container"}>
            {reservationData.orderId !== null &&
                <h1>Order ID: {reservationData.orderId}</h1>
            }

            {reservationData.userInfo !== null &&
                <div className={"confirmation-container-user-info-content"}>
                    <p>Prefix</p>
                    <p>{reservationData.userInfo.prefix}</p>
                    <p>First Name</p>
                    <p>{reservationData.userInfo.firstName}</p>
                    <p>Last Name</p>
                    <p>{reservationData.userInfo.lastName}</p>
                    <p>Mobile Number</p>
                    <p>{reservationData.userInfo.mobileNumber}</p>
                    <p>Email</p>
                    <p>{reservationData.userInfo.email}</p>
                </div>
            }

            {reservationData.dateInfo !== null &&
                <div className={"confirmation-container-date-info-content"}>
                    <p>Date</p>
                    <p>{reservationData.dateInfo.date.toLocaleDateString()}</p>
                    <p>TimeFrame</p>
                    <p>{reservationData.dateInfo.timeframe}</p>
                </div>
            }

            {reservationData.tableInfo !== null &&
                <div className={"confirmation-container-table-info-content"}>
                    <p>Number Of Guests</p>
                    <p>{reservationData.tableInfo.numberOfGuests}</p>
                    <p>Near Window</p>
                    <p>{reservationData.tableInfo.isNearWindow ? "true" : "false"}</p>
                    <p>Using Sofa</p>
                    <p>{reservationData.tableInfo.isUsingSofa ? "true" : "false"}</p>
                    <p>Smoking Allowed</p>
                    <p>{reservationData.tableInfo.allowSmoking ? "true" : "false"}</p>
                </div>
            }

            <button onClick={handleSubmit}>Confirm</button>
        </div>
    );
}

export default Confirmation;