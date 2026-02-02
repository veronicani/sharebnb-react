import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  test('renders without crashing', () => {
    render(<Loader />);
  });
});
