import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import WineCard from './WineCard';

describe('WineCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <WineCard name="Questionmark" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".wine-card-title").textContent).toBe('Questionmark');
    });

    it("WineCard Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><WineCard link="/"/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });

});
