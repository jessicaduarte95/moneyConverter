import { render } from '@testing-library/react'
import { App } from '../App';

describe('App Component', () => {
    it('Should return converter', () => {
        const { getByText } = render(<App/>);
        expect(getByText('currency'));
    })
})