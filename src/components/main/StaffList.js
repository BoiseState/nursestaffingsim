import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './StaffList.css';

class StaffList extends React.Component {
   
  

    render() {

        const staffList = this.props.staffs.map((staff, i) =>
            <Row key={staff.id} id={staff.id} className="border">
                <Col className="border">{staff.quantity}</Col>
                <Col className="border">{staff.type}</Col>
                <Col className="border">{staff.shift}</Col>
            </Row>
        );
        return (

            
            
            <Container id="staffCont">
                {staffList.length > 0 ? <Row className="border">
                    <Col className="border">Quantity</Col>
                    <Col className="border">Staff Type</Col>
                    <Col className="border">Shift Type</Col>
                </Row> : false}
                {staffList}
            </Container>
        );
    }
}

export default StaffList;
