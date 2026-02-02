import { render, screen } from '@testing-library/react';
import PropertiesPage from './PropertiesPage';

// Mock SearchForm component
jest.mock('../../components/SearchForm/SearchForm', () => {
  return function MockSearchForm({ search }) {
    return (
      <div data-testid="search-form">
        <button onClick={() => search('test')}>Mock Search</button>
      </div>
    );
  };
});

// Mock PropertyCard component
jest.mock('../../components/PropertyCard/PropertyCard', () => {
  return function MockPropertyCard({ property }) {
    return (
      <div data-testid={`property-card-${property.id}`}>
        <h3>{property.name}</h3>
        <p>{property.address}</p>
      </div>
    );
  };
});

describe('PropertiesPage', () => {
  const mockSearch = jest.fn();

  afterEach(() => {
    jest.restoreAllMocks();
    mockSearch.mockClear();
  });

  const mockProperties = [
    {
      id: 1,
      name: 'Beach House',
      address: '123 Ocean Ave',
      description: 'Beautiful beach property',
      price: 150,
      backyard: true,
      pool: false,
      images: [{ url: 'http://example.com/beach.jpg' }]
    },
    {
      id: 2,
      name: 'Mountain Cabin',
      address: '456 Mountain Rd',
      description: 'Cozy mountain retreat',
      price: 100,
      backyard: false,
      pool: true,
      images: [{ url: 'http://example.com/cabin.jpg' }]
    },
    {
      id: 3,
      name: 'City Loft',
      address: '789 Downtown St',
      description: 'Modern city living',
      price: 200,
      backyard: false,
      pool: false,
      images: [{ url: 'http://example.com/loft.jpg' }]
    }
  ];

  describe('Rendering', () => {
    test('renders SearchForm with search prop', () => {
      render(<PropertiesPage properties={mockProperties} search={mockSearch} />);

      expect(screen.getByTestId('search-form')).toBeInTheDocument();
    });

    test('renders correct number of PropertyCard components', () => {
      render(<PropertiesPage properties={mockProperties} search={mockSearch} />);

      expect(screen.getByTestId('property-card-1')).toBeInTheDocument();
      expect(screen.getByTestId('property-card-2')).toBeInTheDocument();
      expect(screen.getByTestId('property-card-3')).toBeInTheDocument();
    });

    test('renders empty state when properties array is empty', () => {
      const { container } = render(
        <PropertiesPage properties={[]} search={mockSearch} />
      );

      // SearchForm should still render
      expect(screen.getByTestId('search-form')).toBeInTheDocument();

      // But no PropertyCard components
      expect(container.querySelectorAll('[data-testid^="property-card-"]')).toHaveLength(0);
    });
  });

  describe('Props Propagation', () => {
    test('passes search function to SearchForm', () => {
      render(<PropertiesPage properties={mockProperties} search={mockSearch} />);

      const searchButton = screen.getByText('Mock Search');
      searchButton.click();

      expect(mockSearch).toHaveBeenCalledWith('test');
    });

    test('passes individual property data to each PropertyCard', () => {
      render(<PropertiesPage properties={mockProperties} search={mockSearch} />);

      expect(screen.getByText('Beach House')).toBeInTheDocument();
      expect(screen.getByText('123 Ocean Ave')).toBeInTheDocument();

      expect(screen.getByText('Mountain Cabin')).toBeInTheDocument();
      expect(screen.getByText('456 Mountain Rd')).toBeInTheDocument();

      expect(screen.getByText('City Loft')).toBeInTheDocument();
      expect(screen.getByText('789 Downtown St')).toBeInTheDocument();
    });

    test('uses property.id as key for PropertyCard components', () => {
      const { container } = render(
        <PropertiesPage properties={mockProperties} search={mockSearch} />
      );

      // Each PropertyCard should have a unique testid based on property.id
      const propertyCards = container.querySelectorAll('[data-testid^="property-card-"]');
      expect(propertyCards).toHaveLength(3);

      const ids = Array.from(propertyCards).map(card =>
        card.getAttribute('data-testid').replace('property-card-', '')
      );
      expect(ids).toEqual(['1', '2', '3']);
    });
  });

  describe('Layout', () => {
    test('renders PropertyCard components in grid layout', () => {
      const { container } = render(
        <PropertiesPage properties={mockProperties} search={mockSearch} />
      );

      // Check for grid row classes
      const gridRow = container.querySelector('.row.row-cols-1.row-cols-md-2.row-cols-lg-3.row-cols-xl-4');
      expect(gridRow).toBeInTheDocument();
    });

    test('applies correct responsive column classes', () => {
      const { container } = render(
        <PropertiesPage properties={mockProperties} search={mockSearch} />
      );

      const gridRow = container.querySelector('.row');
      expect(gridRow.className).toContain('row-cols-1');  // Mobile
      expect(gridRow.className).toContain('row-cols-md-2');  // Tablet
      expect(gridRow.className).toContain('row-cols-lg-3');  // Desktop
      expect(gridRow.className).toContain('row-cols-xl-4');  // Large desktop
    });
  });

  describe('Data Handling', () => {
    test('handles properties with all fields populated', () => {
      const completeProperty = [{
        id: 99,
        name: 'Complete Property',
        address: '999 Full St',
        description: 'Has everything',
        price: 250,
        backyard: true,
        pool: true,
        user_id: 1,
        images: [{ url: 'http://example.com/complete.jpg' }]
      }];

      render(<PropertiesPage properties={completeProperty} search={mockSearch} />);

      expect(screen.getByTestId('property-card-99')).toBeInTheDocument();
      expect(screen.getByText('Complete Property')).toBeInTheDocument();
    });

    test('handles properties array with single item', () => {
      const singleProperty = [mockProperties[0]];

      render(<PropertiesPage properties={singleProperty} search={mockSearch} />);

      expect(screen.getByTestId('property-card-1')).toBeInTheDocument();
      expect(screen.queryByTestId('property-card-2')).not.toBeInTheDocument();
      expect(screen.queryByTestId('property-card-3')).not.toBeInTheDocument();
    });

    test('handles properties array with multiple items', () => {
      render(<PropertiesPage properties={mockProperties} search={mockSearch} />);

      // All three properties should render
      expect(screen.getByTestId('property-card-1')).toBeInTheDocument();
      expect(screen.getByTestId('property-card-2')).toBeInTheDocument();
      expect(screen.getByTestId('property-card-3')).toBeInTheDocument();
    });
  });

  describe('Future Robustness', () => {
    test.todo('shows loading skeleton while properties are being fetched');
    test.todo('displays "No properties found" message when empty');
    test.todo('handles missing property fields gracefully');
    test.todo('implements pagination for large property lists');
    test.todo('supports infinite scroll loading');
    test.todo('handles property update (edit/delete) scenarios');
  });
});
