import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './StaffList.css';

class StaffList extends React.Component {
   
    listAdd = (index) =>{
        let quantity = parseInt(this.props.staffs[index].quantity)
        let shiftTotal = parseInt(this.props.staffs[index].shiftTotal)
        let shift = parseInt(this.props.staffs[index].shift)
        quantity = quantity + 1

        if (shift === 12) {
            shiftTotal = parseInt(shiftTotal) + 12;
        }else{
            shiftTotal = parseInt(shiftTotal) + 8;
        }
       
       if(quantity <= 100){
           this.props.staffs[index].quantity = quantity
           this.props.staffs[index].shiftTotal = shiftTotal
           this.props.parent.handleStaffChange(this.props.staffs)
       }
       
    }

    listSub = (index) =>{
        let quantity = parseInt(this.props.staffs[index].quantity)
        let shiftTotal = parseInt(this.props.staffs[index].shiftTotal)
        let shift = parseInt(this.props.staffs[index].shift)
        quantity = quantity - 1;

        if (shift === 12) {
            shiftTotal = parseInt(shiftTotal) - 12;
        }
        else {
            shiftTotal = parseInt(shiftTotal) - 8;
        }

       if(quantity <= 0){
           this.props.staffs.splice(index,1)
       }else{
           this.props.staffs[index].quantity = quantity
           this.props.staffs[index].shiftTotal = shiftTotal
       }
        this.props.parent.handleStaffChange(this.props.staffs)
    }

    render() {

        const staffList = this.props.staffs.map((staff, i) =>
            <Row key={staff.id} id={staff.id} className="border">
                <Col className="border">
                    <text className="btext" onClick={this.listAdd.bind(staff,i)}>+</text> 
                    <text className="btext2" onClick={this.listSub.bind(staff,i)}>-</text>
                </Col>
                <Col className="border">{staff.type}</Col>
                <Col className="border">{staff.quantity}</Col>
                <Col className="border">{staff.shift}</Col>
                <Col className="border">{staff.shiftTotal}</Col>
            </Row>
        );
        
        return (

            
            
            <Container id="staffCont">
                {staffList.length > 0 ? <Row className="border">
                    <Col className="border"></Col>
                    <Col className="border">Staff Type</Col>
                    <Col className="border">Quantity</Col>
                    <Col className="border">Shift Type</Col>
                    <Col className="border">Shift Total</Col>
                </Row> : false}
                {staffList}
            </Container>
        );
    }
}

export default StaffList;
