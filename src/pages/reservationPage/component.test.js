import React from 'react';
import { render } from '@testing-library/react';
import ReservationPage from "./ReservationPage";

describe('Reservation Page test', () => {
    test('Renders correctly', () => {
        const { container } = render(<ReservationPage/>);
        const divElement = container.getElementsByClassName('reservation-container');
        expect(divElement).not.toBeNull();
    })
})