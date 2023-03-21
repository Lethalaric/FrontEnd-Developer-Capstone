const dataBooking = {
    userInfo: null,
    dateInfo: null,
    tableInfo: null,
    bookingId: null,
}

const bookingReducer = (state, action) => {
    switch (action.type) {
        case "SUBMIT":
            return {...state, [action.name]: action.value};
        default:
            return state;
    }
}

export {bookingReducer, dataBooking};