import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scenario from './components/main/Scenario.js';

describe("<Scenario />", () => {
    test('Test Unit Input Field', () => {
        render(<Scenario />);
        const inputUnit = screen.getByTestId("unit-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "text");
    
        userEvent.type(inputUnit, "ICU");
        
        expect(screen.getByTestId("unit-id")).toHaveValue("ICU");
    });
})


describe("<Scenario />", () => {
    test('Test hppd Input Field', () => {
        render(<Scenario />);
        const inputHppd = screen.getByTestId("hppd-id");
        expect(inputHppd).toBeInTheDocument();
        expect(inputHppd).toHaveAttribute("type", "number");
    
        userEvent.type(inputHppd, "102");
        
        expect(screen.getByTestId("hppd-id")).toHaveValue(102);
    });
})

describe("<Scenario />", () => {
    test('Test numbeds Input Field', () => {
        render(<Scenario />);
        const inputNumbeds = screen.getByTestId("numbeds-id");
        expect(inputNumbeds).toBeInTheDocument();
        expect(inputNumbeds).toHaveAttribute("type", "number");
    
        userEvent.type(inputNumbeds, "100");
        
        expect(screen.getByTestId("numbeds-id")).toHaveValue(100);
    });
})

describe("<Scenario />", () => {
    test('Test census Input Field', () => {
        render(<Scenario />);
        const inputCensus = screen.getByTestId("census-id");
        expect(inputCensus).toBeInTheDocument();
        expect(inputCensus).toHaveAttribute("type", "text");
    
        
        expect(screen.getByTestId("census-id")).toHaveValue("100");
    });
})





