import { render } from '@testing-library/react';
import Register from './Register';

describe('Register Component', () => {

    it("Register Component snapshot", () => {
        const { asFragment } = render(<Register />);
        expect(asFragment()).toMatchSnapshot();
    });

});
