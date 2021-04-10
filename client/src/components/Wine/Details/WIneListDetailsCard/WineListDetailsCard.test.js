import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import WineListDetailsCard from './WineListDetailsCard';

describe('WineListDetailsCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <WineListDetailsCard name="Questionmark" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".wdc-fact-name").textContent).toBe('Questionmark');
    });

});
