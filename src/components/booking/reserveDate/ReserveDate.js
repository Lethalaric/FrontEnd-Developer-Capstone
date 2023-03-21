import React, {useEffect, useState} from 'react';
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

    useEffect(() => {
        setPickDate({...pickDate, timeframe: ""})
    }, [pickDate.date])

    const listOfTimeframes = [
        '09:00-10:00',
        '10:00-11:00',
        '11:00-12:00',
        '12:00-13:00',
        '13:00-14:00',
        '14:00-15:00',
        '15:00-16:00',
        '16:00-17:00',
        '17:00-18:00',
        '18:00-19:00',
        '19:00-20:00',
        '20:00-21:00',
        '21:00-22:00',
        '22:00-23:00',
    ];

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setPickDate({...pickDate, [name]: value});
    }

    const handleDateChange = (date) => {
        setPickDate({...pickDate, date: date})
        // setPickDate({...pickDate, timeframe: ""})
    }

    const handleSubmit = (event) => {
        dispatch({type: 'SUBMIT', name: 'dateInfo', value: pickDate});
        navigate("/booking/fill-table-info");
        event.preventDefault();
    }

    return (
        <>
            <form className={"booking-container-form"} onSubmit={handleSubmit}>
                <div className={"booking-container-form-grid"}>
                    <label >Pick Date</label>
                    <div>
                        <DatePicker selected={pickDate.date} onChange={handleDateChange} name={"date"} required />
                    </div>
                    <label >Available Times</label>
                    <select value={pickDate.timeframe} name={"timeframe"} onChange={handleChange} required={true}>
                        <option value={""}>Select Available Times</option>
                        {listOfTimeframes.map(timeframe => {
                            const randomBoolean = Math.random() >= 0.5;
                            return (
                                <option key={timeframe} disabled={randomBoolean} value={timeframe}>{timeframe}</option>
                            )
                        })}
                    </select>
                </div>
                <button type={"submit"} name={"submit"} onSubmit={handleSubmit}>Next</button>
            </form>
        </>
    );
}

export default ReserveDate;