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
        const reservationsElement = getByText('RESERVATIONS');
        const orderOnlineElement = getByText('ORDER ONLINE');
        const loginElement = getByText('LOGIN');

        expect(homeElement).toBeInTheDocument();
        expect(aboutElement).toBeInTheDocument();
        expect(menuElement).toBeInTheDocument();
        expect(reservationsElement).toBeInTheDocument();
        expect(orderOnlineElement).toBeInTheDocument();
        expect(loginElement).toBeInTheDocument();
    })
})