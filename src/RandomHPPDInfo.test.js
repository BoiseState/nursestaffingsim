import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scenario from './components/main/Scenario.js';

// Random button test
describe("<RandomHPPDInfo />", () => {
    test('Test random button', () => {
        render(<Scenario />);

        const inputUnit = screen.getByTestId("unit-id");
        const inputHppd = screen.getByTestId("hppd-id");
        const inputCensus = screen.getByTestId("census-id");
        const inputNumbeds = screen.getByTestId("numbeds-id");
        const randomBtn = screen.getByTestId("random-id");

        // initial checking of component elements
        expect(inputUnit).toBeInTheDocument();
        expect(inputUnit).toHaveAttribute("type", "text");
        expect(inputHppd).toBeInTheDocument();
        expect(inputHppd).toHaveAttribute("type", "number");
        expect(inputCensus).toBeInTheDocument();
        expect(inputCensus).toHaveAttribute("type", "number");
        expect(inputNumbeds).toBeInTheDocument();
        expect(inputNumbeds).toHaveAttribute("type", "number");
        expect(randomBtn).toBeInTheDocument();
        expect(randomBtn).toHaveAttribute("type", "button");

        // before random is clicked, everything should be null/undefined
        expect(screen.getByTestId("hppd-id")).toHaveValue(null);
        expect(screen.getByTestId("unit-id")).toHaveValue("");
        expect(screen.getByTestId("census-id")).toHaveValue(null);
        expect(screen.getByTestId("numbeds-id")).toHaveValue(null);

        // click random button
        userEvent.click(randomBtn);

        // after button is clicked, expect values to change
        // have to parse number values back out since HTML value field is string
        const newHPPD = screen.getByTestId("hppd-id");
        let hppdnum = parseInt(newHPPD.value, 10);
        expect(hppdnum).toBeGreaterThan(0);
        expect(hppdnum).toBeLessThan(31);
        expect(screen.getByTestId("unit-id")).toHaveValue("Random Hospital Unit");
        const newNumbeds = screen.getByTestId("numbeds-id");
        let numbedsnum = parseInt(newNumbeds.value, 10);
        expect(numbedsnum).toBeGreaterThan(0);
        expect(numbedsnum).toBeLessThan(61);
        const newCensus = screen.getByTestId("census-id");
        let censusNum = parseInt(newCensus.value, 10);
        expect(censusNum).toBeGreaterThan(0);
        expect(censusNum).toBeLessThanOrEqual(numbedsnum);
    });
})