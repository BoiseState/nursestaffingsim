import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StaffAdd from './components/main/StaffAdd';
import Scenario from './components/main/Scenario';

// Test buttons for StaffList
describe("<StaffList/>", () => {
    test('Test delete staff button', () => {
        render(<Scenario />);

        const staffAddBtn = screen.getByTestId("addstaff-id");

        // expected initial values
        expect(staffAddBtn).toBeInTheDocument();

        // button click to get modal up
        userEvent.click(staffAddBtn);

        // make sure modal and "Add New Staff" button are there
        const staffAddModal = screen.getByTestId("addStaffModal-id");
        expect(staffAddModal).toBeInTheDocument();
        const confirmStaffAddBtn = screen.getByTestId("addStaffConfirm-id");
        expect(confirmStaffAddBtn).toBeInTheDocument();

        // add default staff choices
        userEvent.click(confirmStaffAddBtn);
        expect(staffAddModal).not.toBeInTheDocument(); // modal disappears on add

        // make sure staff member was added
        const staffListTable = screen.getByTestId("staffList-id");
        expect(staffListTable).toBeInTheDocument();
        const newStaff = screen.getByText("RN");
        expect(newStaff).toBeInTheDocument();

        // delete staff
        const deleteBtn = screen.getByTestId("delete-id");
        expect(deleteBtn).toBeInTheDocument();
        userEvent.click(deleteBtn);
        expect(newStaff).not.toBeInTheDocument();
    });

    test('Test add and minus buttons', () => {
        render(<Scenario />);

        const staffAddBtn = screen.getByTestId("addstaff-id");

        // expected initial values
        expect(staffAddBtn).toBeInTheDocument();

        // button click to get modal up
        userEvent.click(staffAddBtn);

        // make sure modal and "Add New Staff" button are there
        const staffAddModal = screen.getByTestId("addStaffModal-id");
        expect(staffAddModal).toBeInTheDocument();
        const confirmStaffAddBtn = screen.getByTestId("addStaffConfirm-id");
        expect(confirmStaffAddBtn).toBeInTheDocument();

        // add default staff choices
        userEvent.click(confirmStaffAddBtn);
        expect(staffAddModal).not.toBeInTheDocument(); // modal disappears on add

        // make sure staff member was added
        const staffListTable = screen.getByTestId("staffList-id");
        expect(staffListTable).toBeInTheDocument();
        const newStaff = screen.getByText("RN");
        expect(newStaff).toBeInTheDocument();
        let staffQty = screen.getByText("1");
        expect(staffQty).toBeInTheDocument();

        // add staff quantity
        const addBtn = screen.getByTestId("add-id");
        expect(addBtn).toBeInTheDocument();
        userEvent.click(addBtn);
        staffQty = screen.getByText("2");
        expect(staffQty).toBeInTheDocument();

        // subtract staff quantity
        const subtractBtn = screen.getByTestId("minus-id");
        expect(subtractBtn).toBeInTheDocument();
        userEvent.click(subtractBtn);
        staffQty = screen.getByText("1");
        expect(staffQty).toBeInTheDocument();
    });
})