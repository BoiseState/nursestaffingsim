import React from 'react';
import { Form, InputGroup, Card } from "react-bootstrap";
import { Typography, Paragraph, Layout, Button } from 'antd';
import './Scenario.css';
import StaffAdd from './StaffAdd'


class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "BSU In-Patient Nurse Staffing Simulator",
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
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({ [name]: val });
    }

    calculation = (info, num) => {

        if (info.bedUnit !== '' && info.census !== '' && info.HPPD !== '' && num !== '') {
            let result = (info.bedUnit * (info.census / 100)) * info.HPPD / 12;
            console.log(num + ":" + result)
            if (parseInt(num) <= parseInt(result)) {
                let show = `In line with budget`;
                this.setState({ "results": show });
                this.setState({ "staffNum": "The Results:" + num });
            } else {
                let show = `The rated budget has been exceeded`;
                this.setState({ "results": show });
                this.setState({ "staffNum": "The Results:" + num });
            }
        }

    }

    setInfo = (name, value) => {
        let info = this.state.info;
        if (name === 'unit') {
            info.unit = value;
        } else if (name === 'HPPD') {
            info.HPPD = value;
        } else if (name === 'census') {
            info.census = value;
        } else if (name === 'bedUnit') {
            info.bedUnit = value;
        }
        this.setState({ info: info });
        this.calculation(info, this.state.num);
    }
    setInfoStaffNum = (num) => {
        debugger;
        this.setState({ "num": num });
        this.calculation(this.state.info, num);
    }
    handleAdd = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name !== 'unit') {
            if (!(/^\+?[1-9][0-9]*$/.test(value))) {
                alert("Only numbers(positive integers) can be entered");
                return;
            }
        }


        this.setInfo(name, value)

    }

    random = (Min, Max) => {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    handleRandom = () => {
        const num1 = this.random(8, 24);
        var a = document.getElementById("HPPD");
        a.value = num1;
        this.setInfo("HPPD", num1);

        const num2 = this.random(1, 100);
        a = document.getElementById("census");
        a.value = num2;
        this.setInfo("census", num2);
        const num3 = this.random(10, 1000);
        a = document.getElementById("bedUnit");
        a.value = num3;
        this.setInfo("bedUnit", num3);
    }

    render() {
        return (
            <div className="App">

                <Card id="scenario">
                    <Card.Header>Fill out the scenario fields based off of the in-class example.</Card.Header>
                </Card>

                <Layout>
                    <Layout.Content>
                        <Typography>
                            <Typography.Title style={this.state.center} >{this.state.title}</Typography.Title>
                            <Typography.Paragraph style={this.state.center}>
                                The hospital unit is <input name="unit" data-testid="unit-id" id="unit" onChange={this.handleAdd} /> and the HPPD is <input name="HPPD" data-testid="hppd-id" id="HPPD" onChange={this.handleAdd} />
                                . You have  <input name="bedUnit" data-testid="numbeds-id" onChange={this.handleAdd} id="bedUnit" /> number of beds in your unit and your census is <input name="census" data-testid="census-id" id="census" onChange={this.handleAdd} />% full. Based off of this scenario,
                                allocate your staffing resources.</Typography.Paragraph>
                            <Typography.Paragraph style={this.state.center}>

                            </Typography.Paragraph>
                        </Typography>
                    </Layout.Content>
                </Layout>

                <StaffAdd staffs={this.state.staffs} results={this.state.results} staffNum={this.state.staffNum} setInfoStaffNum={this.setInfoStaffNum} />

            </div>
        );
    }
}

export default Scenario;