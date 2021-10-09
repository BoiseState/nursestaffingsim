import { render, screen } from '@testing-library/react';
import AppInMain from './AppInMain';

test('renders learn react link', () => {
    render(<AppInMain />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
