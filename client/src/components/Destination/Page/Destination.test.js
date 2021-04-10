import { render } from '@testing-library/react';
import Destination from './Destination';
import {BrowserRouter} from "react-router-dom";

describe('Destination Component', () => {

    it("Destination Component snapshot", () => {
        const { asFragment } = render(<BrowserRouter><Destination /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });

});
