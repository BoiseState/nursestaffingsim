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
            	   unit:"",
            	   HPPD:"",
                   bedUnit:"",
                   census: 100,
               }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleStaffChange = (staff) => {
        this.setState({staffs: staff});
    }
    handleStaffAdd = (staffItem)=>{

        console.log(staffItem);
        let staffCopy = [...this.state.staffs, staffItem];
        this.setState({staffs: staffCopy});

    }

    handleInfoChange = (info) => {
        this.setState({info: info});
    }


    handleInputChange(event) {

        //Maybe look at using Formik library?
        //https://react-bootstrap.github.io/components/forms/#forms-validation-native
        //https://react-bootstrap.github.io/components/forms/#forms-validation-libraries

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        if (name !== 'unit') {
            if (value &&  !(/^\+?[1-9][0-9]*$/.test(value))) {
                alert("Only numbers(positive integers) can be entered");
                return;
            }
        }

        //https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
        this.setState(prevState => {
            let info = Object.assign({}, prevState.info);   // creating copy of state variable info
            info[name] = value;                             // update the name property, assign a new value                 
            return { info };                                // return new object info object
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
                                <input type='text' name='unit' value={this.state.info.unit} data-testid="unit-id" onChange={this.handleInputChange} />
                                <p>and the HPPD is</p>
                                <input type='text' name="HPPD" value={this.state.info.HPPD} data-testid="hppd-id" id="HPPD" onChange={this.handleInputChange} />
                                <p>. You have</p>
                                <input type='text' name="bedUnit" value={this.state.info.bedUnit} data-testid="numbeds-id" onChange={this.handleInputChange} id="bedUnit" />
                                <p>number of beds in your unit and your census is</p>
                                <input type='text' name="census" value={this.state.info.census} data-testid="census-id" id="census" onChange={this.handleInputChange} />
                                <p>% full. Based off of this scenario, allocate your staffing resources.</p>
                            </InputGroup>
                        </Form>
                    </Card.Body>
                </Card>

                <RandomHPPDInfo  onInfoChange={this.handleInfoChange} />
                <StaffAdd onStaffChange={this.handleStaffChange} onStaffAdd={this.handleStaffAdd} staffs={this.state.staffs} />
                <StaffList staffs={this.state.staffs} onStaffChangeOnUpdate={this.handleStaffChange}></StaffList>
                <Result staffs={this.state.staffs} info={this.state.info} ></Result>
            </div>
        );
    }
}

export default Scenario;
