import React, {useState} from 'react';

function UserInfo({saveReservation}) {
    const [userInfo, setUserInfo] = useState({
        prefix: "",
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
        event.preventDefault();
        saveReservation({name: "userInfo", value: userInfo});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Prefix: <textarea onChange={handleChange} value={userInfo.prefix} name={"prefix"} /> <br/></label>
                <label>First Name: <textarea onChange={handleChange} value={userInfo.firstName} name={"firstName"} /> <br/></label>
                <label>Last Name: <textarea onChange={handleChange} value={userInfo.lastName} name={"lastName"} /> <br/></label>
                <label>Mobile Number: <input onChange={handleChange} value={userInfo.mobileNumber} name={"mobileNumber"} type={"tel"} /> <br/></label>
                <label>Email: <input onChange={handleChange} value={userInfo.email} name={"email"} type={"email"} /> <br/></label>
                <input type={"submit"} value={"Submit"} />
            </form>
        </div>
    );
}

export default UserInfo;