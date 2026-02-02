import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders button with label text', () => {
    render(<Button label="Click Me" handleClick={() => {}} />);

    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('calls handleClick when button is clicked', () => {
    const mockHandleClick = jest.fn();
    render(<Button label="Submit" handleClick={mockHandleClick} />);

    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(button);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
