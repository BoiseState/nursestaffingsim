import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import { act } from 'react-dom/test-utils';
import Scenario from './components/main/Scenario';
import {createMemoryHistory} from 'history'
import { BrowserRouter as Router } from 'react-router-dom';

test('App renders', () => {
  // this test is passing but there is a console warn about no routes matched location "/"
  // testing with routes is tricky and it originally was failing these tests altogether
  // so even though it's doing the console warn, it is still passing the test and I'm satisfied for now
  const history = createMemoryHistory();
  const route = '/nursestaffingsim';
  history.push(route);
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  expect(screen.getByText(/Inpatient/i)).toBeInTheDocument();
});

test('Footer renders', () => {
  render(<Footer />);
  const FooterElement = screen.getByText(/BSU Nursing | Dr. Renee Walters | reneewalters@boisestate.edu/i);
  expect(FooterElement).toBeInTheDocument();
});

test('Header renders', () => {
  const history = createMemoryHistory();
  const route = '/nursestaffingsim';
  history.push(route);
  render(
    <Router history={history}>
      <Header />
    </Router>
    );
  const HeaderElement = screen.getByText(/Inpatient Nurse Staffing Simulator/i);
  expect(HeaderElement).toBeInTheDocument();
});

test('Scenario content renders', () => {
  render(<Scenario />);
  const HeaderElement = screen.getByText(/Hospital unit/i);
  expect(HeaderElement).toBeInTheDocument();
});

// testing reload image click in header
// found implementation that I built on top of here: https://stackoverflow.com/a/61649798
test('reload on image click works', () => {
  const history = createMemoryHistory();
  const route = '/nursestaffingsim';
  history.push(route);
  render(
    <Router history={history}>
      <App />
    </Router>,
  );
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
