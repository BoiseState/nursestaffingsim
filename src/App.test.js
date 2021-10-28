import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import { act } from 'react-dom/test-utils';
import Scenario from './components/main/Scenario';


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
  render(<Scenario />);
  const HeaderElement = screen.getByText(/allocate your staffing resources/i);
  expect(HeaderElement).toBeInTheDocument();
});


//Will need to be uncommented when merge happens
// test('Staff content renders', () => {
//   render(<AppInMain />);
// });

// testing reload image click in header
// found implementation that I built on top of here: https://stackoverflow.com/a/61649798
test('reload on image click works', () => {
  render(<App />);
  const location = window.location;
  delete window.location;
  window.location = {
    ...location,
    reload: jest.fn()
  };

  const imgBtn = screen.getByTestId(/reload/i);
  act(() => {
    imgBtn.dispatchEvent(new MouseEvent("click", { bubbles: true}));
  });

  expect(window.location.reload).toHaveBeenCalledTimes(1);
  jest.restoreAllMocks();
  window.location = location;
});
