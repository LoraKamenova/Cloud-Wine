import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DictionaryEntry from './DictionaryEntry';

describe('DictionaryEntry Component', () => {
    it('Should display entry title', () => {
        render(
            <BrowserRouter>
                <DictionaryEntry title="Аериране" />
            </BrowserRouter>
        );

        expect(document.querySelector(".dictionary-article-heading").textContent).toBe('Аериране');
    });

    it('Should display entry content', () => {
        render(
            <BrowserRouter>
                <DictionaryEntry fullText="Аерирането на виното означава излагане на виното на въздух или с други думи оставянето му да „подиша“ преди да бъде изпито." />
            </BrowserRouter>
        );

        expect(document.querySelector(".dictionary-article-paragraph").textContent).toBe('Аерирането на виното означава излагане на виното на въздух или с други думи оставянето му да „подиша“ преди да бъде изпито.');
    });

});
