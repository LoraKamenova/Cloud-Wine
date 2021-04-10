import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import JournalDetailsCard from './JournalDetailsCard';

describe('JournalDetailsCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <JournalDetailsCard title="Незабравима ваканция" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".jdc-heading").textContent).toBe('Незабравима ваканция');
    });

    it('Should display place', () => {
        render(
            <BrowserRouter>
                <JournalDetailsCard place="Шато Коларово" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".jdc-place").textContent).toBe('Шато Коларово');
    });

    it('Should display time', () => {
        render(
            <BrowserRouter>
                <JournalDetailsCard time="лято 2020" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".jdc-time").textContent).toBe('лято 2020');
    });

    it('Should display description', () => {
        render(
            <BrowserRouter>
                <JournalDetailsCard description="Това е разказ какво правихме през лятната отпуска." link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".jdc-description").textContent).toBe('Това е разказ какво правихме през лятната отпуска.');
    });

    it("JournalDetailsCard Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><JournalDetailsCard link="/"/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });

});
