import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import ShareBnB from './services/api';

// Mock the API
jest.mock('./services/api');

// Mock child components
jest.mock('./components/Navbar/Navbar', () => {
  return function MockNavbar() {
    return <div data-testid="navbar">Navbar</div>;
  };
});

jest.mock('./components/Footer/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

jest.mock('./components/Loader/Loader', () => {
  return function MockLoader() {
    return <div data-testid="loader">Loading...</div>;
  };
});

jest.mock('./RoutesList', () => {
  return function MockRoutesList() {
    return <div data-testid="routes-list">Routes</div>;
  };
});

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows loader initially while fetching properties', () => {
    ShareBnB.getProperties.mockImplementation(() => new Promise(() => {})); // Never resolves

    render(<App />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('shows error message when API call fails', async () => {
    ShareBnB.getProperties.mockRejectedValueOnce(new Error('Server error'));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/server error\. please try again\./i)).toBeInTheDocument();
    });
  });

  test('renders main app structure after successful load', async () => {
    const mockProperties = [
      { id: 1, name: 'Property 1' },
      { id: 2, name: 'Property 2' }
    ];

    ShareBnB.getProperties.mockResolvedValueOnce({ properties: mockProperties });
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
    expect(screen.getByTestId('routes-list')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('calls API to fetch properties on mount', async () => {
    ShareBnB.getProperties.mockResolvedValueOnce({ properties: [] });
    render(<App />);

    await waitFor(() => {
      expect(ShareBnB.getProperties).toHaveBeenCalledTimes(1);
    });
  });
});
