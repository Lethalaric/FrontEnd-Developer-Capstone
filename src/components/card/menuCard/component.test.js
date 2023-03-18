import MenuCard from "./MenuCard";
import {render} from "@testing-library/react";

describe('Menu card tests', () => {
    test('Menu card should loaded', () => {
        const menuData = {
            title: "Spaghetti",
            price: "10.00",
            description: "Just plain spaghetti",
            image: "spaghetti.jpg",
        };
        const {getByText, getByAltText} = render(<MenuCard {...menuData} />);
        const headerElement = getByText(menuData.title);
        const imageElement = getByAltText(menuData.title+ " image");

        expect(headerElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
    })
})