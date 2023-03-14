import React, {useState} from 'react';

function ReserveDate({saveReservation}) {

    const [pickDate, setPickDate] = useState({
        date: "",
        time: "",
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setPickDate({...pickDate, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveReservation({name: "dateInfo", value: pickDate});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Pick Date: <textarea name={"date"} value={pickDate.date} onChange={handleChange} /> <br/></label>
                <label>Pick Time: <textarea name={"time"} value={pickDate.time} onChange={handleChange} /> <br/></label>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
}

export default ReserveDate;