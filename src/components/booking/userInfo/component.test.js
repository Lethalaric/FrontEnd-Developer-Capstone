import {fireEvent, render} from "@testing-library/react";
import UserInfo from "./UserInfo";
import {BrowserRouter} from "react-router-dom";

describe("User Info component test", () => {
    test("Component should be loaded", () => {
        const {getByText} = render(
            <BrowserRouter>
                <UserInfo />
            </BrowserRouter>
        );
        const element = getByText('First Name');

        expect(element).toBeInTheDocument();
    });

    test("First name is required", () => {
        const {container } = render(
            <BrowserRouter>
                <UserInfo />
            </BrowserRouter>
        );
        const firstnameElement = container.querySelector('input[name="firstName"]');
        expect(firstnameElement).not.toBeNull();
        expect(firstnameElement).toBeInTheDocument();
        expect(firstnameElement).toBeRequired();
    })

    test("Mobile phone should be 10 number", () => {
        const {container } = render(
            <BrowserRouter>
                <UserInfo />
            </BrowserRouter>
        );
        const mobileNumberElement = container.querySelector('input[name="mobileNumber"]');

        fireEvent.change(mobileNumberElement, { target: { value: 'invalid input' } });

        expect(mobileNumberElement).toBeInvalid();
        expect(mobileNumberElement).not.toBeNull();
        expect(mobileNumberElement).toBeInTheDocument();
        expect(mobileNumberElement).toBeRequired();
    })

    test("Email should be filled", () => {
        const {container } = render(
            <BrowserRouter>
                <UserInfo />
            </BrowserRouter>
        );
        const emailElement = container.querySelector('input[name="email"]');

        fireEvent.change(emailElement, { target: { value: 'invalid input' } });

        expect(emailElement).toBeInvalid();
        expect(emailElement).not.toBeNull();
        expect(emailElement).toBeInTheDocument();
        expect(emailElement).toBeRequired();
    })
})