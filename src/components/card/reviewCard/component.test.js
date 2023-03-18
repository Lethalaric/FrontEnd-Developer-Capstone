import ReviewCard from "./ReviewCard";
import {render} from "@testing-library/react";

describe("Review card tests", () => {
    test("Review card should be loaded", () => {
        const reviewData = {
            rating: "4.5/5",
            image: "adam.jpg",
            name: "Adam",
            review: "its very good restaurant",
        };

        const {getByText, getByAltText} = render(<ReviewCard {...reviewData} />);
        const nameElement = getByText(reviewData.name);
        const imageElement = getByAltText(reviewData.name + " image");

        expect(nameElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
    })
})