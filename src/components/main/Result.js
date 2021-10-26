import React from 'react';
import {  Row, Col } from "react-bootstrap";
import './Result.css';

class Result extends React.Component {
   
    render() {

        const staffList = this.props.staffs.map((staff) =>
        <Row key={staff.id} id={staff.id} className="border">
            <Col className="border">{staff.num}</Col>
            <Col className="border">{staff.type}</Col>
            <Col className="border">{staff.shift}</Col>
        </Row>
    );

        return (

            <div id="results">
                {staffList}
            <p>{this.props.staffNum}</p  >
            <p>{this.props.results}</p >
          </div>
        );
    }
}

export default Result;
