import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddPropertyPage from './AddPropertyPage';

// Mock useNavigate from react-router-dom
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock Button component to simplify testing
jest.mock('../../components/Button/Button', () => {
  return function MockButton({ label, handleClick }) {
    return <button onClick={handleClick}>{label}</button>;
  };
});

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
    });

    test('renders submit button with correct label', () => {
      renderComponent();

      expect(screen.getByText('Add Property')).toBeInTheDocument();
    });

    test('shows correct heading', () => {
      renderComponent();

      expect(screen.getByText('Add your backyard or pool!')).toBeInTheDocument();
    });
  });

  describe('Form Interactions', () => {
    test('updates text input values on change', () => {
      renderComponent();

      const nameInput = screen.getByLabelText(/property name/i);
      const addressInput = screen.getByLabelText(/address/i);

      fireEvent.change(nameInput, { target: { value: 'Sunny Villa' } });
      fireEvent.change(addressInput, { target: { value: '123 Beach St' } });

      expect(nameInput.value).toBe('Sunny Villa');
      expect(addressInput.value).toBe('123 Beach St');
    });

    test('updates textarea for description', () => {
      renderComponent();

      const descriptionInput = screen.getByLabelText(/description/i);
      fireEvent.change(descriptionInput, { target: { value: 'Beautiful property' } });

      expect(descriptionInput.value).toBe('Beautiful property');
    });

    test('updates number input for price', () => {
      renderComponent();

      const priceInput = screen.getByLabelText(/price/i);
      fireEvent.change(priceInput, { target: { value: '150' } });

      expect(priceInput.value).toBe('150');
    });

    test('toggles checkbox values', () => {
      renderComponent();

      const backyardCheckbox = screen.getByLabelText(/backyard/i);
      const poolCheckbox = screen.getByLabelText(/pool/i);

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
    test('calls addProperty with correct formData and file on submit', async () => {
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
      fireEvent.click(screen.getByLabelText(/pool/i));

      const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      fireEvent.change(screen.getByLabelText(/image/i), {
        target: { files: [file] }
      });

      // Submit form
      fireEvent.click(screen.getByText('Add Property'));

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
    });

    test('resets form to initial state after successful submission', async () => {
      mockAddProperty.mockResolvedValueOnce({});
      renderComponent();

      // Fill out form
      const nameInput = screen.getByLabelText(/property name/i);
      const addressInput = screen.getByLabelText(/address/i);

      fireEvent.change(nameInput, { target: { value: 'Test Property' } });
      fireEvent.change(addressInput, { target: { value: 'Test Address' } });

      // Submit form
      fireEvent.click(screen.getByText('Add Property'));

      await waitFor(() => {
        expect(nameInput.value).toBe('');
        expect(addressInput.value).toBe('');
      });
    });

    test('navigates to "/" after submission', async () => {
      mockAddProperty.mockResolvedValueOnce({});
      renderComponent();

      // Fill minimal required fields
      fireEvent.change(screen.getByLabelText(/property name/i), {
        target: { value: 'Test' }
      });

      const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      fireEvent.change(screen.getByLabelText(/image/i), {
        target: { files: [file] }
      });

      // Submit form
      fireEvent.click(screen.getByText('Add Property'));

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/');
      });
    });
    /**
     * Verifies that form submission prevents the browser's default behavior
     * (page refresh), allowing React to handle the submission via JS.
     */
    test('prevents default form submission behavior', async () => {
      mockAddProperty.mockResolvedValueOnce({});
      renderComponent();

      const form = screen.getByRole('button', { name: /add property/i }).closest('form');
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
      const preventDefaultSpy = jest.spyOn(submitEvent, 'preventDefault');

      form.dispatchEvent(submitEvent);

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  describe('Future Robustness', () => {
    test.todo('handles validation errors from API');
    test.todo('displays loading state during submission');
    test.todo('shows error message if submission fails');
    test.todo('disables submit button during submission');
    test.todo('validates required fields before submission');
    test.todo('shows file preview after image selection');
  });
});
