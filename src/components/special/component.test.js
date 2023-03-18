import Special from "./Special";
import {render} from "@testing-library/react";

describe("Special section tests", () => {
    test("Special section should be loaded", () => {
        const { getByText } = render(<Special />);
        const h1Element = getByText('Specials');
        const buttonElement = getByText('Online Delivery');
        expect(h1Element).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    })
})