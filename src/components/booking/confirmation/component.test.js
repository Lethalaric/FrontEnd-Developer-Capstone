import Confirmation from "./Confirmation";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe("Confirmation component tests", () => {
    test("Component should be loaded", () => {
        const bookingData = {
            bookingId: 'LLR98127349',
            userInfo: null,
            dateInfo: null,
            tableInfo: null,
        }
        const {getByText} = render(
            <BrowserRouter>
                <Confirmation bookingData={bookingData} />
            </BrowserRouter>
        );
        const bookingIdElement = getByText('Booking ID: '+bookingData.bookingId);

        expect(bookingIdElement).toBeInTheDocument();
    })
})