import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('renders loading message', () => {
    render(<Loader />);

    expect(screen.getByText(/server waking up\.\.\./i)).toBeInTheDocument();
  });
});
