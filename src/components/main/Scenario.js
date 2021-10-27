import React from 'react';
import { Form, InputGroup, Card } from "react-bootstrap";
import './Scenario.css';
import StaffAdd from './StaffAdd'
import StaffList from './StaffList'
import Result from './Result'
import RandomHPPDInfo from './RandomHPPDInfo'

class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results:"",
            staffNum:"The Results:",
            num:"",
			center:{"text-align":'center'},
            staffs: [],
            info:{
            	   unit:"St Lukes",
            	   HPPD:"",
                   bedUnit:"",
                   census: 100,
               }
        };

        this.changeHandler = this.changeHandler.bind(this);
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

   
    handleStaffChange = (staff) => {
        this.setState({staffs: staff});
    }

    handleInfoChange = (info) => {
        this.setState({info: info});
    }

    

    changeHandler(event) {
   // changeHandler = (event) => {
        // let name = event.target.name;
        // let val = event.target.value;
        // if (name !== 'unit') {
        //     if (val &&  !(/^\+?[1-9][0-9]*$/.test(val))) {
        //         alert("Only numbers(positive integers) can be entered");
        //         return;
        //     }
        // }


        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
       // this.setState({"info.HPPD": value});
        // this.setState({
        //   [name]: value
        // });
        //https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
        this.setState(prevState => {
            let info = Object.assign({}, prevState.info);  // creating copy of state variable info
            info[name] = value;                     // update the name property, assign a new value                 
            return { info };                                 // return new object info object
          })
        
    }

	

    render() {
        return (
            <div className="App">

                <Card id="scenario">
                    <Card.Header>Fill out the scenario fields based off of the in-class example.</Card.Header>
                    <Card.Body>
                        <Form>
                            <InputGroup size="sm" className="mb-3">
                                <p>The hospital unit is</p>
                                <input type='text' name='unit' value={this.state.info.unit} data-testid="unit-id" onChange={this.changeHandler} />
                                <p>and the HPPD is</p>
                                <input type='text' name="HPPD" value={this.state.info.HPPD} data-testid="hppd-id" id="HPPD" onChange={this.changeHandler} />
                                <p>. You have</p>
                                <input type='text' name="bedUnit" value={this.state.info.bedUnit} data-testid="numbeds-id" onChange={this.changeHandler} id="bedUnit" />
                                <p>number of beds in your unit and your census is</p>
                                <input type='text' name="census" value={this.state.info.census} data-testid="census-id" id="census" onChange={this.changeHandler} />
                                <p>% full. Based off of this scenario, allocate your staffing resources.</p>
                            </InputGroup>
                        </Form>
                    </Card.Body>
                </Card>

                <StaffAdd onStaffChange={this.handleStaffChange} staffs={this.state.staffs}  />
                <Result staffNum={this.state.staffNum} staffs={this.state.staffs} info={this.state.info}   ></Result>
                <StaffList staffs={this.state.staffs} info={this.state.info}></StaffList>
                <RandomHPPDInfo  onInfoChange={this.handleInfoChange} />
            </div>
        );
    }
}

export default Scenario;
