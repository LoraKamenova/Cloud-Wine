import { render } from '@testing-library/react';
import Start from './Start';

describe('Start Component', () => {

    it("Start Component snapshot", () => {
        const { asFragment } = render(<Start />);
        expect(asFragment()).toMatchSnapshot();
    });

});
