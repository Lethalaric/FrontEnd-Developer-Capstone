import React, {useState} from 'react';
import UserInfo from "../../components/reservation/userInfo/UserInfo";
import ReserveDate from "../../components/reservation/reserveDate/ReserveDate";
import ReserveTable from "../../components/reservation/reserveTable/ReserveTable";
import Confirmation from "../../components/reservation/confirmation/Confirmation";

function ReservationPage(props) {
    const [reservation, setReservation] = useState({
        userInfo: null,
        dateInfo: null,
        tableInfo: null,
    });

    const saveReservation = (data) => {
        const name = data.name;
        const value = data.value;
        setReservation({...reservation, [name]: value})
    }

    return (
        <>
            <div>
                <UserInfo saveReservation={saveReservation} />
            </div>
            <div>
                <ReserveDate saveReservation={saveReservation} />
            </div>
            <div>
                <ReserveTable saveReservation={saveReservation} />
            </div>
            <div>
                <Confirmation {...reservation} />
            </div>
        </>
    );
}

export default ReservationPage;