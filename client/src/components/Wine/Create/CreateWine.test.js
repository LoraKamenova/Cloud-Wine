import { render } from '@testing-library/react';
import CreateWine from './CreateWine';

describe('CreateWine Component', () => {

    it("CreateWine Component snapshot", () => {
        const { asFragment } = render(<CreateWine />);
        expect(asFragment()).toMatchSnapshot();
    });

});
