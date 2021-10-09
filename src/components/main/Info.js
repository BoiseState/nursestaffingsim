import React,{Component} from 'react';
import './index.css';
import { Typography,Paragraph,Layout,Button  } from 'antd';
import 'antd/dist/antd.css'
class Info extends Component
{
	 
	 
		
		state=
		{
			   //title:"BSU In-Patient Nurse Staffing Simulator",
			   center:{"text-align":'center'}
		}
		
		
		handleAdd = (e) =>
		{
			const name = e.target.name;
			const value = e.target.value;
			if(name!=='unit')
			{
				if(!(/^\+?[1-9][0-9]*$/.test(value)))
				{
                    alert("Only numbers(positive integers) can be entered");
					return;
				}
			}
			
			
			this.props.setInfo(name,value)	
			
		}
		random = (Min,Max) =>{
			var Range = Max - Min;   
			var Rand = Math.random();   
			return (Min + Math.round(Rand * Range));
		}
		handleRandom = () =>
		{
			const num1 = this.random(8,24);
			var a=document.getElementById("HPPD");
			a.value=num1;
			this.props.setInfo("HPPD",num1);	
			
			const num2 = this.random(1,100);
			a=document.getElementById("census");
			a.value=num2;
		    this.props.setInfo("census",num2)	;
			const num3 = this.random(10,1000);
			a=document.getElementById("bedUnit");
			a.value=num3;
			this.props.setInfo("bedUnit",num3)	;
		}

	  render () {
	    return (
		<Layout>
			<Layout.Content>
				<Typography>
				   <Typography.Title style={this.state.center} >{this.state.title}</Typography.Title>
				   <Typography.Paragraph style={this.state.center}>  
					Hostpital unit is <input name="unit" id="unit"  onChange={this.handleAdd}/> and HPPD is <input  name="HPPD" id="HPPD" onChange={this.handleAdd} />
					you census is <input name="census"  id="census" onChange={this.handleAdd} />% full in a  <input name="bedUnit"  onChange={this.handleAdd} id="bedUnit"/> bed unit
					 Allocate your resources accordlingly
					 </Typography.Paragraph>
				   <Typography.Paragraph style={this.state.center}>
					<Button onClick={this.handleRandom}>Add Home Practice</Button>
					</Typography.Paragraph>
				</Typography>
			</Layout.Content>
		</Layout>
		);
	  }
			
		
	
}
export default Info

