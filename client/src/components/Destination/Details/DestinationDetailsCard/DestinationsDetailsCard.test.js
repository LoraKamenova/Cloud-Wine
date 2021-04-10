import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DestinationDetailsCard from './DestinationDetailsCard';

describe('DestinationDetailsCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <DestinationDetailsCard name="Шато Копса" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".ddc-heading").textContent).toBe('Шато Копса');
    });

    it('Should display card address', () => {
        render(
            <BrowserRouter>
                <DestinationDetailsCard address="с. Московец, общ. Карлово" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".ddc-address").textContent).toBe('с. Московец, общ. Карлово');
    });

    it('Should display card services', () => {
        render(
            <BrowserRouter>
                <DestinationDetailsCard services="Дегустация на вина" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".ddc-services").textContent).toBe('Дегустация на вина');
    });

});
