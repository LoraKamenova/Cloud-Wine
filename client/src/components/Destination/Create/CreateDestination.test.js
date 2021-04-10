import { render } from '@testing-library/react';
import CreateDestination from './CreateDestination';

describe('CreateDestination Component', () => {

    it("CreateDestination Component snapshot", () => {
        const { asFragment } = render(<CreateDestination />);
        expect(asFragment()).toMatchSnapshot();
    });

});
