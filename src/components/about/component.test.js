import {render} from "@testing-library/react";
import About from "./About";

describe("About section tests", () => {
    test("About section should be loaded", () => {
        const {getByText} = render(<About />);
        const headerElement = getByText('Little Lemon');

        expect(headerElement).toBeInTheDocument();
    })
})