import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddPropertyPage from './AddPropertyPage';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('AddPropertyPage', () => {
  const mockAddProperty = jest.fn();
  
  afterEach(() => {
    jest.restoreAllMocks();
    mockAddProperty.mockClear();
    mockNavigate.mockClear();
  });

  function renderComponent() {
    return render(
      <BrowserRouter>
        <AddPropertyPage addProperty={mockAddProperty} />
      </BrowserRouter>
    );
  }

  describe('Rendering', () => {
    test('renders form with all input fields', () => {
      renderComponent();

      expect(screen.getByLabelText(/property name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/backyard/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/pool/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /add property/i })).toBeInTheDocument();
    });
  });

  describe('Form Interactions', () => {
    test('toggles checkbox values', () => {
      renderComponent();

      const backyardCheckbox = screen.getByRole('checkbox', { name: /backyard/i });
      const poolCheckbox = screen.getByRole('checkbox', { name: /pool/i });

      expect(backyardCheckbox.checked).toBe(false);
      expect(poolCheckbox.checked).toBe(false);

      fireEvent.click(backyardCheckbox);
      fireEvent.click(poolCheckbox);

      expect(backyardCheckbox.checked).toBe(true);
      expect(poolCheckbox.checked).toBe(true);
    });

    test('handles file upload input', () => {
      renderComponent();

      const fileInput = screen.getByLabelText(/image/i);
      const file = new File(['image'], 'property.jpg', { type: 'image/jpeg' });

      fireEvent.change(fileInput, { target: { files: [file] } });

      expect(fileInput.files[0]).toBe(file);
      expect(fileInput.files[0].name).toBe('property.jpg');
    });
  });

  describe('Form Submission', () => {
    test('calls addProperty with correct formData on submit', async () => {
      mockAddProperty.mockResolvedValueOnce({});
      renderComponent();

      // Fill out form
      fireEvent.change(screen.getByLabelText(/property name/i), {
        target: { value: 'Test Property' }
      });
      fireEvent.change(screen.getByLabelText(/address/i), {
        target: { value: '456 Test Ave' }
      });
      fireEvent.change(screen.getByLabelText(/description/i), {
        target: { value: 'Test description' }
      });
      fireEvent.change(screen.getByLabelText(/price/i), {
        target: { value: '200' }
      });
      fireEvent.click(screen.getByRole('checkbox', { name: /pool/i }));

      const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      fireEvent.change(screen.getByLabelText(/image/i), {
        target: { files: [file] }
      });

      // Submit form
      fireEvent.click(screen.getByRole('button', { name: /add property/i }));

      await waitFor(() => {
        expect(mockAddProperty).toHaveBeenCalledTimes(1);
      });

      const [formData, uploadedFile] = mockAddProperty.mock.calls[0];
      expect(formData.name).toBe('Test Property');
      expect(formData.address).toBe('456 Test Ave');
      expect(formData.description).toBe('Test description');
      expect(formData.price).toBe('200');
      expect(formData.pool).toBe(true);
      expect(formData.backyard).toBe(false);
      expect(uploadedFile).toBe(file);

      // Verify navigation after successful submission
      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/');
      });
    });

    test('resets form to initial state after successful submission', async () => {
      mockAddProperty.mockResolvedValueOnce({});
      renderComponent();

      // Fill out form
      const nameInput = screen.getByLabelText(/property name/i);
      const addressInput = screen.getByLabelText(/address/i);

      fireEvent.change(nameInput, { target: { value: 'Test Property' } });
      fireEvent.change(addressInput, { target: { value: 'Test Address' } });

      fireEvent.click(screen.getByRole('button', { name: /add property/i }));

      await waitFor(() => {
        expect(nameInput.value).toBe('');
      });
      expect(addressInput.value).toBe('');
    });
  });
});