import { render } from '@testing-library/react'
import { App } from '../App';

describe('App Component', () => {
    it('Should return some text.', () => {
        const { getByText } = render(<App/>);
        expect(getByText('converter'));
        expect(getByText('currency'));
        expect(getByText('Dados disponibilizados pela Morningstar.'));
    })
})