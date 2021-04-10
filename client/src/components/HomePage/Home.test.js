import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {

    it("Home Component snapshot", () => {
        const { asFragment } = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });

});
