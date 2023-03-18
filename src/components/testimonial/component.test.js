import {render} from "@testing-library/react";
import Testimonial from "./Testimonial";

describe("Testimonial unit tests", () => {
    test("Testimonial component should be loaded", () => {
        const {getByText} = render(<Testimonial />);
        const h1Element = getByText('Testimonials');
        expect(h1Element).toBeInTheDocument();
    })
})