import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import WhiteDictionaryCard from './WhiteDictionaryCard';
import RedDictionaryCard from "../RedDictionaryCard/RedDictionaryCard";

describe('WhiteDictionaryCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <WhiteDictionaryCard title="Аериране" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".white-dictionary-card-title").textContent).toBe('Аериране');
    });

    it('Should display card content', () => {
        render(
            <BrowserRouter>
                <WhiteDictionaryCard shortText="Аерирането на виното означава излагане на виното на въздух или..." link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".white-dictionary-card-text").textContent).toBe('Аерирането на виното означава излагане на виното на въздух или...');
    });

    it("WhiteDictionaryCard Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><WhiteDictionaryCard link="/"/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});
