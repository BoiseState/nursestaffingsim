import React from 'react';
import { Modal, Button, Container, Form } from "react-bootstrap";
import './StaffAdd.css';

// we're getting a warning when you open the modal. I believe this is because there are things in here that are outside the modal. At least in Angular, the modal opening is
// triggered from another component (so once we refactor, should be triggered in Main.js), then only modal pieces are in  StaffAdd.js, and there's a listener on the close in
// Main.js so once the modal is submitted, that data is passed back to Main.js
// Here's the error message:
// index.js:1 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
//     at div
//     at Transition (http://localhost:3000/f21-angels-of-mercy/static/js/vendors~main.chunk.js:47205:30)
//     at http://localhost:3000/f21-angels-of-mercy/static/js/vendors~main.chunk.js:10169:24
//     at BackdropTransition
//     at http://localhost:3000/f21-angels-of-mercy/static/js/vendors~main.chunk.js:44882:24
//     at http://localhost:3000/f21-angels-of-mercy/static/js/vendors~main.chunk.js:11611:23
//     at div
//     at http://localhost:3000/f21-angels-of-mercy/static/js/vendors~main.chunk.js:9528:23
//     at StaffAdd (http://localhost:3000/f21-angels-of-mercy/static/js/main.chunk.js:1429:5)
//     at div
//     at Scenario (http://localhost:3000/f21-angels-of-mercy/static/js/main.chunk.js:1057:5)
//     at div
//     at Main
//     at div
//     at App

// also noticing another bug where the url is holding the value of the selected items in the modal. We should look at how to fix this in the next sprint because it might look different after the refactor
class StaffAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			staffs: [],

			
			open: false,
			show: false,
		};
	}

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

	handleAdd = (value) => {
		value.preventDefault();
		const formData = new FormData(value.target),
			formDataObj = Object.fromEntries(formData.entries())

		var uuid = this.generateUUID();
		console.log(uuid);

		let staff = { id: uuid, num: formDataObj.quantity, type: formDataObj.staffType, shift: formDataObj.shift };
		let staffs = [...this.state.staffs, staff]
		this.setState({ staffs: staffs });
		this.props.onStaffChange(staffs);  //Updates the Scenario's state variable.
		this.handleClose();
	}
	addNum = (id) => {
		let staffs = this.state.staffs;
		for (var i = 0; i < staffs.length; i++) {
			if (staffs[i].id === id) {
				staffs[i].num++;
			}

		}
		this.setState({ staffs: staffs });
		this.props.onStaffChange(staffs);  //Updates the Scenario's state variable.
	}

	reduceNum = (e, id) => {
		let staffs = this.state.staffs;

		let isDelete = false;
		for (var i = 0; i < staffs.length; i++) {
			if (staffs[i].id === id) {
				if (e >= 1) {
					staffs[i].num = e;

				} else {
					isDelete = true;
				}
				break;
			}

		}
		if (isDelete) {
			staffs = staffs.filter(item => item.id !== id)
		}

		this.setState({ staffs: staffs });
		this.props.onStaffChange(staffs);   //Updates the Scenario's state variable.

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
			<Container id="resultsCont" fluid>
				<Button variant="primary" onClick={this.handleShow}>Add new Staff</Button>


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
								Submit
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</Container>
		);
	}



}
export default StaffAdd
