import {fireEvent, render} from "@testing-library/react";
import ReserveTable from "./ReserveTable";
import {BrowserRouter} from "react-router-dom";

describe("Reserve table component test", () => {
    test("Component should be loaded", () => {
        const {getByText} = render(
            <BrowserRouter>
                <ReserveTable />
            </BrowserRouter>
        );
        const element = getByText('Number of Guests');

        expect(element).toBeInTheDocument();
    })

    test("Number of guests should be filled", () => {
        const {container} = render(
            <BrowserRouter>
                <ReserveTable />
            </BrowserRouter>
        )

        const numberOfGuestsElement = container.querySelector('input[name="numberOfGuests"]');

        fireEvent.change(numberOfGuestsElement, {target: {value: '123'}});

        expect(numberOfGuestsElement).toBeValid();
    })

    test("Number of guests should be filled with numbers", () => {
        const {container} = render(
            <BrowserRouter>
                <ReserveTable />
            </BrowserRouter>
        )

        const numberOfGuestsElement = container.querySelector('input[name="numberOfGuests"]');

        fireEvent.change(numberOfGuestsElement, {target: {value: '123'}});

        expect(numberOfGuestsElement).toBeValid();
    })

    test("Number of guests should be invalid if using -1", () => {
        const {container} = render(
            <BrowserRouter>
                <ReserveTable />
            </BrowserRouter>
        )

        const numberOfGuestsElement = container.querySelector('input[name="numberOfGuests"]');

        fireEvent.change(numberOfGuestsElement, {target: {value: '-1'}});

        expect(numberOfGuestsElement).toBeInvalid();
    })

    test("Number of guests should be invalid if using words", () => {
        const {container} = render(
            <BrowserRouter>
                <ReserveTable />
            </BrowserRouter>
        )

        const numberOfGuestsElement = container.querySelector('input[name="numberOfGuests"]');

        fireEvent.change(numberOfGuestsElement, {target: {value: 'hello'}});

        expect(numberOfGuestsElement).toBeInvalid();
    })

    test("Number of guests should be filled", () => {
        const {container} = render(
            <BrowserRouter>
                <ReserveTable />
            </BrowserRouter>
        )

        const numberOfGuestsElement = container.querySelector('input[name="numberOfGuests"]');

        expect(numberOfGuestsElement).toBeRequired();
    })
})