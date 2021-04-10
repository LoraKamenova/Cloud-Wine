import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DestinationCard from './DestinationCard';

describe('DestinationCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <DestinationCard title="Шато Копса" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".destination-card-title").textContent).toBe('Шато Копса');
    });

    it('Should display card address', () => {
        render(
            <BrowserRouter>
                <DestinationCard address="с. Московец, общ. Карлово" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".destination-card-address").textContent).toBe('с. Московец, общ. Карлово');
    });

    it('Should display card services', () => {
        render(
            <BrowserRouter>
                <DestinationCard services="Дегустация на вина" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".destination-card-services").textContent).toBe('Дегустация на вина');
    });

    it("DestinationCard Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><DestinationCard link="/"/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });

});
