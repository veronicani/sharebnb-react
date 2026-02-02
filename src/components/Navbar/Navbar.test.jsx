import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

// Mock the SVG logo
jest.mock('../../images/sharebnb-logo-text-color.svg', () => ({
  ReactComponent: () => <div data-testid="logo">ShareBnB Logo</div>
}));

describe('Navbar', () => {
  const mockSearch = jest.fn();

  afterEach(() => {
    mockSearch.mockClear();
  });

  function renderNavbar() {
    return render(
      <BrowserRouter>
        <Navbar search={mockSearch} />
      </BrowserRouter>
    );
  }

  describe('Navigation Links', () => {
    test('renders Add Property link', () => {
      renderNavbar();

      const addPropertyLink = screen.getByRole('link', { name: /add property/i });
      expect(addPropertyLink).toBeInTheDocument();
      expect(addPropertyLink).toHaveAttribute('href', '/add-property');
    });

    test('renders logo as link to home', () => {
      renderNavbar();

      const logoLink = screen.getByRole('link', { name: /sharebnb logo/i });
      expect(logoLink).toBeInTheDocument();
      expect(logoLink).toHaveAttribute('href', '/');
    });
  });

  describe('Logo Interaction', () => {
    test('calls search function when logo is clicked', () => {
      renderNavbar();

      const logoLink = screen.getByRole('link', { name: /sharebnb logo/i });
      fireEvent.click(logoLink);

      expect(mockSearch).toHaveBeenCalledTimes(1);
      expect(mockSearch).toHaveBeenCalledWith();
    });
  });
});
