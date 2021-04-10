import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RedDictionaryCard from './RedDictionaryCard';
import DictionaryEntry from "../../../Details/DictionaryEntry/DictionaryEntry";

describe('RedDictionaryCard Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <RedDictionaryCard title="Аериране" link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".red-dictionary-card-title").textContent).toBe('Аериране');
    });

    it('Should display card content', () => {
        render(
            <BrowserRouter>
                <RedDictionaryCard shortText="Аерирането на виното означава излагане на виното на въздух или..." link="/"/>
            </BrowserRouter>
        );

        expect(document.querySelector(".red-dictionary-card-text").textContent).toBe('Аерирането на виното означава излагане на виното на въздух или...');
    });

    it("RedDictionaryCard Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><RedDictionaryCard link="/"/></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });

});
