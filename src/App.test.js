import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';


test('Main page renders page', () => {
  render(<App />);
});

test('Footer renders', () => {
  render(<Footer />);
  const FooterElement = screen.getByText(/BSU Nursing | Dr. Renee Walters | reneewalters@boisestate.edu/i);
  expect(FooterElement).toBeInTheDocument();
});

test('Header renders', () => {
render(<Header />);
  const HeaderElement = screen.getByText(/BSU In-Patient Nurse Staffing Simulator/i);
  expect(HeaderElement).toBeInTheDocument();
});

//Will need to be uncommented when merge happens
// test('Staff content renders', () => {
//   render(<AppInMain />);
// });
