import React from 'react';
//import { Form, InputGroup, Card } from "react-bootstrap";
import './Scenario.css';
import StaffAdd from './StaffAdd'
import StaffList from './StaffList'
import Result from './Result'
import RandomHPPDInfo from './RandomHPPDInfo'

class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: "",
            staffNum: "The Results:",
            num: "",
            center: { "text-align": 'center' },
            staffs: [],
            info: {
                unit: "",
                HPPD: "",
                bedUnit: "",
                census: 100,
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleStaffChange = (staff) => {
        this.setState({ staffs: staff });
    }
    handleStaffAdd = (staffItem) => {

        console.log(staffItem);
        let staffCopy = [...this.state.staffs, staffItem];
        this.setState({ staffs: staffCopy });

    }

    handleInfoChange = (info) => {
        this.setState({ info: info });
    }


    handleInputChange(event) {

        //Maybe look at using Formik library?
        //https://react-bootstrap.github.io/components/forms/#forms-validation-native
        //https://react-bootstrap.github.io/components/forms/#forms-validation-libraries

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name !== 'unit') {
            if (value && !(/^\+?[1-9][0-9]*$/.test(value))) {
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

                <div className="row mt-5">
                    <div className="col-sm-9">
                        <form className="row">

                            <div className="mb-3">
                                <label htmlFor="unit" className="form-label">Hospital unit</label>
                                <input className="form-control" type="text" name="unit" id="unit" data-testid="unit-id" placeholder="Hospital Unit" onChange={this.handleInputChange} />
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="HPPD" className="form-label">HPPD</label>
                                <input className="form-control" type="text" name="HPPD" id="HPPD" data-testid="hppd-id" placeholder="HPPD" onChange={this.handleInputChange} />
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="bedUnit" className="form-label">Number of beds</label>
                                <input className="form-control" type="text" name="bedUnit" id="bedUnit" data-testid="numbeds-id" placeholder="Number of Beds" onChange={this.handleInputChange} />
                            </div>

                            <div className="col-sm-4">
                                <label htmlFor="census" className="form-label">Census</label>
                                <input className="form-control" type="text" name="census" id="census" data-testid="census-id" placeholder="Census" onChange={this.handleInputChange} />
                            </div>

                            <div className="col-sm-4 mt-2 " id="resultsCont">
                                <StaffAdd onStaffChange={this.handleStaffChange} onStaffAdd={this.handleStaffAdd} staffs={this.state.staffs} />
                            </div>
                            <div className="col-sm-4 mt-2 " id="resultsCont">
                                <RandomHPPDInfo onInfoChange={this.handleInfoChange} />
                            </div>
                        </form>
                    </div>
                    <div className="col-3">
                        <Result staffs={this.state.staffs} info={this.state.info} ></Result>
                    </div>

                </div>

                <StaffList staffs={this.state.staffs} ></StaffList>
            </div>
        );
    }
}

export default Scenario;
