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
                census: "",
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

                     <div className="col-md-3 col-sm-6 order-sm-last">
                        <Result staffs={this.state.staffs} info={this.state.info} ></Result>
                    </div>
                    
                    <div className="col-md-9 col-sm-6 order-sm-first">
                        <form className="row">

                            <div className="col-md-12">
                                <label htmlFor="unit" className="form-label">Hospital unit</label>
                                <input className="form-control" type="text" name="unit" id="unit" data-testid="unit-id" placeholder="Hospital Unit" onChange={this.handleInputChange} value={this.state.info.unit} />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="HPPD" className="form-label">HPPD</label>
                                <input className="form-control" type="text" name="HPPD" id="HPPD" data-testid="hppd-id" placeholder="HPPD" onChange={this.handleInputChange} value={this.state.info.HPPD} />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="bedUnit" className="form-label">Number of beds</label>
                                <input className="form-control" type="text" name="bedUnit" id="bedUnit" data-testid="numbeds-id" placeholder="Number of Beds" onChange={this.handleInputChange} value={this.state.info.bedUnit} />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="census" className="form-label">Census</label>
                                <input className="form-control" type="text" name="census" id="census" data-testid="census-id" placeholder="Census" onChange={this.handleInputChange} value={this.state.info.census} />
                            </div>

                        </form>
                        <div className="row">
                            <div className="col-md-4 mt-4 " >
                                <StaffAdd onStaffChange={this.handleStaffChange} onStaffAdd={this.handleStaffAdd} staffs={this.state.staffs} />
                            </div>
                            <div className="col-md-4 mt-4 ">
                                <RandomHPPDInfo onInfoChange={this.handleInfoChange} />
                            </div>
                        </div>

                    </div>
                    
                    

                </div>
                <div className="row mt-5">
                    <div className="col-md-9">
                        <StaffList staffs={this.state.staffs} onStaffChangeOnUpdate={this.handleStaffChange} ></StaffList>
                    </div>
                </div>
            </div>
        );
    }
}

export default Scenario;
