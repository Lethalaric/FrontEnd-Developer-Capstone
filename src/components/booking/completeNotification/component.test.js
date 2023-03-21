import CompleteNotification from "./CompleteNotification";
import {render, fireEvent} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe("Complete Notification Tests", () => {
    test("Component should be loaded", () => {
        const onClickMock = jest.fn();
        const {getByText, getByRole} = render(
            <BrowserRouter>
                <CompleteNotification />
            </BrowserRouter>
        );
        const headerElement = getByText('Booking has been accepted');
        const buttonElement = getByRole('button');
        fireEvent.click(buttonElement);

        expect(headerElement).toBeInTheDocument();
        expect(buttonElement).toBeEnabled();
    })
})