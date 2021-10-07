import React from 'react';
import { Form, InputGroup, Card } from "react-bootstrap";
import './Scenario.css';

class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: '',
            hppd: null,
            census: 100, // default to 100% full
            numbeds: null
        };
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    }

    render() {
        return (
            <Card id="scenario">
                <Card.Header>Fill out the scenario fields based off of the in-class example.</Card.Header>
                <Card.Body>
                        <Form>
                            <InputGroup size="sm" className="mb-3">
                                <p>The hospital unit is </p>
                                <input type='text' name='unit' onChange={this.changeHandler}/>
                                <p> and the HPPD is </p>
                                <input type='text' name='hppd' onChange={this.changeHandler}/>
                                <p>. You have </p>
                                <input type='text' name='numbeds' onChange={this.changeHandler}/>
                                <p> number of beds in your unit and your census is </p>
                                <input type='text' name='census' value={this.state.census} onChange={this.changeHandler}/>
                                <p>% full. Based off of this scenario, allocate your staffing resources.</p>
                            </InputGroup>
                        </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default Scenario;