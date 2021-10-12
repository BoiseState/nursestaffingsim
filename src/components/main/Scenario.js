import React from 'react';
import { Form, InputGroup, Card } from "react-bootstrap";
import './Scenario.css';
import StaffAdd from './StaffAdd'
import Info from './Info'

class Scenario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"BSU In-Patient Nurse Staffing Simulator",
            results:"",
            staffNum:"The Results:",
            num:"",
            staffs: [],
            info:{
            	   unit:"",
            	   HPPD:"",
                bedUnit:"",
                census:"",
               }
        };
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    }
	
	/*calculation = (info,num) =>
	{
	
		if(info.bedUnit!=='' && info.census!=='' && info.HPPD!=='' && num!=='')
		{
			let result = (info.bedUnit*(info.census/100))*info.HPPD/12;
			 console.log(num+":"+result)
			if(parseInt(num)<=parseInt(result))
			{
				let show = `In line with budget`;
			    this.setState({"results":show});
			    this.setState({"staffNum":"The Results:"+num});
			}else
			{
			     let show =`The rated budget has been exceeded`;
			     this.setState({"results":show});
			      this.setState({"staffNum":"The Results:"+num});
			}
		}
		
	}*/
	
	setInfo = (name,value) =>
	{
		let info=this.state.info;
		if(name==='unit')
		{
			info.unit=value;
		}else if(name==='HPPD')
		{
			info.HPPD=value;
		}else if(name==='census')
		{
			info.census=value;
		}else if(name==='bedUnit')
		{
			info.bedUnit=value;
		}
		this.setState({info:info});
		this.calculation(info,this.state.num);
	}
	setInfoStaffNum = (num) =>
	{
		debugger;
		this.setState({"num":num});
		this.calculation(this.state.info,num);
	}
	
    render() {
        return (
            <div className="App">
            		<Info props={this.state} setInfo={this.setInfo}/>
            		<StaffAdd staffs={this.state.staffs}  results={this.state.results} staffNum={this.state.staffNum} setInfoStaffNum={this.setInfoStaffNum}/>
            </div>
        );
    }
}

export default Scenario;
