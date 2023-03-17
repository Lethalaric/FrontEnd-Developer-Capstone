import React, {useReducer, useState} from 'react';
import {reducer, dataReservation} from "../../../reducer/ReservationReducer";
import {Link, useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

function ReserveDate({dispatch}) {

    const navigate = useNavigate();

    const [pickDate, setPickDate] = useState({
        date: "",
        timeframe: "",
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setPickDate({...pickDate, [name]: value});
    }
    const handleDateChange = (date) => {
        setPickDate({...pickDate, date: date})
    }

    const handleSubmit = (event) => {
        dispatch({type: 'SUBMIT', name: 'dateInfo', value: pickDate});
        navigate("/reservation/fill-table-info");
        event.preventDefault();
    }

    return (
        <>
            <form className={"reservation-container-form"} onSubmit={handleSubmit}>
                <div className={"reservation-container-form-grid"}>
                    <label >Pick Date</label>
                    <div>
                        <DatePicker selected={pickDate.date} onChange={handleDateChange} required />
                    </div>
                    <label >Pick Time</label>
                    <select value={pickDate.timeframe} name={"timeframe"} onChange={handleChange} required={true}>
                        <option value={""}>Select Timeframe</option>
                        <option value={"09:00-10:00"}>09:00-10:00</option>
                        <option value={"10:00-11:00"}>10:00-11:00</option>
                        <option value={"11:00-12:00"}>11:00-12:00</option>
                        <option value={"12:00-13:00"}>12:00-13:00</option>
                        <option value={"13:00-14:00"}>13:00-14:00</option>
                        <option value={"14:00-15:00"}>14:00-15:00</option>
                        <option value={"15:00-16:00"}>15:00-16:00</option>
                        <option value={"16:00-17:00"}>16:00-17:00</option>
                        <option value={"17:00-18:00"}>17:00-18:00</option>
                        <option value={"18:00-19:00"}>18:00-19:00</option>
                        <option value={"19:00-20:00"}>19:00-20:00</option>
                        <option value={"20:00-21:00"}>20:00-21:00</option>
                        <option value={"21:00-22:00"}>21:00-22:00</option>
                        <option value={"22:00-23:00"}>22:00-23:00</option>
                    </select>
                </div>
                <button type={"submit"} name={"submit"} onSubmit={handleSubmit}>Next</button>
            </form>
        </>
    );
}

export default ReserveDate;