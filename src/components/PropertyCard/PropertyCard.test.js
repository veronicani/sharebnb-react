import { render, screen } from '@testing-library/react';
import PropertyCard from './PropertyCard';

describe('PropertyCard', () => {
  const mockProperty = {
    id: 1,
    name: 'Sunny Beach House',
    address: '123 Ocean Ave',
    description: 'Beautiful beachfront property',
    price: 150,
    backyard: true,
    pool: false,
    user_id: 1,
    images: [{ url: 'http://example.com/beach.jpg' }]
  };

  describe('Rendering Content', () => {
    test('renders property name as heading', () => {
      render(<PropertyCard property={mockProperty} />);

      expect(screen.getByRole('heading', { name: /sunny beach house/i })).toBeInTheDocument();
    });

    test('renders property description', () => {
      render(<PropertyCard property={mockProperty} />);

      expect(screen.getByText(/beautiful beachfront property/i)).toBeInTheDocument();
    });

    test('renders property address', () => {
      render(<PropertyCard property={mockProperty} />);

      expect(screen.getByText(/123 ocean ave/i)).toBeInTheDocument();
    });

    test('renders property image with correct src and alt text', () => {
      render(<PropertyCard property={mockProperty} />);

      const image = screen.getByAltText(/sunny beach house/i);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'http://example.com/beach.jpg');
    });

    test('displays price formatted with dollar sign and per day', () => {
      render(<PropertyCard property={mockProperty} />);

      expect(screen.getByText('$150')).toBeInTheDocument();
      expect(screen.getByText('/day')).toBeInTheDocument();
    });
  });

  describe('Conditional Badge Rendering', () => {
    test('shows pool badge when property has pool', () => {
      const propertyWithPool = { ...mockProperty, pool: true };
      render(<PropertyCard property={propertyWithPool} />);

      expect(screen.getByText(/pool/i)).toBeInTheDocument();
    });

    test('does not show pool badge when property has no pool', () => {
      const propertyWithoutPool = { ...mockProperty, pool: false };
      render(<PropertyCard property={propertyWithoutPool} />);

      expect(screen.queryByText(/pool/i)).not.toBeInTheDocument();
    });

    test('shows backyard badge when property has backyard', () => {
      render(<PropertyCard property={mockProperty} />);

      expect(screen.getByText(/backyard/i)).toBeInTheDocument();
    });

    test('does not show backyard badge when property has no backyard', () => {
      const propertyWithoutBackyard = { ...mockProperty, backyard: false };
      render(<PropertyCard property={propertyWithoutBackyard} />);

      expect(screen.queryByText(/backyard/i)).not.toBeInTheDocument();
    });

    test('shows both badges when property has both pool and backyard', () => {
      const propertyWithBoth = { ...mockProperty, pool: true, backyard: true };
      render(<PropertyCard property={propertyWithBoth} />);

      expect(screen.getByText(/pool/i)).toBeInTheDocument();
      expect(screen.getByText(/backyard/i)).toBeInTheDocument();
    });
  });
});
