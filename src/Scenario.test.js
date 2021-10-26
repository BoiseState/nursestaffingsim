import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scenario from './components/main/Scenario.js';

//Valid
describe("<Scenario />", () => {
    test('Test Unit Input Field', () => {
        render(<Scenario />);
        const inputUnit = screen.getByTestId("unit-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "text");
    
        userEvent.type(inputUnit, "ICU");
        
        expect(screen.getByTestId("unit-id")).toHaveValue("ICU");
    });

    test('Test hppd Input Field', () => {
        render(<Scenario />);
        const inputHppd = screen.getByTestId("hppd-id");
        expect(inputHppd).toBeInTheDocument();
        expect(inputHppd).toHaveAttribute("type", "number");
    
        userEvent.type(inputHppd, "102");
        
        expect(screen.getByTestId("hppd-id")).toHaveValue(102);
    });

    test('Test numbeds Input Field', () => {
        render(<Scenario />);
        const inputNumbeds = screen.getByTestId("numbeds-id");
        expect(inputNumbeds).toBeInTheDocument();
        expect(inputNumbeds).toHaveAttribute("type", "number");
    
        userEvent.type(inputNumbeds, "100");
        
        expect(screen.getByTestId("numbeds-id")).toHaveValue(100);
    });

    
    test('Test census Input Field', () => {
        render(<Scenario />);
        const inputCensus = screen.getByTestId("census-id");
        expect(inputCensus).toBeInTheDocument();
        expect(inputCensus).toHaveAttribute("type", "number");
    
        userEvent.type(inputCensus, "100");
        
        expect(screen.getByTestId("census-id")).toHaveValue(100);
    });
})

/*Due to the refactoring going on I am not pushing the changes required in the scenario .js till the refactoring is merged.

    Changed type to number on hppd, numbeds, and census input fields
*/

//Invalid tests
describe("<Scenario />", () => {
    test('Test Unit Input Field', () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        render(<Scenario />);

        const inputUnit = screen.getByTestId("hppd-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "number");
    
        userEvent.type(inputUnit, "-12");
        
        expect(screen.getByTestId("hppd-id")).toHaveValue(-12);
        expect(screen.findByText("Only positive integers can be entered"));
    });

    test('Test Unit Input Field', () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        render(<Scenario />);

        const inputUnit = screen.getByTestId("numbeds-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "number");
    
        userEvent.type(inputUnit, "-12");
        
        expect(screen.getByTestId("numbeds-id")).toHaveValue(-12);
        expect(screen.findByText("Only positive integers can be entered"));
    });

    test('Test Unit Input Field', () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        render(<Scenario />);

        const inputUnit = screen.getByTestId("census-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "number");
    
        userEvent.type(inputUnit, "-12");
        
        expect(screen.getByTestId("census-id")).toHaveValue(-12);
        expect(screen.findByText("Only positive integers can be entered"));
    });
})
