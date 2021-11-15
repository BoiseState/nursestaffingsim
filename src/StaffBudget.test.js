import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Scenario from './components/main/Scenario.js';
import StaffAdd from './components/main/StaffAdd.js';

//     test('Test confirm add new staff button', () => {
//     render(<Scenario/>);

//     const staffAddBtn = screen.getByTestId("addstaff-id");

//     // expected initial values
//     expect(staffAddBtn).toBeInTheDocument();

//     // button click to get modal up
//     userEvent.click(staffAddBtn);

//     // make sure modal and "Add New Staff" button are there
//     const staffAddModal = screen.getByTestId("addStaffModal-id");
//     expect(staffAddModal).toBeInTheDocument();
//     const confirmStaffAddBtn = screen.getByTestId("addStaffConfirm-id");
//     expect(confirmStaffAddBtn).toBeInTheDocument();

//     // add default staff choices
//     userEvent.click(confirmStaffAddBtn);
//     expect(staffAddModal).not.toBeInTheDocument(); // modal disappears on add

//     // make sure staff member was added
//     const staffListTable = screen.getByTestId("staffList-id");
//     expect(staffListTable).toBeInTheDocument();
//     const newStaff = screen.getByText("RN");
//     expect(newStaff).toBeInTheDocument();
// });

// Test budget
describe("<StaffBudget />", () => {
    test('Test show budget', () => {
        render(<Scenario />);
        const showBudget = screen.getByTestId("showbudget-id");

        // initial expected value - budget shouldn't be on page
        expect(screen.queryByText("Total Budget for Staff")).toBeNull();

        // show budget checked
        userEvent.click(showBudget);
        expect(showBudget).toBeChecked();
        expect(screen.getByText("Total Budget for Staff")).toBeInTheDocument();
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