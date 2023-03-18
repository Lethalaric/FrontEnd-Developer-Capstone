import {render} from "@testing-library/react";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom";

describe("Footer section tests", () => {
    test("Footer should be loaded", () => {
        const {getByText, getByAltText} = render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        const headerElement = getByText('Doormat Navigation');
        const imageElement = getByAltText('logo');

        expect(headerElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
    })
})