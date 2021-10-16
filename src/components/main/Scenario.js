import React from 'react';
import { Form, InputGroup, Card } from "react-bootstrap";
import './Scenario.css';
import StaffAdd from './StaffAdd'

class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results:"",
            staffNum:"The Results:",
            num:"",
            staffs: [],
			unit: null,
			hppd: null,
			numbeds: null,
			census:100, // default to 100
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
		if(name!=='unit') {
			if(!(/^\+?[1-9][0-9]*$/.test(val)))
			{
				alert("Only numbers(positive integers) can be entered");
				return;
			}
		}
		this.setState({ [name]: val }, () => 
    	console.log(this.state));
    }
	
	setInfoStaffNum = (num) =>
	{
		debugger;
		this.setState({"num":num});
		// this.calculation(this.state.info,num);
	}
	
    render() {
        return (

            <div className="App">

                    <Card id="scenario">
                        <Card.Header>Fill out the scenario fields based off of the in-class example.</Card.Header>
						<Card.Body>
							<Form>
								<InputGroup size="sm" className="mb-3">
									<p>The hospital unit is </p>
									<input type='text' name='unit' data-testid="unit-id" onChange={this.changeHandler.bind(this)}/>
									<p> and the HPPD is </p>
									<input type='text' name='hppd' data-testid="hppd-id" onChange={this.changeHandler.bind(this)}/>
									<p>. You have </p>
									<input type='text' name='numbeds' data-testid="numbeds-id" onChange={this.changeHandler.bind(this)}/>
									<p> number of beds in your unit and your census is </p>
									<input type='text' name='census' data-testid="census-id" value={this.state.census} onChange={this.changeHandler.bind(this)}/>
									<p>% full. Based off of this scenario, allocate your staffing resources.</p>
								</InputGroup>
							</Form>
						</Card.Body>
					</Card>

            		<StaffAdd staffs={this.state.staffs}  results={this.state.results} staffNum={this.state.staffNum} setInfoStaffNum={this.setInfoStaffNum}/>
            </div>

        );
    }
}

export default Scenario;
