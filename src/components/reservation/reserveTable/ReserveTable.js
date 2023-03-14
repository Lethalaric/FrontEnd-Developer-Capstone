import React, {useState} from 'react';

function ReserveTable({saveReservation}) {
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
        saveReservation({name: "tableInfo", value: pickTable});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Number of Guests: <textarea name={"numberOfGuests"} value={pickTable.numberOfGuests} onChange={handleChange} /> <br/></label>
                <label>Near Window: <input type={"checkbox"} name={"isNearWindow"} value={pickTable.isNearWindow} onChange={handleChange} /> <br/></label>
                <label>Using Sofa: <input type={"checkbox"} name={"isUsingSofa"} value={pickTable.isUsingSofa} onChange={handleChange} /> <br/></label>
                <label>Smoking Allowed: <input type={"checkbox"} name={"allowSmoking"} value={pickTable.allowSmoking} onChange={handleChange} /> <br/></label>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    );
}

export default ReserveTable;