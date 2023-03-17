const dataReservation = {
    userInfo: null,
    dateInfo: null,
    tableInfo: null,
    orderId: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUBMIT":
            return {...state, [action.name]: action.value};
        default:
            return state;
    }
}

export {reducer, dataReservation};