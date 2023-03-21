import React from 'react';
import { render } from '@testing-library/react';
import BookingPage from "./BookingPage";

describe('Booking Page test', () => {
    test('Renders correctly', () => {
        const { container } = render(<BookingPage/>);
        const divElement = container.getElementsByClassName('booking-container');
        expect(divElement).not.toBeNull();
    })
})