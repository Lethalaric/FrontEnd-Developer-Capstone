import React from 'react';

function Confirmation({userInfo, dateInfo, tableInfo}) {
    return (
        <div>
            {userInfo !== null &&
                <div>
                    <p>Prefix: {userInfo.prefix}</p>
                    <p>First Name: {userInfo.firstName}</p>
                    <p>Last Name: {userInfo.lastName}</p>
                    <p>Mobile Number: {userInfo.mobileNumber}</p>
                    <p>Email: {userInfo.email}</p>
                </div>
            }

            {dateInfo !== null &&
                <div>
                    <p>Date: {dateInfo.date}</p>
                    <p>Time: {dateInfo.time}</p>
                </div>
            }

            {tableInfo !== null &&
                <div>
                    <p>Number Of Guests: {tableInfo.numberOfGuests}</p>
                    <p>Near Window: {tableInfo.isNearWindow ? "true" : "false"}</p>
                    <p>Using Sofa: {tableInfo.isUsingSofa ? "true" : "false"}</p>
                    <p>Smoking Allowed: {tableInfo.allowSmoking ? "true" : "false"}</p>
                </div>
            }
        </div>
    );
}

export default Confirmation;