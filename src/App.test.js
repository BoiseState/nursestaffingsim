import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const linkElement = screen.getByText(/BSU In-Patient Nurse Staffing Simulator/i);
  expect(linkElement).toBeInTheDocument();
});