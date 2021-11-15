import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StaffAdd from './components/main/StaffAdd';
import Scenario from './components/main/Scenario';

// Staff Add button test
describe("<StaffAdd />", () => {
    test('Test add staff to open modal button', () => {
        render(<StaffAdd/>);

        const staffAddBtn = screen.getByTestId("addstaff-id");

        // expected initial values
        expect(staffAddBtn).toBeInTheDocument();

        // button click
        userEvent.click(staffAddBtn);

        // after staffAdd clicked, modal should be visible
        const staffAddModal = screen.getByTestId("addStaffModal-id");
        expect(staffAddModal).toBeInTheDocument();
        expect(staffAddModal).toBeVisible();
    });

    test('Test confirm add new staff button', () => {
        render(<Scenario/>);

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
    });

    test('Test cancel add staff button', () => {
        render(<Scenario/>);

        const staffAddBtn = screen.getByTestId("addstaff-id");

        // expected initial values
        expect(staffAddBtn).toBeInTheDocument();

        // button click to get modal up
        userEvent.click(staffAddBtn);

        // make sure modal and cancel button are there
        const staffAddModal = screen.getByTestId("addStaffModal-id");
        expect(staffAddModal).toBeInTheDocument();
        const cancelBtn = screen.getByTestId("cancelStaffAdd-id");
        expect(cancelBtn).toBeInTheDocument();

        // cancel staff add
        userEvent.click(cancelBtn);
        
        // make sure modal is gone and staff member wasn't added
        expect(staffAddModal).not.toBeInTheDocument();
        expect(screen.queryByText("Staff Type")).toBeNull();
    });
})