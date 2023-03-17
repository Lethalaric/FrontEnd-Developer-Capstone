import React, {useReducer, useState} from 'react';
import {reducer, dataReservation} from "../../../reducer/ReservationReducer";
import {Link, useNavigate} from "react-router-dom";

function ReserveTable({dispatch}) {

    const navigate = useNavigate();

    const [pickTable, setPickTable] = useState({
        numberOfGuests: "",
        isNearWindow: false,
        isUsingSofa: false,
        allowSmoking: false,
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setPickTable({...pickTable, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'SUBMIT', name: 'tableInfo', value: pickTable});
        navigate("/reservation/confirmation");
    }
    return (
        <>
            <form className={"reservation-container-form"} onSubmit={handleSubmit}>
                <div className={"reservation-container-form-grid"}>
                    <label>Number of Guests</label>
                    <input type={"number"} name={"numberOfGuests"} value={pickTable.numberOfGuests} onChange={handleChange} required={true} />
                    <label>Near Window</label>
                    <input type={"checkbox"} name={"isNearWindow"} value={pickTable.isNearWindow} onChange={handleChange} />
                    <label>Using Sofa</label>
                    <input type={"checkbox"} name={"isUsingSofa"} value={pickTable.isUsingSofa} onChange={handleChange} />
                    <label>Smoking Allowed</label>
                    <input type={"checkbox"} name={"allowSmoking"} value={pickTable.allowSmoking} onChange={handleChange} />
                </div>
                <button type={"submit"} name={"submit"} onSubmit={handleSubmit}>Next</button>
            </form>
        </>
    );
}

export default ReserveTable;