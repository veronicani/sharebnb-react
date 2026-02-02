import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

// Mock Button component to simplify testing
jest.mock('../Button/Button', () => {
  return function MockButton({ label, handleClick }) {
    return <button onClick={handleClick}>{label}</button>;
  };
});

describe('SearchForm', () => {
  const mockSearch = jest.fn();

  afterEach(() => {
    jest.restoreAllMocks();
    mockSearch.mockClear();
  });

  function renderComponent() {
    return render(<SearchForm search={mockSearch} />);
  }

  describe('Rendering', () => {
    test('renders search input with correct placeholder', () => {
      renderComponent();

      const input = screen.getByPlaceholderText(/search by location or name/i);
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('name', 'searchTerm');
    });

    test('renders submit button with correct label', () => {
      renderComponent();

      expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('input starts with empty value', () => {
      renderComponent();

      const input = screen.getByPlaceholderText(/search by location or name/i);
      expect(input.value).toBe('');
    });
  });

  describe('Form Submission', () => {
    test('calls search with trimmed search term on submit', () => {
      renderComponent();

      const input = screen.getByPlaceholderText(/search by location or name/i);
      const submitButton = screen.getByText('Submit');

      fireEvent.change(input, { target: { value: 'beach house' } });
      fireEvent.click(submitButton);

      expect(mockSearch).toHaveBeenCalledTimes(1);
      expect(mockSearch).toHaveBeenCalledWith('beach house');

      fireEvent.change(input, { target: { value: '  beach house  ' } });
      fireEvent.click(submitButton);
      
      expect(mockSearch).toHaveBeenCalledTimes(2);
      expect(mockSearch).toHaveBeenCalledWith('beach house');
    });

    test('passes undefined when search term is empty', () => {
      renderComponent();

      const submitButton = screen.getByText('Submit');

      fireEvent.click(submitButton);

      expect(mockSearch).toHaveBeenCalledTimes(1);
      expect(mockSearch).toHaveBeenCalledWith(undefined);
    });

    test('passes undefined when search term is only whitespace', () => {
      renderComponent();

      const input = screen.getByPlaceholderText(/search by location or name/i);
      const submitButton = screen.getByText('Submit');

      fireEvent.change(input, { target: { value: '   ' } });
      fireEvent.click(submitButton);

      expect(mockSearch).toHaveBeenCalledWith(undefined);
    });

    test('updates input to trimmed value after submission', () => {
      renderComponent();

      const input = screen.getByPlaceholderText(/search by location or name/i);
      const submitButton = screen.getByText('Submit');

      fireEvent.change(input, { target: { value: '  beach house  ' } });
      fireEvent.click(submitButton);

      expect(input.value).toBe('beach house');
    });

    test('clears input to empty string when only whitespace submitted', () => {
      renderComponent();

      const input = screen.getByPlaceholderText(/search by location or name/i);
      const submitButton = screen.getByText('Submit');

      fireEvent.change(input, { target: { value: '   ' } });
      fireEvent.click(submitButton);

      expect(input.value).toBe('');
    });
  });
});
