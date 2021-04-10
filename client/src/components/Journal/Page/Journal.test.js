import { render } from '@testing-library/react';
import Journal from './Journal';
import {BrowserRouter} from "react-router-dom";

describe('Journal Component', () => {

    it("Journal Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><Journal /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });

});
