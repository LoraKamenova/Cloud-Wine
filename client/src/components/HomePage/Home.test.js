import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './Home';

describe('DictionaryEntry Component', () => {

    it("renders", () => {
        const { asFragment } = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });

});
