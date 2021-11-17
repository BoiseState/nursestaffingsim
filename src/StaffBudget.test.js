import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scenario from './components/main/Scenario.js';
import StaffAdd from './components/main/StaffAdd.js';

// Test budget
describe("<StaffBudget />", () => {
    test('Test show budget', () => {
        render(<Scenario />);
        const showBudget = screen.getByTestId("showbudget-id");

        // initial expected value - budget shouldn't be on page
        expect(screen.queryByText("Total Staff Expenses")).toBeNull();

        // show budget checked
        userEvent.click(showBudget);
        expect(showBudget).toBeChecked();
        expect(screen.getByText("Total Staff Expenses")).toBeInTheDocument();
    });

    test('Test budget accuracy', () => {
        render(<Scenario/>);
        const showBudget = screen.getByTestId("showbudget-id");

        // initial budget should be 0
        userEvent.click(showBudget);
        expect(showBudget).toBeChecked();
        expect(screen.getByText("$0")).toBeInTheDocument();

        // add staff
        const staffAddBtn = screen.getByTestId("addstaff-id");
        userEvent.click(staffAddBtn);
        const confirmStaffAddBtn = screen.getByTestId("addStaffConfirm-id");
        userEvent.click(confirmStaffAddBtn);

        // check budget value
        expect(screen.getByText("$420")).toBeInTheDocument();
    });
})
