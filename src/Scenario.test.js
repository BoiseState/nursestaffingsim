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

    test('Test census updates after bed number updated', () => {
        render(<Scenario />);
        const inputNumbeds = screen.getByTestId("numbeds-id");
        expect(inputNumbeds).toBeInTheDocument();
        expect(inputNumbeds).toHaveAttribute("type", "number");
    
        userEvent.type(inputNumbeds, "100");
        
        expect(screen.getByTestId("numbeds-id")).toHaveValue(100);
        expect(screen.getByTestId("census-id")).toHaveValue(100);
    })
    
    test('Test census Input Field', () => {
        render(<Scenario />);
        const inputCensus = screen.getByTestId("census-id");
        expect(inputCensus).toBeInTheDocument();
        expect(inputCensus).toHaveAttribute("type", "number");
    
        userEvent.type(inputCensus, "50");

        expect(screen.getByTestId("census-id")).toHaveValue(50);
    });
})

//Invalid tests
describe("<Scenario />", () => {
    test('Test Negative HPPD Input Field', () => {
        render(<Scenario />);

        const inputUnit = screen.getByTestId("hppd-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "number");
    
        userEvent.type(inputUnit, "-12");
        
        expect(screen.getByTestId("hppd-id")).toHaveValue(-12);
        expect(screen.findByText("HPPD should be between 1 and 30"));
    });

    test('Test Negative Bed Unit Input Field', () => {
        render(<Scenario />);

        const inputUnit = screen.getByTestId("numbeds-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "number");
    
        userEvent.type(inputUnit, "-12");
        
        expect(screen.getByTestId("numbeds-id")).toHaveValue(-12);
        expect(screen.findByText("Number of beds should be between 1 and 60"));
    });

    test('Test Negative Census Input Field', () => {
        render(<Scenario />);

        const inputUnit = screen.getByTestId("census-id");
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "number");
    
        userEvent.type(inputUnit, "-12");
        
        expect(screen.getByTestId("census-id")).toHaveValue(-12);
        expect(screen.findByText("Census cannot be less than 1"));
    });

    test('Test census higher than number of beds input', () => {
        render(<Scenario />);

        const censusInput = screen.getByTestId("census-id");
        const numBedInput = screen.getByTestId("numbeds-id");
        expect(censusInput).toBeInTheDocument();
        expect(numBedInput).toBeInTheDocument();

        userEvent.type(numBedInput, "10");
        expect(screen.getByTestId("numbeds-id")).toHaveValue(10);

        userEvent.clear(censusInput);
        userEvent.type(censusInput, "15");
        expect(screen.getByTestId("census-id")).toHaveValue(15);
        expect(screen.findByText("Census cannot exceed the number of beds in a unit!"));
    });
})
