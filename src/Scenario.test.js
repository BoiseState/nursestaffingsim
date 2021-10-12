import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scenario from './components/main/Scenario.js';

describe("<Scenario />", () => {
    test('Test Unit Input Fields', () => {
        render(<Scenario />);
        const inputEl = screen.getByTestID("unit-id");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
    
        userEvent.type(inputEl, "The quick brown fox jumped over the lazy dog!");
        
        expect(screen.getByTestId("unit-id")).toHaveValue("The quick brown fox jumped over the lazy dog!");
    });
})




//Will need to be uncommented when merge happens
// test('Staff content renders', () => {
//   render(<AppInMain />);
// });
