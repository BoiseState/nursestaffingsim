import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Main from './components/main/Main.js';


test('Main page renders', () => {
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

test('Scenario content renders', () => {
  render(<Main />);
  const HeaderElement = screen.getByText(/allocate your staffing resources/i);
  expect(HeaderElement).toBeInTheDocument();
});


//Will need to be uncommented when merge happens
// test('Staff content renders', () => {
//   render(<AppInMain />);
// });
