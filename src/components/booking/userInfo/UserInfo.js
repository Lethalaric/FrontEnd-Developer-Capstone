import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../../../pages/bookingPage/styles.css";

function UserInfo({dispatch}) {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        prefix: "Mr.",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setUserInfo({...userInfo, [name]: value});
    }

    const handleSubmit = (event) => {
        const randomInteger = Math.floor(Math.random() * 1000001) + 1000000;
        event.preventDefault();
        dispatch({type: 'SUBMIT', name: 'userInfo', value: userInfo});
        dispatch({type: 'SUBMIT', name: 'bookingId', value: 'LLR'+randomInteger});
        navigate("/booking/fill-date-info");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={"booking-container-form"}>
                <div className={"booking-container-form-grid"}>
                    <label >Prefix</label>
                    <select onChange={handleChange} name={"prefix"}>
                        <option value={"Mr."} name={"mr"}>Mr.</option>
                        <option value={"Mrs."}>Mrs.</option>
                    </select>
                    <label >First Name</label>
                    <input onChange={handleChange} value={userInfo.firstName} name={"firstName"} required={true} />
                    <label >Last Name</label>
                    <input onChange={handleChange} value={userInfo.lastName} name={"lastName"} />
                    <label >Mobile Number</label>
                    <input onChange={handleChange} value={userInfo.mobileNumber} name={"mobileNumber"} type={"tel"} pattern="[0-9]{10}" required={true} />
                    <label >Email</label>
                    <input onChange={handleChange} value={userInfo.email} name={"email"} type={"email"} required={true} />
                </div>
                <button type={"submit"} name={"submit"} onSubmit={handleSubmit}>Next</button>
            </form>
        </>
    );
}

export default UserInfo;