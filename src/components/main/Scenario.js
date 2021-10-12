import { text } from 'dom-helpers';
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

    //We are going to need to have alerts or errors so that we can test incorrect 
    //input as of right now there is not a good way to test bad input in the scenario.test.js
    // submitHandler = (event) => {
    //     event.preventDefault();
    //     let unit = this.state.unit;
    //     let hppd = this.state.hppd;
    //     let numbeds = this.state.numbeds;

    //     if (!Number(hppd) && !Number(numbeds)) {
    //         alert("Your hppd must be a number");
    //         alert("Your numbeds must be a number");
    //     }
    //     if(Number(unit)){
    //         alert("Your unit can't be a number")
    //     }

    // }

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
                                <input type='text' name='unit' data-testid="unit-id" onChange={this.changeHandler}/>
                                <p> and the HPPD is </p>
                                <input type='number' name='hppd' data-testid="hppd-id" onChange={this.changeHandler}/>
                                <p>. You have </p>
                                <input type='number' name='numbeds' data-testid="numbeds-id" onChange={this.changeHandler}/>
                                <p> number of beds in your unit and your census is </p>
                                <input type='text' name='census' data-testid="census-id" value={this.state.census} onChange={this.changeHandler}/>
                                <p>% full. Based off of this scenario, allocate your staffing resources.</p>
                            </InputGroup>
                        </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default Scenario;