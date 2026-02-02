import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders GitHub link with correct href', () => {
    render(<Footer />);

    const githubLink = screen.getByRole('link');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/veronicani/sharebnb-react');
  });
});
