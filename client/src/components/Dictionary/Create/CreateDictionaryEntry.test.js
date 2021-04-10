import { render } from '@testing-library/react';
import CreateDictionaryEntry from './CreateDictionaryEntry';

describe('CreateDictionaryEntry Component', () => {

    it("CreateDictionaryEntry Component snapshot", () => {
        const { asFragment } = render(<CreateDictionaryEntry />);
        expect(asFragment()).toMatchSnapshot();
    });

});
