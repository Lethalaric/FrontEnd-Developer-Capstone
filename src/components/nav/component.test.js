import Nav from "./Nav";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe("Navigation section tests", () => {
    test("Navigation should be loaded", () => {
        const {getByText} = render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );
        const homeElement = getByText('HOME');
        const aboutElement = getByText('ABOUT');
        const menuElement = getByText('MENU');
        const bookingElement = getByText('BOOKING');
        const orderOnlineElement = getByText('ORDER ONLINE');
        const loginElement = getByText('LOGIN');

        expect(homeElement).toBeInTheDocument();
        expect(aboutElement).toBeInTheDocument();
        expect(menuElement).toBeInTheDocument();
        expect(bookingElement).toBeInTheDocument();
        expect(orderOnlineElement).toBeInTheDocument();
        expect(loginElement).toBeInTheDocument();
    })
})