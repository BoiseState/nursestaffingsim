import React from 'react';
import { Modal, Button, Container, Form } from "react-bootstrap";
import './StaffAdd.css';

// also noticing another bug where the url is holding the value of the selected items in the modal. We should look at how to fix this in the next sprint because it might look different after the refactor
class StaffAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			show: false,
		};
	}

	//Used to generate an ID for each Staff entry.  We might want ID later to manipulate the staffs collection.
	generateUUID = () => {
		var s = [];
		var hexDigits = "0123456789abcdef";
		for (var i = 0; i < 36; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";
		return s.join("");
	}
	getShiftValue = (shiftString) => {
        //considered changing shift to just be 12,...8 so parseint would just work
        //but additional information from string i.e. day, night might be needed.
        let shiftValue = 0;
        switch (shiftString) {
            case '12 Hours Day':
                shiftValue = 12;
                break;
            case '12 Hours Night':
                shiftValue = 12;
                break;
            case '8 Hours Day':
                shiftValue = 8;
                break;
            case '8 Hours Evening':
                shiftValue = 8;
                break;
            case '8 Hours Night':
                shiftValue = 8;
                break;
            default:
                shiftValue = 0;
        }

        return shiftValue;
    }
	handleAdd = (value) => {
		value.preventDefault();
		const formData = new FormData(value.target),
			formDataObj = Object.fromEntries(formData.entries())

		var uuid = this.generateUUID();
		var shiftTotal = parseInt(formDataObj.quantity) * this.getShiftValue(formDataObj.shift);
		let staff = { id: uuid, quantity: formDataObj.quantity, type: formDataObj.staffType, shift: formDataObj.shift, shiftTotal: shiftTotal };

		this.props.onStaffAdd(staff);
		this.handleClose();
	}

	

	handleClose = () => {
		this.setState({ "show": false });
	}
	handleShow = () => {
		this.setState({ "show": true });
	}

	render() {


		let qtyVals = [];
		for (let i = 1; i <= 50; i++) {
			qtyVals.push(i);
		}
		const qtyList = qtyVals.map((qty) =>
			<option key={qty} value={qty}>{qty}</option>
		);

		return (
			<Container id="resultsCont" >
                  <button type="button" className="btn btn-outline-primary pull-left" onClick={this.handleShow}>Add Staff</button>

				<Modal animation={false} show={this.state.show} onHide={this.handleClose}>
					<Form onSubmit={this.handleAdd}>
						<Modal.Header>
							<Modal.Title>Select your staff member</Modal.Title>
						</Modal.Header>
						<Modal.Body>

							<Form.Group className="mb-3" controlId="staffType" required>
								<Form.Label>Staff Type</Form.Label>
								<Form.Control as="select" name="staffType">
									<option value="RN">RN</option>
									<option value="LVN">LVN</option>
									<option value="Unlicensed">Unlicensed</option>
								</Form.Control>
							</Form.Group>
							<Form.Group className="mb-3" controlId="shiftType" required>
								<Form.Label>Shift Type</Form.Label>
								<Form.Control as="select" name="shift" className="caret">
									<option value="12 Hours Day">12 Hours Day</option>
									<option value="12 Hours Night">12 Hours Night</option>
									<option value="8 Hours Day">8 Hours Day</option>
									<option value="8 Hours Evening">8 Hours Evening</option>
									<option value="8 Hours Night">8 Hours Night</option>
								</Form.Control>
							</Form.Group>
							<Form.Group className="mb-3" controlId="quantity" required>
								<Form.Label>Quantity</Form.Label>
								<Form.Control as="select" name="quantity">
									{qtyList}
								</Form.Control>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={this.handleClose}>
								Close
							</Button>
							<Button variant="primary" type="submit">
								Add new Staff
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</Container>
		);
	}



}
export default StaffAdd
