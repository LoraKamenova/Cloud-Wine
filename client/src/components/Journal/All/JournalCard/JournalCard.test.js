import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import JournalCard from './JournalCard';

describe('JournalCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <JournalCard title="Незабравима ваканция" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".journal-card-title").textContent).toBe('Незабравима ваканция');
    });

    it("JournalCard Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><JournalCard link="/"/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });

});
