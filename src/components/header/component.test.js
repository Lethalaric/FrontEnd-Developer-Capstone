import Header from "./Header";
import {render} from "@testing-library/react";

describe("Header section tests", () => {
    test("Header should be loaded", () => {
        const {getByText} = render(<Header />);
        const headerTitle = getByText('Little Lemon');

        expect(headerTitle).toBeInTheDocument();
    })
})