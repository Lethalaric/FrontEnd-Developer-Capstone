import ReserveDate from "./ReserveDate";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe("Reserve date component test", () => {
    test("Component should be loaded", () => {
        const {getByText} = render(
            <BrowserRouter>
                <ReserveDate />
            </BrowserRouter>
        );
        const element = getByText('Available Times');

        expect(element).toBeInTheDocument();
    })

    test("Date is required", () => {
        const {container} = render(
            <BrowserRouter>
                <ReserveDate />
            </BrowserRouter>
        );

        const dateElement = container.querySelector('input[name="date"]');

        expect(dateElement).toBeRequired();
    })

    test("Available time is required", () => {
        const {container} = render(
            <BrowserRouter>
                <ReserveDate />
            </BrowserRouter>
        );

        const timeframeElement = container.querySelector('select[name="timeframe"]');

        expect(timeframeElement).toBeRequired();
    })
})