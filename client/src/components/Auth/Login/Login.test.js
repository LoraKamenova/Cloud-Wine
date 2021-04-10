import { render } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {

    it("Login Component snapshot", () => {
        const { asFragment } = render(<Login />);
        expect(asFragment()).toMatchSnapshot();
    });

});
